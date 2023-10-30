import { View, Text, Button } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import AppBar from '../components/AppBar';
import { styles } from '../utils/styles';
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUserPosition, getCurrentWeather } from '../store/reducers';
import { LatLang } from '../data/models/LocalizationModel';

// TODO: success => zmien coordynaty na miejscowosc + pobierz dane na temat pogody 
// TODO: failure => stan błędu (nie udało się pobrać lokalizacji) + przycisk odświez
// TODO: failure pobierania pogody => stan błędu (nie udało się pobrać lokalizacji) + przycisk odświez

interface HomeScreenProps {
    getUserPosition: any,
    loading: boolean,
    position: LatLang | null,
    currentWeather: WeatherModel | null,
}

interface HomeScreenState { }

class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getUserPosition();
    }

    render(): React.ReactNode {
        return (
            <AppScreenContainer>
                <View style={styles.titleContainer}>
                    <AppBar />
                    {this.props.loading ? <Text style={styles.titleText}>loading...</Text> : null}
                </View>
            </AppScreenContainer>

        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    position: state.position,
    currentWeather: state.currentWeather,
})


const mapDispatchToProps = dispatch => bindActionCreators({
    getUserPosition,
    getCurrentWeather,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
