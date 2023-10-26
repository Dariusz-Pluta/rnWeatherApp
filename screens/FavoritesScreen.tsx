import { View, Text } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import { styles } from '../utils/styles';
import AppBar from '../components/AppBar';
import { useTranslation } from 'react-i18next';



const FavoritesScreen = () => {
    const { t } = useTranslation();

    return (
        <AppScreenContainer>
            <View style={styles.titleContainer}>
                <AppBar />
                <Text style={styles.titleText}>{t('common:favorites')}</Text>
            </View>
        </AppScreenContainer>

    );
};

export default FavoritesScreen;