/* eslint-disable class-methods-use-this */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import CategoriesList from '../Components/CategoriesList';
import EventCard from '../Components/EventCard';

import { MOCK_EVENTS, categories, appConfig } from '../utils';

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    paddingBottom: 5,
    margin: 20,
  },
});

export default class Home extends React.Component {
  // async componentDidMount() {
  //   await AsyncStorage.removeItem('orders');
  // }

  getCategories() {
    return axios.get(`${appConfig.apiRoot}/categories`);
  }

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
                loop
                autoplay
                autoplayDelay={1}
                autoplayInterval={3000}
                layout="default"
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
