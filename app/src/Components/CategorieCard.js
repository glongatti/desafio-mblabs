/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, ImageBackground,StyleSheet } from 'react-native';


const CategorieCard = ({ name, imageUrl }) => {
  console.disableYellowBox = true;
  return (
    <ImageBackground style={styles.backgroundImage} source={{ uri: imageUrl }}>
      <Text style={styles.cardText}>{name}</Text>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  cardText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    paddingTop: 50,
    paddingBottom: 50,
    color: '#FFFFFF'
  },

  backgroundImage: {
    resizeMode: 'cover',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20
  }
})

export default CategorieCard;
