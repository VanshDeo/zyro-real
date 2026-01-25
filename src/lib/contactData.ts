export interface ContactData {
    phoneNumber: string;
    phoneNumberFormatted: string;
    phoneNumberHref: string;
    email?: string;
    emailHref?: string;
}

export const contactData: ContactData = {
    phoneNumber: '+919876543210',
    phoneNumberFormatted: '+91 98765 43210',
    phoneNumberHref: 'tel:+919876543210'
};
