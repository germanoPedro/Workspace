import { useTheme } from '@react-navigation/native';
import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Details } from "../Jobs/subScreens/assets/components/components";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AirbnbRating } from 'react-native-elements';

const JobCostCard = (props) => {

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        color : colors.text,

        padding : 2,
        margin: 2,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
        color : colors.text,
    };


    //Job content

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 15,
    }

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    //Text elements styling
    const title = {
        //Layout
        flex: 2,
        flexDirection: "row",
        //Text styling
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    };

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 10,

        //Dimensions
        backgroundColor: colors.card,

        borderRadius: 15,
    };


    // Budget and date
    //
    // Budget and date view
    const DateBudgetView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin : 2,

        width: "100%",
    };

    const BudgetText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,

        color : colors.grant,

        padding : 10,
        margin: 5,

        borderWidth: 1,
        borderColor: colors.grant,
        borderRadius: 10,

    };

    const DateTextView = {
        flex : 1,
        flexDirection : "row",
        justifyContent: "flex-end"
    };

    const DateText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,

        margin: 5,

        color : colors.lightText,
        textAlign: "right",

    };

    const clientName = {
      color : colors.lightText,
      margin: 10,
    };

    const doneText = {

        color: colors.grant,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 13,
        textTransform: "uppercase",
        padding: 2,
        marginRight: 5,
    };

    const doneView = {
        flexDirection: 'row',
    }
///////////////////////////////////////////// Styling components ////////////////////////////////////////////////

    const Client = props.item.User;

    return (
      <View
        style = {contentView}
      >
        {
            props.done ?
            <View style = {doneView}>
                <Text style = {doneText}>Job done</Text>
                <MaterialCommunityIcons name = "check-outline" size = {13} style = {{ color : colors.grant}} color = { colors.grant }/>
            </View>
            :
            null
        }
        {props.done ?
            <AirbnbRating
                count={5}
                defaultRating={props.item.rating}
                size={15}
                showRating = {false}
                isDisabled
            />
         :
         null
        }
          <Details
            title = {props.item.title}
            skills = {props.item.skills}
            details = {props.item.details}
          />
          <View style = {DateBudgetView}>
            <Text style = {BudgetText}>Cost: {props.item.budget}</Text>
          </View>
          <Text style = {clientName}>{Client.name}</Text>
      </View>
    )
    }

export {
    JobCostCard
}
