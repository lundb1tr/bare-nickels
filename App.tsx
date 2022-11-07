import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <SafeAreaView style={STYLES.backgroundStyle}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const STYLES = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});
