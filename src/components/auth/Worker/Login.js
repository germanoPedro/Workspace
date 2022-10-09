import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'

/*import firebase from 'firebase/compat/app'
require('firebase/compat/auth'); //This is to import auth from firebase
import { initializeApp } from "firebase/app"*/

//const firebaseApp = initializeApp({ firebaseConfigData });

import styles from './assets/ScreenDesigning/Layout'

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(){
	    const { email, password } = this.state;
    /*    getAuth(firebaseApp).signInWithEmailAndPassword(email, password)
                .then((result) => {
                    console.log(result)
                })
                .catch((error) => {
                    console.log(error)
                });*/
    }

    render() {
        return (
            <View style = { styles.inputContainer }>
                    <TextInput
                        style = { styles.textInput }
                        placeholder = "Email"
                        placeholderTextColor="grey"
                        onChangeText = {(email) => this.setState({ email })}
                    />
                    <TextInput
                        style = { styles.textInput }
                        placeholder = "Password"
                        placeholderTextColor="grey"
                        password viewPass
                        onChangeText = {(password) => this.setState({ password })}
                    />
                    <TouchableOpacity
                      style = { styles.signInButton}
                        color = "black"
                        onPress ={() => this.onSignIn()}
                        title = "Sign in"
                    ><Text
                        style = { styles.blackButtonText }
                    >
                       Sign In
                     </Text>
                    </TouchableOpacity>
            </View>
        )
    }
}


export default Login
