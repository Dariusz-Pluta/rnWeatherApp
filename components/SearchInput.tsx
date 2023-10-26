import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';


const SearchInput = () => {
    const { t } = useTranslation();

    return <View style={styles.searchContainer}>
        <Icon style={styles.searchIcon} name="search" size={20} color='white' />
        <TextInput
            style={styles.searchInput}
            placeholder={t('common:searchCity')}
            placeholderTextColor='white'
        />
    </View>
}

export default SearchInput;

export const styles = StyleSheet.create({
    searchContainer: {
        flex: 0,
        borderRadius: 5,
        marginHorizontal: 2,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    searchIcon: {
        padding: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    }
});