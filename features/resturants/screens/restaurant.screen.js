import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import React, {useState, useContext, useCallback, useEffect} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';

import RestaurantInfoCard from '../components/restaurant-info.component';
import {Spacer} from '../../../components/spacer/Spacer';
import {RestaurantsContext} from '../../../services/restaurants/restaurant.context';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Search} from '../components/search.component';
import {
  restaurantsRequest,
  restaurantsTransform,
} from '../../../services/restaurants/restaurant.service';
import RestaurantSkeleton from '../components/restaurant-skeletal.component';
import {useFocusEffect} from '@react-navigation/native';

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: props => props.theme.space[3],
  },
})``;

const cods = [
  '51.219448,4.402464',
  '43.653225,-79.383186',
  '41.878113,-87.629799',
  null,
];

const RestaurantsScreen = ({navigation}) => {
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  const [isItem, setIsItem] = useState('');
  const [nextPage, setNextPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);

  //pagination function
  const loadRestaurants = async () => {
    if (isLoading || nextPage === null) return;

    setIsLoader(true);

    const page = cods[nextPage];
    // const area = '51.219448,4.402464';
    setTimeout(() => {
      restaurantsRequest(page)
        .then(restaurantsTransform)
        .then(results => {
          setIsLoader(false);
          setIsItem(exsistingItems => {
            return [...exsistingItems, ...results];
          });
          setNextPage(nextPage + 1);
        });
    }, 500);
  };

  useEffect(() => {
    setIsItem(restaurants);
  }, [restaurants]);

  // if (isItem.length === 0) {
  //   // only for debug to work
  //   return null;
  // }

  // const onRefresh = () => {
  //   if (isLoader) {
  //     return;
  //   }
  //   setIsItem(restaurants);
  //   setIsLoader(false);
  // };

  // const headers = {
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY2NGEwNDM1ZDAxNmZjNTBiNTMyM2IiLCJmaXJzdE5hbWUiOiJKYW1lIiwibGFzdE5hbWUiOiJBbmRyZXJzb24iLCJlbWFpbCI6ImphbWVzQG1haWxpbmF0b3IuY29tIiwicGhvbmVOdW1iZXIiOiIwMzIzMjk3MDcwNSIsInJvbGUiOiJyaWRlciIsImltYWdlIjoiaHR0cDovL2FwaS5oZWxsb2hvdHNob3QuY28vdXBsb2Fkcy8xNzAzOTMwMjIyNTkwLnBuZyIsIm1vZGVPZkNvbW11bmljYXRpb24iOiJlbWFpbCIsInByb2ZpbGVDb21wbGV0ZWQiOnRydWUsInN0YXR1cyI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0xMS0yOFQyMDoxMzo1Ni4zNjJaIiwidXBkYXRlZEF0IjoiMjAyNC0wMy0wMlQxNjozODozMi4zMjJaIiwiX192IjowLCJyaWRlckxvY2F0aW9uIjpbLTEyMi4wODM5MjIsMzcuNDIyMDkzNl0sImN1cnJlbnRTaGlwcG1lbnQiOm51bGwsImZpbmdlclByaW50S2V5IjoiTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFwM285VURGUkE2Yjg5dFNFK21jMGh4NW50eTg5ckhKU0hlMWc5QnBZeXR0VFZjMXpqbEJCREpYTlpXZk54NmVKSUZEeCtPdDlJTE5TbWFVU0NCbFQrRDZTUHBuY1F3UzVoTk1kU1IwM0RNMTVsSmdpVmRUdkVzTlFDVFJkYWdidlM3dXVPRFV6d0E4S2xjSmt0RGx6WGZGYkg5bEhYcUx6WnQ4NEtqcU1GNGJWQkFDZnNJU216dDBsRnhQQWpYbmRWNFVWVnYvalhIMGhmQjczOEZtUlJGZG13M0VTZWNEMnBycm9Sc1cxZWM0RVNlUnJoYXNrRkhRNWIvNnREQ1U5cVkveHJOaFhmSGRSUWtQSHB6YWtSUmhhSU5jc3cra0U0bCtrYXczVGxOV2tUUzZzV05sNm9kM0dOTjdWbTZybDBUUFNvR29MRk5vbGRJOGVXZGViUVFJREFRQUIiLCJpYXQiOjE3MDk4OTA1Nzl9.ugY_XGWyKfPyuLErG_W8OWKmUVA5d5V4WpTdZ_HDyfk',
  // };

  // let url = `https://api.hellohotshot.co/api/shipment/get?page=${nextPage}`;
  // const initialPage = 'https://api.hellohotshot.co/api/shipment/get?page=1';

  // const fetchPage = async () => {
  //   if (isLoader || nextPage === null) {
  //     return;
  //   }
  //   setIsLoader(true);
  //   const response = await fetch(url, {headers});
  //   const responseJson = await response.json();
  //   const data = responseJson.data.docs;

  //   const shipperInfoList = data.map(document => {
  //     return document.user;
  //   });

  //   setIsItem(existingItems => {
  //     return [...existingItems, ...shipperInfoList];
  //   });
  //   setNextPage(responseJson.data.nextPage);
  //   setIsLoader(false);
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     loadRestaurants();
  //     return () => {
  //       setIsItem([]);
  //       setNextPage(1);
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []),
  // );

  // const onRefresh = () => {
  //   if (isLoader) {
  //     return;
  //   }
  //   setIsItem([]);
  //   fetchPage(initialPage);
  //   setNextPage(1);
  // };

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <RestaurantSkeleton />
      ) : (
        <ResturantList
          data={isItem}
          onEndReached={loadRestaurants}
          ListFooterComponent={() => isLoader && <ActivityIndicator />}
          refreshing={isLoading}
          onRefresh
          removeClippedSubviews={true}
          initialNumToRender={5}
          // windowSize={5}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }>
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
