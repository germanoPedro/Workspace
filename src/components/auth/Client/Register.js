import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'

//import firebase from 'firebase/compat/app'
//require('firebase/compat/auth'); //This is to import auth from firebase

import styles from './assets/ScreenDesigning/Layout'
//import { initializeApp } from "firebase/app"

//const firebaseApp = initializeApp({ firebaseConfigData });
export class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '', 
            name: '',
            worker: false,
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
	    const { email, password, username, name } = this.state;
/*        getAuth(firebaseApp).createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    firebase.firestore().collection("Users")
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                username,
                                email, 
                                name,
                                worker: false,

                            })
                    console.log(result)
                })
                .catch((error) => {
                    console.log(error)
                })*/
    }

    render() {
        return (
            <View style = { styles.inputContainer }>
                <TextInput
                    style = { styles.textInput}
                    placeholderTextColor = "grey"
                    placeholder = "Name"
                    onChangeText = {(name) => this.setState({ name })}
                />
                <TextInput
                    style = { styles.textInput}
                    placeholderTextColor = "grey"
                    placeholder = "Username"
                    onChangeText = {(username) => this.setState({ username })}
                />
                <TextInput
                    style = { styles.textInput}
                    placeholderTextColor = "grey"
                    placeholder = "email"
                    onChangeText = {(email) => this.setState({ email })}
                />  
                <TextInput
                    style = { styles.textInput}
                    placeholderTextColor = "grey"
                    placeholder = "password"
                    secureTextEntry = {true}
                    onChangeText = {(password) => this.setState({ password })}
                />  
                <TouchableOpacity
                    style = { styles.signInButton}
                    color = "black"
                    onPress ={() => this.onSignUp()}
                    title = "Sign Up"
                ><Text
                        style = { styles.blackButtonText }
                 >
                   Sign Up
                 </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register

