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
        date: 'Phase 1',
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
        date: 'Core',
        title: 'Hackathon Kick-off',
        description: 'The official start of the competition where teams begin their development journey.',
        color: '#00E08F',
        position: { top: '-25%', left: '42%', transform: 'translateX(-50%)' },
        border: 'bottom',
        lineAngle: 90,
        lineLength: 80
    },
    {
        id: 3,
        number: '03',
        date: 'Phase 2',
        title: 'Submission Deadline',
        description: 'Finalize and submit your innovative projects for evaluation.',
        color: '#00E08F',
        position: { top: '15%', right: '0%' }, // Pulled in from -14% to prevent edge clipping
        border: 'left-bottom',
        lineAngle: 145,
        lineLength: 100
    },
    {
        id: 4,
        number: '04',
        date: 'Ecosystem',
        title: 'Winners Announcement',
        description: 'Celebrating the most innovative solutions and announcing the grand prize winners.',
        color: '#00E08F',
        position: { top: '75%', left: '50%', transform: 'translateX(-50%)' }, // Lifted from 100% to 75% to fix cutoff
        border: 'right-top',
        lineAngle: -99,
        lineLength: 90
    }
];
