/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Card, CardItem, Body } from 'native-base';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

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
    marginRight: 20,
  },
  dateInfoContainer: {
    marginTop: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: 'red',
  },
  addressContainer: {
    marginTop: 5,
    padding: 10,
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    padding: 10,
    textAlign: 'center',
  },
  icon: {
    marginRight: 50,
    color: '#3f51b5',
  },
});
const EventCard = ({ event }) => (
  <Card style={{ width: '90%', backgroundColor: '#DCDCDC' }}>
    <CardItem header bordered>
      <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{event.name}</Text>
      </Body>
    </CardItem>
    <CardItem>
      <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>
          <FaIcon name="calendar" size={17} style={styles.icon} />{' '}
          {moment(event.date).format('DD/MM/YYYY')}
        </Text>
        <Text>
          <FaIcon name="clock-o" size={17} style={styles.icon} />{' '}
          {moment(event.date).format('HH:mm')}
        </Text>
      </Body>
    </CardItem>
    <CardItem>
      <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>
          <Icon name="location-on" size={17} style={styles.icon} />
          {event.address}
        </Text>
      </Body>
    </CardItem>
    <CardItem footer>
      <Button
        block
        info
        iconLeft
        onPress={() => Actions.eventInfo()}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <FaIcon name="plus" size={18} color="#ffffff" />
        <Text>Mais Informações</Text>
      </Button>
    </CardItem>
  </Card>
);

export default EventCard;
