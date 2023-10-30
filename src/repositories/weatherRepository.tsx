import { LatLang } from "../data/models/LocalizationModel";
import { WeatherModel } from "../data/models/weatherModel";
import ApiHelper from "./api/apiHelper";


class WeatherRepository {
    static async fetchWeatherByCity(city: string, unit: string, lang: string) {
        try {
            const result: WeatherModel = await ApiHelper.fetchData(`/data/2.5/weather?q=${city}&units=${unit}&lang=${lang}&appid=968396b2fb8f3a96cd7171b09d33ae62`);

            return result;
        } catch (e) {
            console.log(e);
        }
    }

    static async fetchWeatherByPosition(unit: string, lang: string, position: LatLang) {
        try {
            const result: WeatherModel = await ApiHelper.fetchData(`/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&units=${unit}&lang=${lang}&appid=968396b2fb8f3a96cd7171b09d33ae62`);

            return result;
        } catch (e) {
            throw (e);
        }
    }
}

export default WeatherRepository;