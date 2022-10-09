import { StyleSheet } from 'react-native'

export default StyleSheet.create({
// Button Styling
    // this is the style script for the button containers
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },


    //Because there buttons are different colors and they both need different color texts within them
    //This is the style script for the text within the buttons

    blackButtonText : {
        color: 'white'
    },

    signInButton: {
        alignItems:"center",

        backgroundColor: "black",
        padding: 15,
        margin: 6,
        width: "70%",

        borderRadius: 6,
    },
//Title Styling
    textInput: {
        width : 343,
    },
//Background image

})
