declare module '*.pdf';
declare module '*.mp4';
declare module 'react-player';

interface IUser {
    id: string; //PK
    name: string;
    email: string;
    password: string;
    cards: ICard[];
    age?: Date;
    darkMode?: boolean;
}

interface ICard {
    id: string; // PK
    isFavorite: boolean;
    stamps: number;
    barcode: IBarcode;
}

interface IBarcode {
    customerId: string; // FK
    companyInfo: ICompanyInfo;
}

interface ICompany {
    id: string; // Primary Key
    password: string;
    companyInfo: ICompanyInfo;
    statistics: IStatistics;
}

interface ICompanyInfo {
    name: string;
    email: string;
    phone: string;
    mapUrl: string;
    reward: number;
}

interface IStatistics {
    dailyScans: number;
    uniqueUsers: number;
    ageGroups: IAgeGroup;
}

interface IAgeGroup {
    id: string;
    ageMin: number;
    ageMax: number;
    users: number;
}
