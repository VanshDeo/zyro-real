import { ReactNode } from 'react';

export interface Feature {
    number: string;
    title: string;
    logo: ReactNode;
    cards: string[];
    button?: {
        text: string;
        action: () => void;
    };
}

export const features: Feature[] = [
    {
        number: '01',
        title: 'Green Energy Automation',
        logo: (
            <img 
                src="/images/tracks/green-energy.png" 
                alt="Green Energy Automation" 
            />
        ),
        cards: [
            'Design bleeding-edge automation and robotics systems dedicated to revolutionizing renewable energy. Build smart power management grids, drastically improve energy efficiency, and engineer autonomous solutions that scale green energy production for a zero-carbon future.',
        ],
        
    },
    {
        number: '02',
        title: 'Robotics for Public Infrastructure',
        logo: (
            <img 
                src="/images/tracks/infrastruture.png" 
                alt="Robotics for Public Infrastructure" 
            />
        ),
        cards: [
            'Develop autonomous robotic systems and smart IoT arrays that modernize public infrastructure. Build hardware solutions capable of maintaining roads, monitoring structural integrity in real-time, optimizing urban transit, and forming the backbone of fully connected smart cities.',
        ],
        
    },
    {
        number: '03',
        title: 'Climate Tech',
        logo: (
            <img 
                src="/images/tracks/climate.png" 
                alt="Climate Tech" 
            />
        ),
        cards: [
            'Engineer innovative hardware technologies to combat the global climate crisis head-on. Create precision systems for widespread pollution tracking, autonomous waste sorting, ecosystem protection, and radical atmospheric restoration architectures.',
        ],
        
    },
    {
        number: '04',
        title: 'Sustainable Development',
        logo: (
            <img 
                src="/images/tracks/sustain-develop.png" 
                alt="Sustainable Development" 
            />
        ),
        cards: [
            'Architect advanced robotic and automated solutions that enforce environmentally responsible practices across industries. Focus on creating closed-loop recycling mechanisms, reducing industrial footprints, and establishing sustainable production pipelines.',
        ],
        
    },
    {
        number: '05',
        title: 'Smart Agriculture',
        logo: (
            <img 
                src="/images/tracks/agiculture.png" 
                alt="Smart Agriculture" 
            />
        ),
        cards: [
            'Transform the agricultural sector with advanced agritech and precision farming hardware. Implement autonomous drone monitoring, robotic harvesting networks, AI-driven soil analysis, and smart irrigation matrices to maximize yield while minimizing resource waste.',
        ],
        
    },
    {
        number: '06',
        title: 'Smart Healthcare',
        logo: (
            <img 
                src="/images/tracks/health.png" 
                alt="Smart Healthcare" 
            />
        ),
        cards: [
            'Build the next generation of life-saving medical hardware. Design highly responsive robotics for surgical assistance, intelligent wearables for real-time remote patient monitoring, and automated diagnostic tools that make elite healthcare scalable and accessible.',
        ],
        
    },
    
     {
        number: '07',
        title: 'Open Innovation',
        logo: (
            <img 
                src="/images/tracks/open-inoo.png" 
                alt="Open Innovation" 
            />
        ),
        cards: [
            'Break boundaries with completely unconstrained, creative robotics solutions. Address any complex real-world problem outside the predefined themes by engineering novel hardware, experimental automation, and visionary technological breakthroughs.',
        ],
        
    },
   
];
