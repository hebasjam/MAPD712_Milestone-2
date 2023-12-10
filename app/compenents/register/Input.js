import React from 'react';
import { Button, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';

export default function Input() {
  return (
    <KeyboardAvoidingView
      style={styles.inputGroup}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  container: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    padding: 15,
    borderColor: '#3498db',
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 20,
  },
  btnContainer: {
    width: '80%',
    marginTop: 20,
  },
});
