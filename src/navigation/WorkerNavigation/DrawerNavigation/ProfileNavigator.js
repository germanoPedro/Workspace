import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from '../../../Worker/DrawerComponents/Profile';


const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options = {{ title : "My Profile" }}/>
    </Stack.Navigator>
  );
}

export default ( ProfileStackNavigator );
