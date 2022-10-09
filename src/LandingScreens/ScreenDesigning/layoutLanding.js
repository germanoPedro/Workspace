import { StyleSheet } from "react-native"

export default StyleSheet.create({
// Button Styling
    // this is the style script for the button containers
    ButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },


    //Because there buttons are different colors and they both need different color texts within them
    //This is the style script for the text within the buttons

    //The script for the white button
    whiteButton: {
        alignItems:"center",

        backgroundColor: "white",
        padding: 15,
        margin: 6,
        width: "40%",

        borderRadius: 6,
    },
    whiteButtonText: {
        color: 'black',

    },

    //the script for the black button
    blackButton: {
        alignItems:"center",

        backgroundColor: "black",
        padding: 15,
        margin: 6,
        width: "40%",

        borderRadius: 6,
    },
    //the script for the black button
    blackButtonText: {
        color: 'white'
    },

//Title Styling
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 48,
        lineHeight: 54,
    },
    titleSecond: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 54,
    },
    TitleContainer: {
        position : 'absolute',
        alignItems: 'center',
        top: 44,
    },

//Background image
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
})

