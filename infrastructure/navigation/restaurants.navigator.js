import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import RestaurantsScreen from '../../features/resturants/screens/restaurant.screen';
import {RestaurantDetailScreen} from '../../features/resturants/screens/restaurants-details.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
