import { View, Text } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import AppBar from '../components/AppBar';
import { styles } from '../utils/styles';


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