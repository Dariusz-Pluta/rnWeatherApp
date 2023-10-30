import { LatLang } from '../../data/models/LocalizationModel';
import Geolocation from '@react-native-community/geolocation';
import { GET_USER_POSITION, GET_CURRENT_WEATHER, GET_OTHER_LOCALIZATIONS, FILTER_OTHER_LOCALIZATIONS, GET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../types';
import WeatherRepository from '../../repositories/weatherRepository';

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
    position?: any,
    loading?: boolean,
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case GET_USER_POSITION:
            return Object.assign({}, state, {
                loading: action.loading ?? false,
                position: action.position,
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
                position: position,
                loading: false,
            });
        }, _error => {
            dispatch({
                type: GET_USER_POSITION,
                loading: false,
            });
        });
    }

}