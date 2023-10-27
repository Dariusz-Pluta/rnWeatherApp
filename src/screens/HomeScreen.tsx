import { View, Text } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import AppBar from '../components/AppBar';
import { styles } from '../utils/styles';
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));
// TODO: success => zmien coordynaty na miejscowosc + pobierz dane na temat pogody 
// TODO: failure => stan błędu (nie udało się pobrać lokalizacji) + przycisk odświez
// TODO: failure pobierania pogody => stan błędu (nie udało się pobrać lokalizacji) + przycisk odświez

const HomeScreen = () => {
    return (
        <AppScreenContainer>
            <View style={styles.titleContainer}>
                <AppBar />
            </View>
        </AppScreenContainer>

    );
};

export default HomeScreen;