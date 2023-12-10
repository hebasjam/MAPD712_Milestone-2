import {Button, StyleSheet,TouchableOpacity,Text, View} from 'react-native';

import Welcome from "../../../compenents/register/Welcome"
import Input from "../../../compenents/register/Input"


const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
         
            <Welcome/>
            <Input/>

          
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainStack', { name: 'Jane' })}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('Register', { name: 'Jane' })}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity> 



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        borderRadius: 10,
        width: '80%',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 'auto', // Align to the right
        marginRight: 'auto', // Align to the left
    },
    registerButton: {
      backgroundColor: '#27ae60', // Green background color for the Register button
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

// // const styles = StyleSheet.create({
// //     container: {
// //         height: '100%',
// //         width: '100%',
// //         backgroundColor: '#fff'
// //     },
// //     btnLogin: {
// //         width: '100%',
// //         flexDirection: "column",
// //         justifyContent: "center", alignItems: "center",
// //         marginTop: 20,
// //         padding: 15,
// //         borderColor: "black",
// //         fontSize: 18, borderRadius: 20
// //     }

// });

export default LoginScreen