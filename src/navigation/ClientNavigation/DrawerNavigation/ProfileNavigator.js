import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from '../../../Client/DrawerComponents/Profile/Profile';


const Stack = createStackNavigator();

const ClientProfileStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        }}}
    >
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options = {{ title : "My Profile" }}/>
    </Stack.Navigator>
  );
}

export default ( ClientProfileStackNavigator );
