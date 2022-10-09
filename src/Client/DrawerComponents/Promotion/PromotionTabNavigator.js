import React, { useCallback } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PromotedItemsScreen from './PromotedItems';
import PromotionJobListScreen from './PromotionJobList';

const Tab = createMaterialTopTabNavigator();

function PromotioTabNavigator() {
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#007AFF',
          inactiveTintColor: 'gray',
          style: {
              height: 60,

          },
          labelStyle : { fontWeight: "bold" },
          indicatorStyle: {backgroundColor:'#007AFF', }
        }}
      >
      <Tab.Screen name="Promoted Items" component={PromotedItemsScreen} />
      <Tab.Screen name="Job List" component={PromotionJobListScreen} />
    </Tab.Navigator>
  );
}

export default ( PromotioTabNavigator );
