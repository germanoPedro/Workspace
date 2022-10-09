import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar, AirbnbRating } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Details, BudgetView, DisplayDate, ClientButton, MessageButton, QuoteButton } from "./assets/components/components";


function ClientJobDetails({navigation,route}){
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
          <QuoteButton/>
          <MessageButton/>
        </View>
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
