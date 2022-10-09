import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
//Test ssh keys
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
//import { Avatar } from 'react-native-elements';
////import firebase from 'firebase/compat/app';

////import {getAuth, onAuthStateChanged} from 'firebase/auth';
////require('firebase/compat/auth'); //This is to import auth from firebase

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import rootReducer from './src/redux/reducers';
//import thunk from 'redux-thunk';

//const store = createStore(rootReducer, applyMiddleware(thunk));

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { AppRegistry, Platform } from 'react-native';

//
/* -------------------------------------- DONT CHANGE THE CODE BELOW -----------------------------------------------------------------------------------------------
//import and store firebase config data
import { initializeApp } from "firebase/app"
import {firebaseConfigData} from './firebaseConfig';
//store firebaseconfig data in a variable
const firebaseApp = firebase.initializeApp({ firebaseConfigData });



App = firebase.initializeApp(firebaseConfigData);

var db = getFirestore(firebaseApp);

*/// ------------------------------------------- DONT CHANGE THE CODE ABOVE ----------------------------------------------------------------------------------------------

import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//Main screens
import MainStackNavigator from './src/navigation/MainStackNavigator';
import ClientMainscreen from './src/components/clientMain';
import WorkerMainscreen from './src/components/workerMain';

//Import worker drawer
import MainWorkerStackNavigator from './src/navigation/WorkerNavigation/MainWorkerStackNavigator';
import ProfileStackNavigator from './src/navigation/WorkerNavigation/DrawerNavigation/ProfileNavigator';
import SettingsStackNavigator from './src/navigation/WorkerNavigation/DrawerNavigation/SettingsNavigator';
import AnalyticsStackNavigator from './src/navigation/WorkerNavigation/DrawerNavigation/AnalyticsNavigator';
import PromotionStackNavigator from './src/navigation/WorkerNavigation/DrawerNavigation/PromotionNavigator';
import { DrawerContent } from './src/navigation/DrawerContent';

//Worker screens
import WorkerViewClientProfileScreen from './src/Worker/Jobs/subScreens/WorkerViewClientProfile';
import WorkerJobDetailsScreen from './src/Worker/Jobs/subScreens/JobDetails';
import JobScreen from './src/Worker/Jobs/Jobs';
import JobScheduleDetailsScreen from './src/Worker/Schedule/subScreens/JobScheduleDetails';

//Client screens
import MainClientStackNavigator from './src/navigation/ClientNavigation/MainClientStackNavigator';
//Import client drawer
import ClientProfileStackNavigator from './src/navigation/ClientNavigation/DrawerNavigation/ProfileNavigator';
import ClientSettingsStackNavigator from './src/navigation/ClientNavigation/DrawerNavigation/SettingsNavigator';
import ClientAnalyticsStackNavigator from './src/navigation/ClientNavigation/DrawerNavigation/AnalyticsNavigator';
import ClientPromotionStackNavigator from './src/navigation/ClientNavigation/DrawerNavigation/PromotionNavigator';
import { ClientDrawerContent } from './src/navigation/ClientNavigation/clientDrawerContent';


import { Appearance } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { colorsDark } from 'react-native-elements/dist/config';

