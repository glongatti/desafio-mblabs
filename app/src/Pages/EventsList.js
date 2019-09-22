/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import EventCard from '../Components/EventCard';
import { MOCK_EVENTS } from './../utils';

const styles = StyleSheet.create({
  eventListTitle: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  eventsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const EventsList = ({ category }) => (
  <Fragment>
    <ScrollView>
      <View>
        <Text style={styles.eventListTitle}>Listando: {category.name}</Text>
      </View>

      <View style={styles.eventsList}>
        {MOCK_EVENTS.map(event => (
          <EventCard event={event} />
        ))}
      </View>
    </ScrollView>
  </Fragment>
);

export default EventsList;
