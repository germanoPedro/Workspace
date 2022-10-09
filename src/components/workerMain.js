import React, { Component, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchUser } from "../redux/actions/index";

//Import screens
import JobsScreen from "../Worker/Jobs/Jobs"
import BrowseScreen from "../Worker/Browse/Browse"
import MessagingScreen from '../Messaging/Messaging';
import NotificationScreen from "../Worker/Notification/Notification";
import ScheduleScreen from "../Worker/Schedule/Schedule"

const Tab = createBottomTabNavigator();

function workerMain (){

  useEffect(()=>{
    fetchUser();
  });
        return(
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: "#007AFF",
                inactiveTintColor: "gray",
                keyboardHidesTabBar: true,
                style: {
                    height: 60,
                },
                showLabel: false,
              }}
            >
            <Tab.Screen name="Jobs" component = {JobsScreen}
              options ={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "wrench-outline" size = {25} color = {color} />
                  ),
                  headerShown: true
              }}
            />

            <Tab.Screen name="Browse" component={BrowseScreen}
              options ={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "compass-outline" size = {25} color = {color} />
                  ),
              }}
            />

            <Tab.Screen name="Schedule" component={ScheduleScreen}
              options ={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "calendar-outline" size = {25} color = {color} />
                  ),
              }}
            />

            <Tab.Screen name="Notifications" component={NotificationScreen}
              options ={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "bell-outline" size = {25} color = {color} />
                  ),
              }}
            />


            <Tab.Screen name="Messaging" component={MessagingScreen}
              options ={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "message-outline" size = {25} color = {color} />
                  ),
              }}
            />


            </Tab.Navigator>
        )
    }
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(workerMain);

