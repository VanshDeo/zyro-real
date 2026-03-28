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
        bottom?: string;
        transform?: string;
    };
    border: string;
    lineAngle: number;
    lineLength: number;

    // ✅ ADD THIS
    button?: {
        text: string;
        action: () => void;
    };
}

export const businessComponents: BusinessComponent[] = [
    {
        id: 1,
        number: '01',
        date: '15th March - 15th April',
        title: 'Registration Phase',
        description: 'Kickstart your journey by registering for the hackathon through the official portal. Form your team, explore problem statements, and secure your spot in this innovation-driven competition.',
        color: '#00E08F',
        position: { top: '5%', left: '40%', transform: 'translateX(-50%)' },
        border: 'bottom',
        lineAngle: 90,
        lineLength: 90,
        button: {
            text: 'Register Now',
            action: () => window.location.href = '/register'
        }
    },
    {
        id: 2,
        number: '02',
        date: '18th April (24 Hours)',
        title: 'Phase 1 - MCQ Challenge',
        description: 'All team members must participate in this 24-hour online MCQ contest hosted on GeeksforGeeks. This round evaluates your technical fundamentals and problem-solving skills.',
        color: '#00E08F',
        position: { top: '0%', right: '5%' },
        border: 'left-bottom',
        lineAngle: 140,
        lineLength: 100,
        button: {
            text: 'Go to Contest',
            action: () => window.location.href = '/contest'
        }
    },
    {
        id: 3,
        number: '03',
        date: '15th March - 20th April',
        title: 'Idea Submission',
        description: 'Teams must select a problem track and submit their innovative solution idea in the form of a presentation. Upload your PPT on Google Drive and share the link for evaluation.',
        color: '#00E08F',
        position: { top: '65%', right: '5%' },
        border: 'left-top',
        lineAngle: -140,
        lineLength: 100,
        button: {
            text: 'Submit Idea',
            action: () => window.location.href = '/drive'
        }
    },
    {
        id: 4,
        number: '04',
        date: '20th April - 5th May',
        title: 'Screening & Evaluation',
        description: 'Submissions are carefully evaluated based on MCQ performance, idea quality, and overall team profile. Shortlisted teams will advance to the next phase.',
        color: '#00E08F',
        position: { bottom: '5%', left: '40%', transform: 'translateX(-50%)' },
        border: 'top',
        lineAngle: -90,
        lineLength: 90
    },
    {
        id: 5,
        number: '05',
        date: '9th - 10th May',
        title: 'Offline Build Day',
        description: 'Shortlisted teams will participate in an offline build session where they will develop their prototype in real-time at the designated venue. Collaboration and execution are key.',
        color: '#00E08F',
        position: { top: '65%', left: '5%' },
        border: 'right-top',
        lineAngle: -40,
        lineLength: 100
    },
    {
        id: 6,
        number: '06',
        date: '10th May',
        title: 'Final Results & Awards',
        description: 'The hackathon concludes with the announcement of winners, followed by a grand prize distribution ceremony recognizing the most innovative and impactful solutions.',
        color: '#00E08F',
        position: { top: '0%', left: '5%' },
        border: 'right-bottom',
        lineAngle: 40,
        lineLength: 100
    }
];

