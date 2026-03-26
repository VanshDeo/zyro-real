export interface Prize {
    place: string;
    prize: string;
    icon: string;
    color: string;
    borderColor: string;
    perks: string[];
    popular: boolean;
    scale: number;
    order: number;
}

export const prizes: Prize[] = [
    {
        place: '1st',
        prize: '₹50,000',
        icon: '🏆',
        color: 'from-[#00E08F] to-[#00A86B]',
        borderColor: '#00E08F',
        perks: [
            'Grand Cash Prize',
            'Winner Trophy',
            'Project Incubation Support',
            'Exciting Goodies',
            'Featured Article',
            'Exclusive Networking Event'
        ],
        popular: true,
        scale: 1.05,
        order: 2
    },
    {
        place: '2nd',
        prize: '₹35,000',
        icon: '🏆',
        color: 'from-[#00E08F] to-[#00A86B]',
        borderColor: '#00E08F',
        perks: [
            'Grand Cash Prize',
            'Certificate of Achievement',
            'Mentorship Session',
            'Swag Kit',
            'LinkedIn Feature'
        ],
        popular: false,
        scale: 0.95,
        order: 1
    },
    {
        place: '3rd',
        prize: '₹15,000',
        icon: '🏆',
        color: 'from-[#00E08F] to-[#00A86B]',
        borderColor: '#00E08F',
        perks: [
            'Grand Cash Prize',
            'Certificate of Excellence',
            'Swag Kit',
            'Community Recognition'
        ],
        popular: false,
        scale: 0.90,
        order: 3
    },
    
];
