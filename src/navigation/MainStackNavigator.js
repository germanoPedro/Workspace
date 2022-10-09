import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from '../components/auth/Langing';

//Worker landing screens
import WorkerRegisterScreen from '../components/auth/Worker/Register';
import WorkerLoginScreen from '../components/auth/Worker/Login';

//Client Landing screens
import ClientRegisterScreen from '../components/auth/Client/Register';
import ClientLoginScreen from '../components/auth/Client/Login';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName ="Langing">
        <Stack.Screen name="Langing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Worker Register" component={WorkerRegisterScreen} />
        <Stack.Screen name="Worker Login" component={WorkerLoginScreen}/>
        <Stack.Screen name="Client Register" component={ClientRegisterScreen}/>
        <Stack.Screen name="Client Login" component={ClientLoginScreen}/>

    </Stack.Navigator>
  );
}

export default ( MainStackNavigator );