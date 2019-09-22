/* eslint-disable class-methods-use-this */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import CategoriesList from '../Components/CategoriesList';
import EventCard from '../Components/EventCard';

import MOCK_EVENTS from '../utils';

const categories = [
  {
    name: 'Palestras',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/84a413f825f71f57b8f3a048179ebb20aa3730d3.jpeg',
  },
  {
    name: 'Workshops',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/d8d0045a1d081d1b4c9f336ec08ab71ee2ff10fb.jpeg',
  },
  {
    name: 'Eventos',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/4e22355731786660ea9f915e1233a7df462ddce0.png',
  },
  {
    name: 'Meetups',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/68531ffc3d5ebde5a4dabe9b6dc9b19b8c746e61.jpeg',
  },
  {
    name: 'Eventos online',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/685f2b10a85cdfd7f5e82b38ca734cbaa0cfb125.png',
  },
  {
    name: 'Show de talentos',
    image:
      'https://dpz4c7q921os3.cloudfront.net/images/block/52e9dff900383507c59075c88c46ed98249e866c.png',
  },
];

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default class Home extends React.Component {
  renderItem({ item }) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={item.id}
      >
        <EventCard event={item} />
      </View>
    );
  }

  render() {
    return (
      <LinearGradient colors={['#ece9e6', '#ffffff']}>
        <View>
          <ScrollView>
            <View>
              <Text style={styles.categoriesText}>Eventos em destaque</Text>

              <Carousel
                ref={(c) => {
                  this.carousel = c;
                }}
                data={MOCK_EVENTS}
                renderItem={this.renderItem}
                sliderWidth={Dimensions.get('screen').width}
                itemWidth={Dimensions.get('screen').width}
              />
            </View>

            <CategoriesList categories={categories} />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