//Auth context
import { AuthContext } from './src/components/context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Using a function and hooks for efficiency and for using the use color scheme
//
export default function App(){

///////////////////////////////////////////////////////////Do not touch code below without permission ///////////////////////////////////////////////////////////////////////////////

//Worker Navigation
//State variables for worker availability
//Used for the toggle switch at top of screen
const [available,setAvailable] = useState(null);

//This code will be used to get the value of available from the database
useEffect(()=>{
setAvailable(false);
},[]);

useEffect( () => {
console.log("mounted: " + available)
}, [available])

function changeAvailable(){
    setAvailable(true)
}

const [ loggedIn, setLoggedIn ] = useState(null);
const [userIsWorker, setUserIsWorker] = useState(null);//using states to be able to use variable throughout app
//This code checks if the users log status has changed it sets the variable in state to the correct state which will be used later
/*
useEffect( () => {
    getAuth(firebaseApp).onAuthStateChanged((auth, user) => {
      if(!user){
        setLoggedIn(false);//Sets false if the user is logged in
      }else{
        setLoggedIn(true);//Sets true if user is logged in
      }
    //Testing what type of user the user is to guide them to the correct interface
      // Nesting the following statement inside of the use effect to efficiently use for loading
    var uid; //declare variable for userID
    if (user != null) { //testing if the document exists before attempting tests
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
    var docRefUser=  db.collection("Users").doc(uid); //collect user by id in client collection
    docRefUser.get().then((doc) => {
        if ( doc.data().worker ){ //Sees if the document does not exist in the worker collection
          setUserIsWorker(true); //if the document does not exist in the client collection then the current user is not a client
          console.log("User is worker: ",userIsWorker);
        } else {
          setUserIsWorker(false)// if the document does exist in the client collection then the current user is a client
          console.log(userIsWorker);
        };
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    };
    });
  }, []);*/

//This sets the color scheme for

const [isDarkTheme , setIsDarkTheme] = useState(false);

//Set the initial theme of the app

  const DarkTheme = {
    dark: true,
    colors:{
      //Main Components
        primary: '#FFDB15',
        background: '#020301',
        secondary:"#007AFF",
        white: "#FFFFFF",

      //Buttons
        primaryButton:"#007AFF",

      //Items colors
        card: '#121212',
        border: '#282828',
        notification: '#9933FF',
        grant: '#1FC78A',
          darkGreen: "#35844B",
        warning:'#D74848',

      //Text Colors
        text: '#F3F5F9',
        lightText: '#E0E0E0',
    }
  };

  const LightTheme = {
    dark : false,
    colors: {
      //Main Components
      background: '#F2F2F2',
      primary: '#F2C94C',
      secondary:"#007AFF",
      white: "#FFFFFF",

      //Buttons
      primaryButton:"#007AFF",

      //Items colors
      card: '#FFFFFF',
      border: '#E0E0E0',
      notification: '#9933FF',
      grant: '#1FC78A',
        darkGreen: "#35844B",
      warning:'#D74848',

      //Text Colors
      text: '#000000',
      lightText:'#6A6A6A',
    }
  }


  /*const authContext = React.useMemo(() => ({
    signOut: async () =>{
      firebase.auth().signOut().then(
        ()=> console.log('logout')
      )
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    },
    mode: isDarkTheme
  }), []);*/

  let loadingImage = require("./assets/ThealoadeAppLOGO.png" );
// This looks if the user is logged in and if it is it returns the adequite screens
  if( !loggedIn){
      return(
        <View style = {{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection:'row'}}>
          <Image source = {require("./assets/CategoryCardImages/Events.png")}
            style = {{ width: 60, height: 60 }}
          />
        </View>
      );
    };

///////////////////////////////////////////////////////////Do not touch code above without permission ///////////////////////////////////////////////////////////////////////////////
    // setLoggedIn (true)
    if (loggedIn === null){
      return (
        // <Appearance>
        //     <NavigationContainer theme = { isDarkTheme ? DarkTheme : DefaultTheme }>
        //       <MainStackNavigator />
        //     </NavigationContainer>
        // </Appearance>
        <View>
          <Text>
            ma se
          </Text>
        </View>
      );
    };

//Testing if the user is worker seperately to avoid the bug of constantly being in load when new app starts
  if( userIsWorker === null ){
      return(
        <View style = {{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection:'row'}}>
          <Image source = { loadingImage }
            style = {{ width: 60, height: 60 }}
          />
        </View>
      );
    };
  const {colors} = useTheme();
  if(!userIsWorker){
    //Client Navigation
        console.log(userIsWorker)
        return(
          <Provider store = {store} >
            <Appearance>
              <AuthContext.Provider value={authContext}>
                  <NavigationContainer theme = { isDarkTheme ? DarkTheme : LightTheme}>
                    <Drawer.Navigator
                      drawerContent={props => <ClientDrawerContent {...props} />}
                      initialRouteName="Landing"
                      screenOptions={{
                      headerStyle: {
                          elevation: 0,
                          shadowOpacity: 0
                      },
                      }}
                    >
                      <Drawer.Screen name="Home" component={MainClientStackNavigator} />
                      <Drawer.Screen name="Profile" component={ClientProfileStackNavigator} />
                      <Drawer.Screen name="SettingsScreen" component={ClientSettingsStackNavigator} />
                      <Drawer.Screen name="AnalyticsScreen" component={ClientAnalyticsStackNavigator} />
                      <Drawer.Screen name="PromotionScreen" component={ClientPromotionStackNavigator} />
                    </Drawer.Navigator>
                  </NavigationContainer>
            </AuthContext.Provider>
            </Appearance>
          </Provider>
        );
      }else {
        console.log("Worker is available: " + available)
        return(
        <Provider store = {store} >
          <Appearance>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme = { isDarkTheme ? DarkTheme : LightTheme}>
                  <Drawer.Navigator
                    drawerContent={props => <DrawerContent {...props} />}
                    initialRouteName="Landing"
                    screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0
                    }}}
                  >
                    <Drawer.Screen name="Home" component={MainWorkerStackNavigator} />
                    <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
                    <Drawer.Screen name="SettingsScreen" component={SettingsStackNavigator} />
                    <Drawer.Screen name="AnalyticsScreen" component={AnalyticsStackNavigator} />
                    <Drawer.Screen name="PromotionScreen" component={PromotionStackNavigator} />
                  </Drawer.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
          </Appearance>
        </Provider>
        );
      };

  };
