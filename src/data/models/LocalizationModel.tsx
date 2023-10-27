export class LocalizationModel {
    id!: number;
    coord!: LatLang;
    name?: string;
    locality?: string;
    country?: string;

    static city(localization: LocalizationModel): string {
        return localization.locality ?? localization.name ?? 'unkown';
    }
}

class LatLang {
    lat!: number;
    lon!: number;
}