import { View, Text, FlatList } from 'react-native';
import { styles } from '../utils/styles';
import AppScreenContainer from '../components/AppScreenContainer';
import AppBar from '../components/AppBar';
import SearchInput from '../components/SearchInput';
import { LocalizationModel } from '../data/models/LocalizationModel';
import { ListTile } from '../components/ListTile';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenParamList } from '../utils/screenParamList';
import { useTranslation } from 'react-i18next';

type Props = {
    navigation: MaterialBottomTabNavigationProp<ScreenParamList, 'Other'>;
    route: RouteProp<ScreenParamList, 'Other'>;
};

const list: LocalizationModel[] = require('../data/localizationList').default;

const OtherLocationsScreen: React.FC<Props> = (props) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const { t } = useTranslation();

    return <AppScreenContainer>
        <View style={styles.titleContainer}>
            <AppBar />
            <Text style={styles.titleText}>{t('common:cities')}</Text>
        </View>
        <SearchInput />
        <FlatList<LocalizationModel>
            data={list}
            renderItem={({ item }) => {
                return ListTile({
                    item: item, onPress: () => {
                        navigation.navigate('SelectedDetailsScreen');
                    }
                });
            }}
        />
    </AppScreenContainer>
};

export default OtherLocationsScreen;