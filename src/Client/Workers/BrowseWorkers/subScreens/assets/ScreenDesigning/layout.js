
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    view: {
        flex: 1,
      //  backgroundColor: '#fff'
    },

    //profile details
    profileDetails: {
        flex: 2,
        alignItems: 'center',
        margin: 10,
    },

    //Profile name
    profileName: {
        fontSize: 30
    },
    //Profile location
    profileLocation: {
        fontFamily: "Roboto",
        textTransform: 'uppercase',
        letterSpacing: 0.04,
        lineHeight: 15,
        margin: 5,
        marginBottom: 10,
        fontSize: 15
    },
    //Rating styling
    profileRating: {
        margin: 10,
    },


    //Worker status and numbers
    profileInfo: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    //Trusters Numbers
    trustersNumbers : {
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
    },
    //Trusters Text
    trustersText : {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
    },
    //Reporters numbers
    reportersNumbers: {
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        color: '#8F0000'
    },
    //Reporters Text
    reportersText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        color: '#8F0000'
    },


    //Available text View
    availableView:{
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        //backgroundColor: 'gray'
    },
    //Available Text
    availableText: {
        color: 'white',
        padding: 5,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    //Not available text
    notAvailableText: {
        color: 'white',
        padding: 5,
        backgroundColor: '#8F0000',
        borderRadius: 10,
    },

    //Member Since text view and categories
    //

})
