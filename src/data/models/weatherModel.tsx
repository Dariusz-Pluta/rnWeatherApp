import { Double } from "react-native/Libraries/Types/CodegenTypes";

export class WeatherModel {
    id!: number;
    weather!: Weather[];
    main!: Main;
    wind!: Wind;

    imageUrl(): string | null {
        if (this.weather.length > 0) {
            return `https://openweathermap.org/img/wn/${this.weather[0].icon}@2x.png`;
        }
        return null;
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