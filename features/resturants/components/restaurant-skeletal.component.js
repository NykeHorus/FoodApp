import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RestaurantSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.cardContainer}>
        <View style={styles.imageSkeleton} />
        <View style={styles.infoContainer}>
          <View style={styles.nameSkeleton} />
          <View style={styles.descriptionSkeleton} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.imageSkeleton} />
        <View style={styles.infoContainer}>
          <View style={styles.nameSkeleton} />
          <View style={styles.descriptionSkeleton} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default RestaurantSkeleton;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  imageSkeleton: {
    width: '100%',
    height: 150,
    backgroundColor: '#ddd',
  },
  infoContainer: {
    padding: 16,
  },
  nameSkeleton: {
    height: 20,
    backgroundColor: '#ddd',
    marginBottom: 8,
  },
  descriptionSkeleton: {
    height: 40,
    backgroundColor: '#ddd',
  },
});
