import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Feedings from '../Pages/Feedings';
import Settings from '../Pages/Settings';
import Bowels from '../Pages/Bowels';
import Sleep from '../Pages/Sleep';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen component={Home} name={'Home'} />
      <Stack.Screen component={Feedings} name={'Feedings'} />
      <Stack.Screen component={Settings} name={'Settings'} />
      <Stack.Screen component={Bowels} name={'Bowels'} />
      <Stack.Screen component={Sleep} name={'Sleep'} />
    </Stack.Navigator>
  );
};

export default Navigation;
