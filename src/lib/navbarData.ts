export interface NavLink {
    name: string;
    href: string;
    id: string;
}

export interface LogoData {
    src: string;
    alt: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Prizes', href: '#prizes', id: 'prizes' },
    { name: 'Tracks', href: '#tracks', id: 'tracks' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Partners', href: '#partners', id: 'partners' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
];

export const logoData: LogoData = {
    src: 'https://res.cloudinary.com/dkxskaege/image/upload/v1769346773/Zyro_kvywql.png',
    alt: 'Zyro Logo',
    href: '/'
};
