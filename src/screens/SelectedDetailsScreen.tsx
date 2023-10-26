import { View, Text } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { ScreenParamList } from '../utils/screenParamList';


type Props = {
    navigation: NativeStackNavigationProp<ScreenParamList, 'SelectedDetailsScreen'>;
    route: RouteProp<ScreenParamList, 'SelectedDetailsScreen'>;
};

const SelectedDetailsScreen: React.FC<Props> = (props) => {

    return (
        <AppScreenContainer>
            <Text style={{ color: 'white' }}>SELECTED</Text>
        </AppScreenContainer>

    );
};

export default SelectedDetailsScreen;