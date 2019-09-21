
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';

import EventCard from '../Components/EventCard'
import { MOCK_EVENTS } from './../utils'


const EventsList = ({ category = { name: 'Teste' } }) => {

  return (
    <>
      <View>
        <Text style={styles.eventListTitle}>
          Listando: {category.name}
        </Text>
      </View>

      <View style={styles.eventsList}>
        {MOCK_EVENTS.map((event, index) => {
          return (
            <EventCard event={event} />
          )
        })}
      </View>

    </>
  );
};



const styles = StyleSheet.create({
  eventListTitle: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30
  },
  eventsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

})


export default EventsList;