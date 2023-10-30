import { LatLang } from '../../data/models/LocalizationModel';
import Geolocation from '@react-native-community/geolocation';
import { GET_USER_POSITION, GET_CURRENT_WEATHER, GET_OTHER_LOCALIZATIONS, FILTER_OTHER_LOCALIZATIONS, GET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../types';
import WeatherRepository from '../../repositories/weatherRepository';
import { WeatherModel } from '../../data/models/weatherModel';

const initialstate = {
    loading: false,
    position: null,
    currentWeather: null,
    otherLocalizations: [],
    favorites: [],
};

type Action = {
    type: string,
    payload?: any,
    loading?: boolean,
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case GET_USER_POSITION:
            return Object.assign({}, state, {
                loading: action.loading ?? false,
                position: action.payload,
            });
        case GET_CURRENT_WEATHER:
            return Object.assign({}, state, {
                loading: action.loading ?? false,
                currentWeather: action.payload,
            });
        case GET_OTHER_LOCALIZATIONS:
            return Object.assign({}, state, {
                loading: false,
                otherLocalisations: action.payload,
            });
        // TODO: 
        case FILTER_OTHER_LOCALIZATIONS:
            return Object.assign({}, state, {});
        case GET_FAVORITES:
            return Object.assign({}, state, {
                loading: false,
                favorites: action.payload,
            });
        // TODO:
        case ADD_FAVORITE:
            return Object.assign({}, state, {});
        // TODO:
        case REMOVE_FAVORITE:
            return Object.assign({}, state, {});
        default:
            return state;
    }
};

export const getUserPosition = () => {
    return dispatch => {
        dispatch({
            type: GET_USER_POSITION,
            loading: true,
        });

        Geolocation.getCurrentPosition(info => {
            const position = new LatLang();
            position.lat = info.coords.latitude;
            position.lon = info.coords.longitude;

            dispatch({
                type: GET_USER_POSITION,
                payload: position,
                loading: true,
            });
        }, _error => {
            dispatch({
                type: GET_USER_POSITION,
                loading: false,
            });
        });
    }

}

export const getCurrentWeather = (position: LatLang) => {
    return async dispatch => {
        dispatch({
            type: GET_CURRENT_WEATHER,
            loading: true,
        });

        try {
            const result = await WeatherRepository.fetchWeatherByPosition('metric', 'pl', position);

            dispatch({
                type: GET_CURRENT_WEATHER,
                payload: result,
            });
        } catch (e) {
            dispatch({
                type: GET_CURRENT_WEATHER,
                loading: false,
            });
        }
    }

}