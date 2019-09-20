
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const Navbar = () => {

  return (
    <>
      <View style={styles.navbarContainer}>
        <Text style={styles.categoriesText}>
          M.B. Events
      </Text>
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign:'center'

  },
  navbarContainer: {
    backgroundColor: '#e5f9f5',
    textAlign:'center'
  }

})


export default Navbar;