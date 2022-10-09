import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PromotionScreen from '../../../Client/DrawerComponents/Promotion/Promotion';
import PromotionPlanDetailsScreen from '../../../Client/DrawerComponents/Promotion/PromotionPlanDetails';

import PromotionJobListStackNavigator from '../../../Client/DrawerComponents/Promotion/PromotionJobListStackNavigator';


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
          <Stack.Screen name="PromotionScreen" component={PromotionScreen} options = {{ title : "Promotion" }}/>
          <Stack.Screen name="PromotionJobListStackNavigator" component={PromotionJobListStackNavigator} options = {{ title : "My Promotions", headerShown: false }}/>
          <Stack.Screen name="PromotionPlanDetailsScreen" component={PromotionPlanDetailsScreen}
              options = {({route}) => ({
                title: route.params.plan.type,
                headerTitleStyle : {
                  textTransform: 'capitalize'
                }
              })}
            />

    </Stack.Navigator>
  );
}

export default ( ClientPromotionStackNavigator );
