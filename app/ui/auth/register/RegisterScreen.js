import {Platform, KeyboardAvoidingView,Text, TouchableOpacity,StyleSheet, TextInput, View, Button} from 'react-native';

import Logo from '../../../compenents/register/Logo'
import Welcome from "../../../compenents/register/Welcome"
import Input from "../../../compenents/register/Input"
import React from "react";

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
             <Text style={styles.appName}>Register</Text>
           <Text style={styles.welcomeText}>Please fill your details</Text>


            <KeyboardAvoidingView
                style={styles.inputGroup}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
           <View style={styles.container}>
    
    </View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Name"/>
            </View>

            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Email"/>
            </View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
            </View>
            </KeyboardAvoidingView>


            <View style={styles.button}>
               
                 <TouchableOpacity style={[styles.button, styles.registerButton]}
                   onPress={
                    () => navigation.navigate('MainStack', { name: 'Jane' })
                }>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity> 
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    inputGroup: {
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        padding: 20,
      },
      
      input: {
        padding: 15,
        borderColor: '#3498db',
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 20,
      },
    
    containerInput: {
        padding: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        // alignItems: 'center',
        // padding: 10,
    },
    registerButton: {
        backgroundColor: '#27ae60', // Green background color for the Register button
      },
   
    button: {
        width: '100%',
        flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        marginTop: 20,
        padding: 15,
        borderColor: "black",
        fontSize: 18, borderRadius: 20
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
  }
});