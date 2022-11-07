import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Feedings from '../Pages/Feedings';
import Settings from '../Pages/Settings';
import Bowels from '../Pages/Bowels';
import Sleep from '../Pages/Sleep';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      detachInactiveScreens={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Feedings'} component={Feedings} />
      <Tab.Screen name={'Bowels'} component={Bowels} />
      <Tab.Screen name={'Sleep'} component={Sleep} />
      <Tab.Screen name={'Settings'} component={Settings} />
    </Tab.Navigator>
  );
};

export default Navigation;
