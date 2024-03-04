import React from 'react';
import {SvgXml} from 'react-native-svg';
import star from '../../../assets/images/star';
import open from '../../../assets/images/open';
import {Spacer} from '../../../components/spacer/Spacer';
import {Text} from '../../../components/typography/Text';
import {
  ResturantCard,
  ResturantCardCover,
  Icon,
  SectionEnd,
  Section,
  Info,
  Rating,
  Address,
} from './resturant-info-styles';

const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/312'],
    address = '100 random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <ResturantCard elevation={5}>
        <ResturantCardCover key={name} source={{uri: photos[0]}} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, index) => (
                <SvgXml
                  key={`star-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{uri: icon}} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </ResturantCard>
    </>
  );
};

export default RestaurantInfoCard;
