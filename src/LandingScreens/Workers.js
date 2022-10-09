import React from 'react'
import { View, ImageBackground, Text, Button, TouchableOpacity } from 'react-native'
import styles from './ScreenDesigning/layoutLanding';


//Background image location
let backgroundImage = require("./ScreenDesigning/Assets/BackgroundImages/WorkerLanding.jpg");


export default function Workers({ navigation }){
    return(
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
                      Worker
                    </Text>
                </View>
                <TouchableOpacity
                    style = { styles.whiteButton }
                    onPress = {() => navigation.navigate("Worker Register")}
                >
                    <Text
                        style = {styles.whiteButtonText}
                    >
                      Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = { styles.blackButton }
                    onPress = {() => navigation.navigate("Worker Login")}
                >
                    <Text
                        style = {styles.blackButtonText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}
