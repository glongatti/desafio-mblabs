/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'


const EventCard = ({ event }) => {


  return (
    <View style={styles.cardContainer} >
      <View>
        <Text style={styles.eventTitle}>{event.name}</Text>
      </View>
      <View style={styles.dateInfoContainer}>
        <Text> <FaIcon name="calendar" size={17} style={styles.icon} />{moment(event.date).format('DD/MM/YYYY')}</Text>
        <Text><FaIcon name="clock-o" size={17} style={styles.icon} />{moment(event.date).format('HH:mm')}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text><Icon name="location-on" size={17} style={styles.icon} />{event.address}</Text>
      </View>

      <Button block info onPress={() => Actions.eventInfo()} >
        <Text >Mais Informações</Text>
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    textAlign: 'center',
  },
  eventTitle: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#C0C0C0',
    marginLeft: 20,
    marginRight: 20
  },
  dateInfoContainer: {
    marginTop: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center'
  },
  addressContainer: {
    marginTop: 5,
    padding: 10,
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    padding: 10,
    textAlign: 'center'
  },
  icon: {
    marginRight: 50,
    color: '#3f51b5'
  }
})

export default EventCard;
