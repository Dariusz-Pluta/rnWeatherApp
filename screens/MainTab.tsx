import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import OtherLocationsScreen from './OtherLocationsScreen';
import FavoritesScreen from './FavoritesScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ScreenParamList } from '../utils/screenParamList';

export type Props = {
    navigation: NativeStackNavigationProp<ScreenParamList, 'MainTab'>;
    route: RouteProp<ScreenParamList, 'MainTab'>;
};

const Tab = createMaterialBottomTabNavigator<ScreenParamList>();

const MainTab: React.FC<Props> = (props) => {
    const tabTheme = useTheme();
    tabTheme.colors.secondaryContainer = "transperent"

    return (
        <Tab.Navigator barStyle={styles.tab} theme={tabTheme} initialRouteName='Home' backBehavior='history' labeled={false} activeColor='#FFC107' inactiveColor='white'>
            <Tab.Screen name="Other" component={OtherLocationsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="maps-home-work" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="location-on" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="favorite" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default MainTab;

const styles = StyleSheet.create({
    tab: {
        backgroundColor: 'black',
    }
});