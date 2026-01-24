import { ReactNode } from 'react';

export interface Feature {
    number: string;
    title: string;
    logo: ReactNode;
    cards: string[];
    button: {
        text: string;
        action: () => void;
    };
}

export const features: Feature[] = [
    {
        number: '01',
        title: 'Green Energy Tech',
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#00E08F] lucide lucide-zap-icon lucide-zap">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
        ),
        cards: [
            'Develop algorithms and hardware integration for optimizing renewable energy sources and grid management.',
        ],
        button: {
            text: 'Learn More',
            action: () => console.log('Green Energy Tech button clicked')
        }
    },
    {
        number: '02',
        title: 'Water Purification',
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#00E08F] lucide lucide-droplet-icon lucide-droplet">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
        ),
        cards: [
            'Create affordable and accessible solutions for water testing, filtration, and distribution networks.',
        ],
        button: {
            text: 'Learn More',
            action: () => console.log('Water Purification button clicked')
        }
    },
    {
        number: '03',
        title: 'Waste Management',
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#00E08F] lucide lucide-recycle-icon lucide-recycle">
                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                <path d="m14 16-3 3 3 3" />
                <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
            </svg>
        ),
        cards: [
            'Design smart systems for recycling, composting, and reducing landfill impact through technology.',
        ],
        button: {
            text: 'Learn More',
            action: () => console.log('Waste Management button clicked')
        }
    }
];
