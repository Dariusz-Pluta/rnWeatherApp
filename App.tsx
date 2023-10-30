import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './src/screens/MainTab';
import SelectedDetailsScreen from './src/screens/SelectedDetailsScreen';
import { ScreenParamList } from './src/utils/screenParamList';
import { Provider } from 'react-redux';
import store from './src/store';
import React from 'react';


const Stack = createNativeStackNavigator<ScreenParamList>();

const App = () => {
  return (
    <Provider store={store}>
      < NavigationContainer >
        <Stack.Navigator initialRouteName='MainTab' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='MainTab' component={MainTab} />
          <Stack.Screen name='SelectedDetailsScreen' component={SelectedDetailsScreen} />
        </Stack.Navigator >
      </NavigationContainer >
    </Provider>
  );
};

export default App;