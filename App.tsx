import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './screens/MainTab';
import SelectedDetailsScreen from './screens/SelectedDetailsScreen';
import { ScreenParamList } from './utils/screenParamList';


const Stack = createNativeStackNavigator<ScreenParamList>();

const App = () => {
  return (
    < NavigationContainer >
      <Stack.Navigator initialRouteName='MainTab' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='MainTab' component={MainTab} />
        <Stack.Screen name='SelectedDetailsScreen' component={SelectedDetailsScreen} />
      </Stack.Navigator >
    </NavigationContainer >
  );
};

export default App;