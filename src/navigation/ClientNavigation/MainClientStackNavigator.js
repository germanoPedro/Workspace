import React, { useCallback, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import PopupMenu from '../../components/WorkerComponents/PopupMenu';

import LandingScreen from '../../components/auth/Langing';
import ClientMainscreen from '../../components/clientMain';

//Clinet screens

import ClientViewWorkerProfileScreen from '../../Client/Workers/BrowseWorkers/subScreens/clientViewWorkerProfile';
import ClientWorkersScreen from '../../Client/Workers/BrowseWorkers/Workers';
import JobRequestDetailsScreen from '../../Client/JobRequests/subScreens/JobRequestDetails';
import JobCompletedDetailsScreen from '../../Client/JobRequests/subScreens/JobCompletedDetails';
//Import chatroom screen from messaging
import ChatRoomScreen from "../../Messaging/Screens/ChatRoom";
//Notifications Navigation components
import PromotionJobListStackNavigator from '../../Client/DrawerComponents/Promotion/PromotionJobListStackNavigator';


const Stack = createStackNavigator();

const MainClientStackNavigator = ({navigation}) => {

  const onBlock = () => {
    alert("Blocked");
  };

  const onReport= () => {
    alert("Reported");
  };

  const onCopyLink= () => {
    alert("Link Copied");
  };

  const onPopupEvent = useCallback((eventName, index) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) onBlock()
    else if(index === 1 ) onReport()
    else onCopyLink()
  },[]);

  const {colors} = useTheme();
  //Used for the toggle switch at top of screen
  const [available,setAvailable] = useState(null);

  //This code will be used to get the value of available from the database
  useEffect(()=>{
  setAvailable(false);

  },[]);
  return (
    <Stack.Navigator
        initialRouteName ="Landing"
        screenOptions={{
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        },
        }}
    >
        <Stack.Screen name="clientMain" component={ClientMainscreen}

        options = {{
        title: "Client",
        headerRight: () => (
            <Avatar
                title="WA" //{name[0]} This is a place holder
                //source=//{{ uri: avatar_url }} This will be used when we upload images to the database
                size="small"
                rounded
                overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                onPress={() => navigation.toggleDrawer()}
                activeOpacity={0.7}
                containerStyle={{marginRight: 20 }}
            />
        ),
        }}
        />
        <Stack.Screen name = "ClientViewWorkerProfile" component = {ClientViewWorkerProfileScreen }
        options = {
            ({ route }) => ({
            title: route.params.item.name,
            headerRight: ({text}) => (
                        <View style = {{margin : 15}}>
                          <PopupMenu actions={['Block', 'Report', 'Copy Link']} onPress={onPopupEvent} />
                        </View>
                        ),
            })
        }
        />
        <Stack.Screen name = "ClientWorkersScreen" component = {ClientWorkersScreen }
        options = {({route}) => ({
            title: route.params.item.category,
            headerRight: () => (
                <Avatar
                title="TA" //{name[0]} This is a place holder
                //source=//{{ uri: avatar_url }} This will be used when we upload images to the database
                size="small"
                rounded
                overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginRight: 20 }}
                />
            )
        })}
        />
        <Stack.Screen name = "JobRequestDetails" component={JobRequestDetailsScreen}
        options = {({route}) => ({
            title: route.params.item.title,
        })}
        />
        <Stack.Screen name = "JobCompletedDetails" component={JobCompletedDetailsScreen}
        options = {({route}) => ({
            title: route.params.item.title,
        })}
        />

        <Stack.Screen name="PromotionJobListStackNavigator" component={PromotionJobListStackNavigator} options = {{ title : "My Promotions", headerShown: false }}/>
        <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} 
          options = { ({route}) => ({ 
            title : route.params.item.sending_user.name,
            headerRight: () => (
                <Avatar
                title="TA" //{name[0]} This is a place holder
                source= {{uri : route.params.item.sending_user.profile_pic}}
                size="small"
                rounded
                overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{marginRight: 25 }}
                />
            )
            })}/>
        
    </Stack.Navigator>
  );
}

export default ( MainClientStackNavigator );
