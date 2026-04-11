import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  try {
    const { 
      GOOGLE_CLIENT_EMAIL, 
      GOOGLE_PRIVATE_KEY, 
      SPREADSHEET_ID_PARTNERS, 
      SPREADSHEET_ID_EVANGELISTS 
    } = process.env;

    // Check if variables exist
    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || (!SPREADSHEET_ID_PARTNERS && !SPREADSHEET_ID_EVANGELISTS)) {
      console.warn("⚠️ Missing Google Sheets API Credentials or Spreadsheet IDs.");
      return NextResponse.json({ error: "Configuration Missing" }, { status: 500 });
    }

    // Google Auth Setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Helper function to dynamically fetch and map the first/last columns
    const fetchAndMapContent = async (spreadsheetId: string | undefined, roleName: string) => {
      if (!spreadsheetId) return [];

      try {
        // Get metadata to automatically find the correct name of the first tab
        const meta = await sheets.spreadsheets.get({ spreadsheetId });
        const firstSheetName = meta.data.sheets?.[0]?.properties?.title;
        
        if (!firstSheetName) return [];

        // Fetch all columns of that sheet
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: spreadsheetId,
          range: `${firstSheetName}!A:ZZ`, 
        });

        const rows = response.data.values;
        if (!rows || rows.length <= 1) return [];

        // Skip the header row and dynamically grab first and last columns
        return rows.slice(1).map((row) => {
          if (row.length === 0) return null; // skip completely empty rows
          
          const rawScore = row[row.length - 1]; // The very last active column in the row
          // Clean commas or spaces if numbers are formatted like "1,500"
          const parsedScore = parseInt(rawScore?.replace(/,/g, ''), 10);
          
          return {
            name: row[0] || 'Unknown',
            role: roleName,
            score: isNaN(parsedScore) ? 0 : parsedScore,
          };
        }).filter((item): item is NonNullable<typeof item> => item !== null);
      } catch (err) {
        console.error(`Failed to fetch spreadsheet ${spreadsheetId} for role ${roleName}:`, err);
        return [];
      }
    };

    // Parallel fetching for performance
    const [partnersData, evangelistsData] = await Promise.all([
      fetchAndMapContent(SPREADSHEET_ID_PARTNERS, 'Partner'),
      fetchAndMapContent(SPREADSHEET_ID_EVANGELISTS, 'Evangelist')
    ]);

    // Merge everything and sort globally by score descending
    const mergedData = [...partnersData, ...evangelistsData].sort((a, b) => b.score - a.score);

    return NextResponse.json(mergedData);
  } catch (error) {
    console.error("Error connecting to Google Sheets API:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard data" }, { status: 500 });
  }
}
