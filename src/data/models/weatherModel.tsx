import { Double } from "react-native/Libraries/Types/CodegenTypes";

export class WeatherModel {
    id!: number;
    weather!: Weather[];
    main!: Main;
    wind!: Wind;

    imageUrl() {
        return `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;;
    }
}

class Weather {
    id!: number;
    main?: string;
    description?: string;
    icon!: string;
}

class Main {
    temp!: Double;
    pressure!: number;
    humidity!: number;
}

class Wind {
    speed!: Double;
}