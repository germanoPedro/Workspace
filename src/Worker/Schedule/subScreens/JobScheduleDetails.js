import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar, AirbnbRating } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Details, BudgetView, DisplayDate, ClientButton, MessageButton} from "../../Jobs/subScreens/assets/components/components";


function ClientJobDetails({navigation,route}){
    //This is the trust button
    const DoneButton = (props) => {
    // import styling component
        const {colors} = useTheme();

        const DoneButton = {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
            marginHorizontal: 10,
            padding: 10,

            borderRadius: 10,

            backgroundColor: colors.grant,
        };

        const doneView = {

            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
            marginHorizontal: 10,
            padding: 10,
        }

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

        const DoneButtonText = {
            color: "#FFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 12,
            lineHeight: 13,
            textTransform: "uppercase",
            padding: 2,
            marginRight: 5,
        };
        return(
                props.done ?
                    <View style = {doneView}>
                        <Text style = {doneText}>Job Done</Text>
                    </View>
                :
                    <TouchableOpacity style = {DoneButton} onPress ={props.onPress}>
                        <Text style = {DoneButtonText}>Mark Done</Text>
                    </TouchableOpacity>

        );
    }

    //This is the message button
    const MessageButton = (props) =>{
    // import styling component
        const {colors} = useTheme();

        const MessageButton = {
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
            marginHorizontal: 10,
            padding: 9,

            borderRadius: 10,
            borderWidth: 2,
            borderColor: colors.border,

        };

        const MessageButtonText = {
            color : colors.text,
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",

            fontSize: 12,
            lineHeight: 15,
            textTransform: "uppercase",
            padding: 2,
        };
        return(
            <TouchableOpacity style = {MessageButton} onPress={props.onPress}>
                <Text style = {MessageButtonText}>Message</Text>
                <MaterialCommunityIcons name = "send" size = {15} style = {{ color : colors.text}} color = { colors.text }/>
            </TouchableOpacity>
        );
    };
    const { colors } = useTheme();
    const client = route.params.client;
    const ButtonView = {
        flex : 1,
        flexDirection: "row",
        margin : 5,
    }
    console.log(client)
    return(
        <ScrollView style = {{flex:1}}>
          <Details
            title = {route.params.item.title}
            skills = {route.params.item.skills}
            details = {route.params.item.details}
          />
        <View style = {ButtonView}>
          <MessageButton/>
          <DoneButton
            done = {route.params.item.done}
            />
        </View>
          {route.params.item.done ?
            <AirbnbRating
                count={5}
                defaultRating={route.params.item.rating}
                size={20}
                showRating = {false}
                isDisabled
            />
           :
           null
          }
        <BudgetView budget = {route.params.item.budget}/>
        <DisplayDate
            dateSet = { route.params.item.dateSet }
            done = {route.params.item.done}
        />
        <ClientButton
            image = {client.avatar}
            name = {client.name}
            onPress = {() => navigation.navigate('WorkerViewClientProfile', {client})}
        />
        </ScrollView>
    )

}

export default React.memo(ClientJobDetails, );
