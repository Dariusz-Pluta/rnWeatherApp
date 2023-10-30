

const baseUrl = 'https://api.openweathermap.org';

export default class ApiHelper {
    static async fetchData(path: string) {
        try {
            const response = await fetch(baseUrl + path);

            return await response.json();
        } catch (e) {
            throw e;
        }
    }
}
