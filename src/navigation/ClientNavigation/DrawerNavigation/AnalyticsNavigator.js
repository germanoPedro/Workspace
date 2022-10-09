import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnalyticsScreen from '../../../Client/DrawerComponents/Analytics/Analytics';
import BadgesScreen from '../../../Client/DrawerComponents/Analytics/Badges';
import BadgesDetailsScreen from '../../../Client/DrawerComponents/Analytics/BadgesDetails';
import DataScreen from '../../../Client/DrawerComponents/Analytics/Data';
import AnalyticsDetailScreen from '../../../Client/DrawerComponents/Analytics/AnalyticsDetails';


const Stack = createStackNavigator();

const ClientAnalyticsStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        }}}
    >
      <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} options = {{ title : "Analytics" }}/>
      <Stack.Screen name="BadgesScreen" component={BadgesScreen}
                    options = {{ title : "My Badges",
                                 headerStyle:{
                                   elevation: 0 , //remove on android
                                   shadowOpacity: 0, //remove on IOS
                                 }

                               }}/>
      <Stack.Screen name="BadgesDetailsScreen" component={BadgesDetailsScreen}
                    options = {({route}) => ({
                    title: route.params.title,
                    headerStyle:{
                        elevation: 0 , //remove on android
                        shadowOpacity: 0, //remove on IOS
                    }
                    })}
                               />
      <Stack.Screen name="DataScreen" component={DataScreen} options = {{ title : "My Data" }}/>
      <Stack.Screen name = "AnalyticsDetailScreen" component={AnalyticsDetailScreen}
          options = {({route}) => ({
            title: route.params.item.title,
          })}
      />
    </Stack.Navigator>
  );
}

export default ( ClientAnalyticsStackNavigator );
