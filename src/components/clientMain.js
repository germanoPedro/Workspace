import React, { Component, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

import WorkerScreen from '../Client/Workers/Browse';
import JobRequestScreen from '../Client/JobRequests/JobRequest';
import MessagingScreen from '../Messaging/Messaging';
import NotificationScreen from '../Client/Notification/Notification';
import SearchScreen from '../Client/SearchWorkers/Search';

const Tab = createBottomTabNavigator();

function clientMain() {
    useEffect(()=>{
      fetchUser();
    },[])

        return(
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: '#007AFF',
                inactiveTintColor: 'gray',
                keyboardHidesTabBar: true,
                style: {
                    height: 60,
                },
                showLabel: false,
              }}

            >
                <Tab.Screen name="Workers" component={WorkerScreen }
                  options = {
                    {
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name = "progress-wrench" size = {25} color = { color } />
                      ),
                      headerShown: true
                    }}
                />
                <Tab.Screen name="Search" component={SearchScreen}
                  options = {{
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name = "magnify" color = {color} size = {25}/>
                      )
                  }}/>

                <Tab.Screen name="Job Request" component={JobRequestScreen }
                  options = {{
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name = "plus" color = {color} size = {25}/>
                      )
                  }}/>

                <Tab.Screen name="Notifications" component={NotificationScreen}
                  options = {{
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name = "bell-outline" color = {color} size = {25}/>
                      )
                  }}/>

                <Tab.Screen name="Messaging" component={MessagingScreen}
                  options = {{
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name = "message-outline" color = {color} size = {25}/>
                      )
                  }}/>
            </Tab.Navigator>
        )
    }

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)




export default connect(mapStateToProps, mapDispatchToProps)(clientMain)
