import React from 'react'
import { View, ImageBackground, Text, Button, TouchableOpacity } from 'react-native'
import styles from './ScreenDesigning/layoutLanding';

//Background image location
let backgroundImage = require("./ScreenDesigning/Assets/BackgroundImages/ClientLanding.jpg");

export default function Clients({ navigation }){
    return (
        <ImageBackground
            source = { backgroundImage }
            style = {styles.image}>
            <View style = {styles.ButtonContainer}>
                <View style = { styles.TitleContainer }>
                    <Text
                    style = { styles.title }
                    h1>
                        Workspace
                    </Text><Text
                    style = { styles.title }
                    h3>
                       Client
                    </Text>
                </View>
                <TouchableOpacity
                    color="#FFFFFF"
                    onPress = {() => navigation.navigate("Client Register")}
                    style = { styles.whiteButton }

                >
                    <Text
                        style = {styles.whiteButtonText}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    color="#000000"
                    style = { styles.blackButton}
                    onPress = {() => navigation.navigate("Client Login")}
                >
                    <Text
                        style = {styles.blackButtonText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
}
