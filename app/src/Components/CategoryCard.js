/* eslint-disable no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  cardText: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    color: '#FFFFFF',
  },

  backgroundImage: {
    resizeMode: 'cover',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});

const CategoryCard = ({ category }) => {
  function handleRedirect(category) {
    Actions.eventsList({ category });
  }

  return (
    <TouchableHighlight onPress={() => handleRedirect(category)}>
      <ImageBackground style={styles.backgroundImage} source={{ uri: category.image }}>
        <Text style={styles.cardText}>{category.name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryCard;
