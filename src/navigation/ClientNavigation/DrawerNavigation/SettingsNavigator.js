import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from '../../../Client/DrawerComponents/Settings';


const Stack = createStackNavigator();

const ClientSettingsStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        }}}
    >
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options ={{ title : "Settings" }}/>
    </Stack.Navigator>
  );
}

export default ( ClientSettingsStackNavigator );
