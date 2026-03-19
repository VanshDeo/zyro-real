export interface BusinessComponent {
    id: number;
    number: string;
    date: string;
    title: string;
    description: string;
    color: string;
    position: {
        top?: string;
        left?: string;
        right?: string;
        transform?: string;
    };
    border: string;
    lineAngle: number;
    lineLength: number;
}

export const businessComponents: BusinessComponent[] = [
    {
        id: 1,
        number: '01',
        date: '12th March',
        title: 'Registration Opens',
        description: 'Join the global community of developers building the future of AI.',
        color: '#00E08F',
        position: { top: '15%', left: '0%' }, // Pulled in from -10% to prevent edge clipping
        border: 'right-bottom',
        lineAngle: 35,
        lineLength: 100
    },
    {
        id: 2,
        number: '02',
        date: '15th Mar-15th Apr',
        title: 'Hackathon Kick-off',
        description: 'Phase 1 : The official start of the competition where teams submit the idea.',
        color: '#00E08F',
        position: { top: '-25%', left: '42%', transform: 'translateX(-50%)' },
        border: 'bottom',
        lineAngle: 90,
        lineLength: 80
    },
    {
        id: 3,
        number: '03',
        date: '18th Apr - 22nd Apr',
        title: 'Phase 2 Screening Test',
        description: 'Phase 2 : Online screening test for evaluation.',
        color: '#00E08F',
        position: { top: '15%', right: '0%' }, // Pulled in from -14% to prevent edge clipping
        border: 'left-bottom',
        lineAngle: 145,
        lineLength: 100
    },
    {
        id: 4,
        number: '04',
        date: '9th May-10th may',
        title: 'Hackathon Start and Winners Announcement',
        description: 'Final Phase : Official Start of Hackathon and Celebrating the most innovative solutions and announcing the grand prize winners.',
        color: '#00E08F',
        position: { top: '75%', left: '50%', transform: 'translateX(-50%)' }, // Lifted from 100% to 75% to fix cutoff
        border: 'right-top',
        lineAngle: -99,
        lineLength: 90
    }
];
