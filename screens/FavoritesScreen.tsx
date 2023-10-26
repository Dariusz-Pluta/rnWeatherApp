import { View, Text } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import { styles } from '../utils/styles';
import AppBar from '../components/AppBar';



const FavoritesScreen = () => {
    return (
        <AppScreenContainer>
            <View style={styles.titleContainer}>
                <AppBar />
                <Text style={styles.titleText}>Favorites</Text>
            </View>
        </AppScreenContainer>

    );
};

export default FavoritesScreen;