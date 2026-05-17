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
    { id: 2, sponsor: 'Collazon', url: '/images/community/Collazon.png' },
    { id: 3, sponsor: 'Decfor', url: '/images/community/decfor.jpg' },
    { id: 4, sponsor: 'EventDevX', url: '/images/community/eventdevx.png' },
    { id: 5, sponsor: 'GDSC Chapter 1', url: '/images/community/gdsc1.png' },
    { id: 6, sponsor: 'GDSC Chapter 2', url: '/images/community/gdsc2.png' },
    { id: 7, sponsor: 'GDSC Chapter 3', url: '/images/community/gdsc3.png' },
    { id: 8, sponsor: 'Hacknfinity', url: '/images/community/hacknfinity.jpg' },
    { id: 9, sponsor: 'InnovateX', url: '/images/community/InnovateX.jpg' },
    { id: 10, sponsor: 'LNC', url: '/images/community/LNC.png' },
    { id: 11, sponsor: 'NextStep', url: '/images/community/nextstep.jpeg' },
    { id: 12, sponsor: 'NooBuild', url: '/images/community/NooBuild.jpg' },
    { id: 13, sponsor: 'Sourcify', url: '/images/community/sourcify.jpeg' },
    { id: 14, sponsor: 'Sudden Chapter', url: '/images/community/sudden_chapter.jpg' },
];


//
// ================= SPONSORS =================
//

export const SPONSORS: Partner[] = [
    { id: 1, sponsor: 'Ascent', url: '/images/sponsor/Ascent.jpg' },
    { id: 2, sponsor: 'Circuitician', url: '/images/sponsor/Circuitician.png' },
    { id: 3, sponsor: 'CodeGeeks', url: '/images/sponsor/codegeeks.jpg' },
    { id: 4, sponsor: 'Haque', url: '/images/sponsor/Haque.jpeg' },
    { id: 5, sponsor: 'Interview Buddy', url: '/images/sponsor/interview_buddy.png' },
    { id: 6, sponsor: 'Roastway', url: '/images/sponsor/Roastway.png' },
    { id: 7, sponsor: 'StartNews', url: '/images/sponsor/StartNews.jpeg' },
    { id: 8, sponsor: 'DMV CoreTech', url: '/images/sponsor/DMV_CoreTech.jpg' },
    { id: 9, sponsor: 'Edubuk', url: '/images/sponsor/Edubuk.jpg' },
    { id: 10, sponsor: 'Vanguard', url: '/images/sponsor/Vanguard.jpg' },
    { id: 11, sponsor: 'Shadow Corps', url: '/images/sponsor/ShadowCorps.jpg' },
    { id: 12, sponsor: 'GeeksforGeeks', url: '/images/sponsor/GeeksforGeeks.jpg' },
    { id: 13, sponsor: 'Miro', url: '/images/sponsor/Miro.jpg' },
    { id: 14, sponsor: 'OSEN', url: '/images/sponsor/new_sponsor_5.png' },
    { id: 15, sponsor: 'IEEE', url: '/images/sponsor/new_sponsor_2.png' },
    { id: 16, sponsor: 'HackNest', url: '/images/sponsor/new_sponsor_3.png' },
    { id: 17, sponsor: 'Certify X', url: '/images/sponsor/new_sponsor_1.png' },
    { id: 18, sponsor: 'Namespace', url: '/images/sponsor/new_sponsor_4.png' },
    { id: 19, sponsor: 'Anibotix', url: '/images/sponsor/new_sponsor_6.jpg' },
];
