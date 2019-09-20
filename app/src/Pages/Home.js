/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import CategoryCard from '../Components/CategoryCard'
import CategoriesList from '../Components/CategoriesList'
// import { Card } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Carousel from 'react-native-snap-carousel';


const categories = [
  {
    name: 'Palestras',
    image: 'https://dpz4c7q921os3.cloudfront.net/images/block/84a413f825f71f57b8f3a048179ebb20aa3730d3.jpeg'
  },
  {
    name: 'Workshops',
    image: 'https://dpz4c7q921os3.cloudfront.net/images/block/d8d0045a1d081d1b4c9f336ec08ab71ee2ff10fb.jpeg'
  },
  {
    name: 'Eventos',
    image: 'https://dpz4c7q921os3.cloudfront.net/images/block/4e22355731786660ea9f915e1233a7df462ddce0.png'
  },
  {
    name: 'Meetups',
    image: 'https://dpz4c7q921os3.cloudfront.net/images/block/68531ffc3d5ebde5a4dabe9b6dc9b19b8c746e61.jpeg'
  },
  {
    name: 'Eventos online',
    image: 'https://dpz4c7q921os3.cloudfront.net/images/block/685f2b10a85cdfd7f5e82b38ca734cbaa0cfb125.png'
  },
  {
    name: 'Show de talentos',
    image: 'https://dpz4c7q921os3.cloudfront.net/images/block/52e9dff900383507c59075c88c46ed98249e866c.png'
  }
]
export default class Home extends React.Component {

  _renderItem ({item, index}) {
    return (
      <CategoryCard category={item} />
    );
}

  render() {
    return (
      <View>

        <ScrollView>

          <View>
            <Text style={styles.categoriesText}>
              Eventos em destaque
            </Text>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={categories}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={Dimensions.get('screen').width}
            />
          </View>


          <CategoriesList categories={categories}/>

        </ScrollView>

      </View>
    );
  }

}

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

