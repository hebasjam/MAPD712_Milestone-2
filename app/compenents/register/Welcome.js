import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.appName}>Our App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 200, // Adjust the marginTop value to add more space at the top
  },
  welcomeText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginTop: 10, // Adjust the marginTop value for spacing between texts
  },
});
