import React, {useState} from 'react';

import {SafeArea} from '../../../components/utility/safe-area.component';
import RestaurantInfoCard from '../components/restaurant-info.component';
import {List} from 'react-native-paper';
import {ScrollView} from 'react-native';

export const RestaurantDetailScreen = ({route}) => {
  const [breakfastexpanded, setBreakfastExpanded] = useState(false);
  const [lunchexpanded, setLunchExpanded] = useState(false);
  const [dinnerexpanded, setDinnerExpanded] = useState(false);
  const [drinksexpanded, setDrinksExpanded] = useState(false);

  const {restaurant} = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="BreakFast"
          left={props => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastexpanded}
          onPress={() => setBreakfastExpanded(!breakfastexpanded)}>
          <List.Item title="Halwa Puri" />
          <List.Item title="Fried Eggs" />
          <List.Item title="Pancakes" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchexpanded}
          onPress={() => setLunchExpanded(!lunchexpanded)}>
          <List.Item title="Zinger Burger" />
          <List.Item title="Nihari" />
          <List.Item title="Biryani" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerexpanded}
          onPress={() => setDinnerExpanded(!dinnerexpanded)}>
          <List.Item title="Chicken Karahi" />
          <List.Item title="Korma" />
          <List.Item title="Pizza Brotchen" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksexpanded}
          onPress={() => setDrinksExpanded(!drinksexpanded)}>
          <List.Item title="Cold Drink" />
          <List.Item title="Coffee" />
          <List.Item title="Milk Shake" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
