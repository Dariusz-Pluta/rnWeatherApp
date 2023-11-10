import React, { PureComponent } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { WeatherModel } from '../data/models/weatherModel';
import { capitalizeFirstLetter, getImageUrl } from '../utils/utils';
import Humidity from '../../assets/humidity.svg';
import Pressure from '../../assets/pressure.svg';
import Wind from '../../assets/wind.svg';

interface WeatherInfoProps {
    currentWeather: WeatherModel,
}

interface WeatherInfoState { }

export class WeatherInfo extends PureComponent<WeatherInfoProps, WeatherInfoState> {

    render(): React.ReactNode {
        const { main, weather, wind } = this.props.currentWeather;

        return <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: getImageUrl(weather[0].icon) }}
            />
            <Text style={styles.description}> {capitalizeFirstLetter(weather[0].description ?? '')}  </Text>
            <View style={styles.container}>
                <Text style={styles.temperature}> {main.temp + ' °C'}  </Text>
            </View>
            <View style={[styles.container]}>
                <View style={styles.row}>
                    <View style={styles.iconsContainer}>
                        <Pressure height={20} width={20} fill={'white'} />
                        <View style={{ height: 8 }}></View>
                        <Wind height={20} width={20} fill={'white'} />
                        <View style={{ height: 8 }}></View>
                        <Humidity height={20} width={20} fill={'white'} />
                    </View>
                    <View style={{ width: 8 }}></View>
                    <View style={styles.valuesContainer}>
                        <Text style={styles.info}> {main.pressure + ' hPa'}  </Text>
                        <View style={{ height: 8 }}></View>
                        <Text style={styles.info}> {wind.speed + ' m/s'}  </Text>
                        <View style={{ height: 8 }}></View>
                        <Text style={styles.info}> {main.humidity + ' %'}  </Text>
                    </View>
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    description: {
        color: '#FFC107',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    temperature: {
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconsContainer: {
        alignItems: 'flex-start',
    },
    valuesContainer: {
        alignItems: 'flex-end',
    },
});