import React, { useCallback } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Notification from "./NotificationComponents/NotificationComponents";
///////////////////////////////////////////////////////Data//////////////////////////////////////////////////////////////
// Notification Types
// Basic
// JobCompleted
// Reported
// AcceptedOffer
// Promotion
// Canceled
// Information
//
//
//
 const NotificationItems = [
     {
         Key: 0,
         Type: "Basic",
         User:     {
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            rating: 2,
                            description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                            avatar: "https://imagesReferenceError: Can't find variable: useCallback.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                            skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
         Message: "replied to your job request",
         Data: {},
         Job: {},
     },
     {
         Key: 1,
         Type: "JobCompleted",
         Message: "Completed a Job for you",
        Data: {
            title: "Photography",
            skills: ["Arts"],
            details: "I need a photographer for my sisters wedding.",
        },
         Job: {
                title: "Photography",
                skills: ["Arts"],
                done: true,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
                User:     {
                                    name: 'Chris Jackson',
                                    time: "2021/02/05",
                                    location: "North Pretoria",
                                    rating: 2,
                                    description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                                    avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                                    available: true,
                                    travelDistance: "5km",
                                    trusters: 341,
                                    reporters: 1,
                                    totalJobs: 56,
                                skills: [ {key: "Computer"},
                                            {key: "Technology"} ]
                                },
            },
     },
     {
         Key: 2,
         Type: "Reported",
         User:     {
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            rating: 2,
                            description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                          skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
         Message: "was successfully reported",
         Data: {},
     },
     {
         Key: 3,
         Type: "AcceptedOffer",
         User:     {
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            rating: 2,
                            description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                          skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
         Message: "Accepted offer for job request from",
        Data: {
            title: "Photography",
            skills: ["Arts"],
            details: "I need a photographer for my sisters wedding.",
        },
         Job: {
                title: "Photography",
                skills: ["Arts"],
                done: true,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
            },
     },
     {
         Key: 4,
         Type: "Promoted",
         User:     {
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            rating: 2,
                            description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                          skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
         Message: "The following job request was successfully promoted",
         Data: {},
        Data: {
            title: "Photography",
            skills: ["Arts"],
            details: "I need a photographer for my sisters wedding.",
        },
         Job: {
                title: "Photography",
                skills: ["Arts"],
                done: true,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
            },
     },
     {
         Key: 5,
         Type: "Canceled",
         User:     {
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            rating: 2,
                            description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                          skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
         Message: "You canceled the following job request",
        Data: {
            title: "Photography",
            skills: ["Arts"],
            details: "I need a photographer for my sisters wedding.",
        },
         Job: {
                title: "Photography",
                skills: ["Arts"],
                done: true,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
            },
     },
     {
         Key: 6,
         Type: "Information",
         User:     {
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            rating: 2,
                            description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                            skills: [ {key: "Computer"},
                                        {key: "Technology"} ]
                        },
         Message: "You have succcessfully changed your user name",
         Data: {},
         Job: {},
     },
 ];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Notifications(){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();

    const MainView = {
        flex: 1,
        flexDirection: "column",

        margin: 10,
    };

    const Title = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 28,

        padding: 10,

        color : colors.text
    };

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //FlatList Optimization, use Item layout so that flatlist doesn't neet to calculate item layout
    const ITEM_HEIGHT = 470;
    const getItemLayout = useCallback(
        (data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index
        }),
        []
    );

    return(
        <View style = { MainView }>
          <Text style = { Title }> Notifications</Text>
          <FlatList

            showsHorizontalScrollIndicator={false}
            //--------------------------------------------------This is a dictionary of job categories ----------------------------------------------------------------
            data = {NotificationItems}

            //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
            renderItem = {({item}) =>
                <Notification Type = {item.Type} Data = {item}/>
            }

            keyExtractor={(item, index) => index.toString()}

            //optimization
            initialNumToRender = {3}
            getItemLayout = {getItemLayout}
          />
        </View>
    )

}
export default React.memo(Notifications);
