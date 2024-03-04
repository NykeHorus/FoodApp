import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import React, {useState, useContext} from 'react';

import RestaurantInfoCard from '../components/restaurant-info.component';
import {Spacer} from '../../../components/spacer/Spacer';
import {RestaurantsContext} from '../../../services/restaurants/restaurant.context';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Search} from '../components/search.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: props => props.theme.space[3],
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({navigation}) => {
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <ResturantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantDetail')}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
      {/* <ResturListContainer></ResturListContainer> */}
    </SafeArea>
  );
};

export default RestaurantsScreen;
