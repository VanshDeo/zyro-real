const baseurl = `https://res.cloudinary.com/dgc9mpvvw/image/upload/v1704024441/espektro/2023/sponsors/`;

export interface Partner {
    id: number;
    sponsor: string;
    url: string;
}

//
// ================= COMMUNITY =================
//
export const COMMUNITY: Partner[] = [
    { id: 1, sponsor: '2Techy', url: '/images/community/2techy.png' },
    { id: 2, sponsor: 'APEX', url: '/images/community/APEX.jpeg' },
    { id: 3, sponsor: 'Collazon', url: '/images/community/Collazon.png' },
    { id: 4, sponsor: 'Decfor', url: '/images/community/decfor.jpg' },
    { id: 5, sponsor: 'EventDevX', url: '/images/community/eventdevx.png' },
    { id: 6, sponsor: 'GDSC Chapter 1', url: '/images/community/gdsc1.png' },
    { id: 7, sponsor: 'GDSC Chapter 2', url: '/images/community/gdsc2.png' },
    { id: 8, sponsor: 'GDSC Chapter 3', url: '/images/community/gdsc3.png' },
    { id: 9, sponsor: 'Hacknfinity', url: '/images/community/hacknfinity.jpg' },
    { id: 10, sponsor: 'InnovateX', url: '/images/community/InnovateX.jpg' },
    { id: 11, sponsor: 'LNC', url: '/images/community/LNC.png' },
    { id: 12, sponsor: 'NextStep', url: '/images/community/nextstep.jpeg' },
    { id: 13, sponsor: 'NooBuild', url: '/images/community/NooBuild.jpg' },
    { id: 14, sponsor: 'Sourcify', url: '/images/community/sourcify.jpeg' },
    { id: 15, sponsor: 'Sudden Chapter', url: '/images/community/sudden_chapter.jpg' },
];


//
// ================= SPONSORS =================
//

export const SPONSORS: Partner[] = [
    { id: 1, sponsor: 'Ascent', url: '/images/sponsor/Ascent.jpg' },
    { id: 2, sponsor: 'Circuitician', url: '/images/sponsor/Circuitician.png' },
    { id: 3, sponsor: 'CodeGeeks', url: '/images/sponsor/codegeeks.jpg' },
    { id: 4, sponsor: 'G29', url: '/images/sponsor/g29.png' },
    { id: 5, sponsor: 'G30', url: '/images/sponsor/g30.png' },
    { id: 6, sponsor: 'Haque', url: '/images/sponsor/Haque.jpeg' },
    { id: 7, sponsor: 'Interview Buddy', url: '/images/sponsor/interview_buddy.png' },
    { id: 8, sponsor: 'Roastway', url: '/images/sponsor/Roastway.png' },
    { id: 9, sponsor: 'StartNews', url: '/images/sponsor/StartNews.jpeg' },
];
