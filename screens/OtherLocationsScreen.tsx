import { View, Text, FlatList, Pressable } from 'react-native';
import { styles } from '../utils/styles';
import AppScreenContainer from '../components/AppScreenContainer';
import AppBar from '../components/AppBar';
import SearchInput from '../components/SearchInput';
import { LocalizationModel } from '../models/LocalizationModel';
import { ListTile } from '../components/ListTile';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenParamList } from '../utils/screenParamList';

type Props = {
    navigation: MaterialBottomTabNavigationProp<ScreenParamList, 'Other'>;
    route: RouteProp<ScreenParamList, 'Other'>;
};

const list: LocalizationModel[] = require('../data/localizationList');

const OtherLocationsScreen: React.FC<Props> = (props) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return <AppScreenContainer>
        <View style={styles.titleContainer}>
            <AppBar />
            <Text style={styles.titleText}>Cities</Text>
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