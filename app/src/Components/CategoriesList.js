
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard'

const CategoriesList = ({ categories }) => {

  return (
    <>
      <View>
        <Text style={styles.categoriesText}>
          Categorias
      </Text>
      </View>

      {categories.map((category) => <CategoryCard category={category} />)}
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
    marginRight: 20
  },

})


export default CategoriesList;