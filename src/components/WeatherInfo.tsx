import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { WeatherModel } from '../data/models/weatherModel';
import { capitalize, getImageUrl } from '../utils/utils';


interface WeatherInfoProps {
    currentWeather: WeatherModel,
}

interface WeatherInfoState { }

export class WeatherInfo extends React.Component<WeatherInfoProps, WeatherInfoState> {

    render(): React.ReactNode {
        return <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: getImageUrl(this.props.currentWeather.weather[0].icon) }}
            />
            <Text style={styles.description}> {capitalize(this.props.currentWeather.weather[0].description ?? '')}  </Text>
            <View style={styles.container}>
                <Text style={styles.description}> {this.props.currentWeather.main.temp}  </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.info}> {this.props.currentWeather.main.pressure + ' hPa'}  </Text>
                <Text style={styles.info}> {this.props.currentWeather.wind.speed}  </Text>
                <Text style={styles.info}> {this.props.currentWeather.main.humidity + ' %'}  </Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    description: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    info: {
        color: '#FFC107',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    container: {
        margin: 10,
        padding: 16,
        alignContent: 'center',
        justifyContent: 'center',
    },
});