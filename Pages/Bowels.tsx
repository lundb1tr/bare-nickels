import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bowels: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Bowels Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bowels;
