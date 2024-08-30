import React, {useState, useContext, useEffect} from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import styled from 'styled-components/native';

import {Search} from '../components/search.component';
import {MapCallout} from '../components/map-callout.component';

import {LocationContext} from '../../../services/locations/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurant.context';
import Geolocation from '@react-native-community/geolocation';
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({navigation}) => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const {lat, lng, viewport} = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant,
                  })
                }>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};