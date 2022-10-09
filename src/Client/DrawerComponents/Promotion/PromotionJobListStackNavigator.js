import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import PromotionTabNavigator from '../../../Client/DrawerComponents/Promotion/PromotionTabNavigator';

import PromotionJobCompletedDetailsScreen from '../../../Client/JobRequests/subScreens/JobRequestDetails';

const Stack = createStackNavigator();

const ClientPromotionStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        }}}
    >
          <Stack.Screen name="PromotionTabNavigator" component={PromotionTabNavigator} options = {{ title : "My Promotions" }}/>
            <Stack.Screen name = "PromotionJobCompletedDetailsScreen" component={PromotionJobCompletedDetailsScreen}
            options = {({route}) => ({
                title: route.params.item.title,
            })}
            />

    </Stack.Navigator>
  );
}

export default ( ClientPromotionStackNavigator );
