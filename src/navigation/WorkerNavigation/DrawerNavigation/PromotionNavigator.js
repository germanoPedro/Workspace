import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PromotionScreen from '../../../Worker/DrawerComponents/Promotion/Promotion';
import PromotionOptionsScreen from '../../../Worker/DrawerComponents/Promotion/PromotionOptions';
import PromotionPlanDetailsScreen from '../../../Worker/DrawerComponents/Promotion/PromotionPlanDetails';


const Stack = createStackNavigator();

const PromotionStackNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen name="PromotionScreen" component={PromotionScreen} options = {{ title : "Promotion" }}/>
          <Stack.Screen name="PromotionOptionsScreen" component={PromotionOptionsScreen} options = {{ title : "Promotion Plans" }}/>
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

export default ( PromotionStackNavigator );
