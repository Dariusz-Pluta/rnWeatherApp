import { View, Text, Button } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import AppBar from '../components/AppBar';
import { styles } from '../utils/styles';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { LatLang } from '../data/models/LocalizationModel';
import WeatherRepository from '../repositories/weatherRepository';

let position: LatLang | null = null;

const getUserPosition = () => {
    Geolocation.getCurrentPosition(info => {
        position = new LatLang();
        position.lat = info.coords.latitude;
        position.lon = info.coords.longitude;
    });

    console.log(position);
}

const getWeatherByPosition = () => {
    if (position != null) {
        WeatherRepository.fetchWeatherByPosition('metric', 'pl', position);
    }
}

const getWeatherByCity = () => {
    if (position != null) {
        WeatherRepository.fetchWeatherByCity('Warszawa', 'metric', 'pl');
    }
}

// TODO: success => zmien coordynaty na miejscowosc + pobierz dane na temat pogody 
// TODO: failure => stan błędu (nie udało się pobrać lokalizacji) + przycisk odświez
// TODO: failure pobierania pogody => stan błędu (nie udało się pobrać lokalizacji) + przycisk odświez

const HomeScreen = () => {
    return (
        <AppScreenContainer>
            <View style={styles.titleContainer}>
                <AppBar />
                <Text style={styles.titleText}>{position?.toString() ?? ''}</Text>
                <Button title='getPosition' onPress={getUserPosition}></Button>
                <Button title='fetch weather' onPress={getWeatherByPosition}></Button>
                <Button title='fetch weather' onPress={getWeatherByCity}></Button>
            </View>
        </AppScreenContainer>

    );
};

export default HomeScreen;