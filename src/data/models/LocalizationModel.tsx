export class LocalizationModel {
    id!: number;
    name?: string;
    locality?: string;
    country?: string;

    static city(localization: LocalizationModel): string {
        return localization.locality ?? localization.name ?? 'unkown';
    }
}
