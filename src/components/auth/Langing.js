import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, View, Button } from 'react-native'

import ClientScreen from '../../LandingScreens/Clients'
import WorkerScreen from '../../LandingScreens/Workers';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Langing({ navigation }) {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: colors.text,
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name= "Client" component= { ClientScreen }
                options = {{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name = "account-circle" size = {26} color = {color}/>
                    )
                }}
            />
        <Tab.Screen name = "Worker" component = { WorkerScreen }
          options = {{
                        tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name = "progress-wrench" size = {26} color = { color } />
                      ),
          }}
        />

        </Tab.Navigator>

    )
}
