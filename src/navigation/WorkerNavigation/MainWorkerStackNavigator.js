import React, { useCallback, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import PopupMenu from '../../components/WorkerComponents/PopupMenu';

import LandingScreen from '../../components/auth/Langing';
import WorkerMainscreen from '../../components/workerMain';

//Worker screens
import WorkerViewClientProfileScreen from '../../Worker/Jobs/subScreens/WorkerViewClientProfile';
import WorkerJobDetailsScreen from '../../Worker/Jobs/subScreens/JobDetails';
import JobScreen from '../../Worker/Jobs/Jobs';
import JobScheduleDetailsScreen from '../../Worker/Schedule/subScreens/JobScheduleDetails';

import DataScreen from '../../Worker/DrawerComponents/Analytics/Data';

const Stack = createStackNavigator();

const MainWorkerStackNavigator = ({navigation}) => {

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
      <Stack.Screen name="workerMain" component={WorkerMainscreen}

      options = {{
        title: "Thealoade Worker",
        headerRight: () => (
            <View style = {{flex : 1, flexDirection: "row", alignItems: "center"}}>
                <Avatar
                title="TA" //{name[0]} This is a place holder
                source ={{uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'}}
                //source=//{{ uri: avatar_url }} This will be used when we upload images to the database
                size="small"
                rounded
                overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                onPress={() => navigation.toggleDrawer()}
                activeOpacity={0.7}
                containerStyle={{marginRight: 20 }}
              />
            </View>
        ),
      }}
      />
    <Stack.Screen name = "WorkerJobDetailsScreen" component={WorkerJobDetailsScreen}
        options = {({route}) => ({
          title: route.params.item.title,
          headerRight: ({text}) => (
                      <>
                        <View style = {{margin : 10}}>
                          <PopupMenu actions={['Block', 'Report', 'Copy Link']} onPress={onPopupEvent} />
                        </View>
                      </>
                    ),
        })}
    />
    <Stack.Screen name = "JobScheduleDetailsScreen" component={JobScheduleDetailsScreen}
        options = {({route}) => ({
          title: route.params.item.title,
        })}
    />
    <Stack.Screen name = "JobScreen" component={JobScreen}
    />
    <Stack.Screen name = "WorkerViewClientProfile" component = {WorkerViewClientProfileScreen }
        options = {
          ({ route }) => ({
            title: route.params.client.name,
            headerRight: ({text}) => (
                        <>
                          <View style = {{margin : 10}}>
                            <PopupMenu actions={['Block', 'Report', 'Copy Link']} onPress={onPopupEvent} />
                          </View>
                        </>
                      ),
          })
        }
    />
      <Stack.Screen name="DataScreen" component={DataScreen} options = {{ title : "My Data" }}/>
    </Stack.Navigator>
  );
}

export default ( MainWorkerStackNavigator );
