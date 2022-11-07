import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sleep = () => {
  return (
    <View style={styles.container}>
      <Text>Sleep Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Sleep;
