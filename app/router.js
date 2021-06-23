import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchFilterScreen from './screens/SearchFilterScreen';
import SettingsButton from './components/SettingsButton';
import {addons} from 'react-native';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SearchFilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
