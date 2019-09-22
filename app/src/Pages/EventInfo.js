/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Button, Left, Right, Body, Card, CardItem, Toast } from 'native-base';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
// import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import { MOCK_EVENTS } from './../utils';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  eventListTitle: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  eventsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  eventDescriptionTitle: {
    fontSize: 23,
    color: '#3f51b5',
    marginLeft: 5,
    marginBottom: 15,
  },
  eventDescription: {
    padding: 5,
  },
  icon: {
    color: '#3f51b5',
  },
});

export default class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
    };
  }
  componentDidMount() {
    const eventTickets = MOCK_EVENTS[0].tickets.map(ticket => ({ ...ticket, amount: 0 }));

    this.setState({
      tickets: eventTickets,
    });
  }

  toggleTickets = (action, index) => {
    const newTickets = this.state.tickets;

    if (action === 'add') {
      newTickets[index].amount += 1;
    } else if (action === 'remove') {
      if (newTickets[index].amount > 0) newTickets[index].amount -= 1;
      else Toast.show({ text: 'Quantidade inválida' });
    }
    this.setState({
      tickets: newTickets,
    });
  };

  goToCart = () => {
    let isEmpty = true;
    this.state.tickets.forEach((ticket) => {
      if (ticket.amount > 0) isEmpty = false;
    });

    if (isEmpty) Toast.show({ text: 'Selecione pelo menos 1 ingresso!' });
    else Toast.show({ text: 'Redirect' });
  };

  renderTicketArea = () => (
    <View style={{ marginBottom: 50, marginTop: 20 }}>
      <Card>
        <CardItem header bordered>
          <Body>
            <Text
              style={{
                fontSize: 23,
                color: '#3f51b5',
              }}
            >
              Ingressos
            </Text>
          </Body>
        </CardItem>
        {this.state.tickets &&
          MOCK_EVENTS[0].tickets.map((ticket, index) => (
            <CardItem key={ticket.id}>
              <Left>
                <Text>{ticket.name}</Text>
              </Left>
              <Body>
                <Text> R${ticket.cost}</Text>
              </Body>
              <Right style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableHighlight onPress={() => this.toggleTickets('remove', index)}>
                  <FaIcon name="minus" size={15} color="red" />
                </TouchableHighlight>
                {this.state.tickets && this.state.tickets[index] && (
                  <Text>{this.state.tickets[index].amount} </Text>
                )}
                <TouchableHighlight onPress={() => this.toggleTickets('add', index)}>
                  <FaIcon name="plus" size={15} color="green" />
                </TouchableHighlight>
              </Right>
            </CardItem>
          ))}
        <CardItem footer>
          <Button
            block
            warning
            iconLeft
            onPress={() => this.goToCart()}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>Comprar ingressos</Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  );
  render() {
    return (
      <LinearGradient colors={['#ece9e6', '#ffffff']}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.eventListTitle}>{MOCK_EVENTS[0].name}</Text>
          </View>

          <View>
            <Text style={styles.eventDescriptionTitle}>Descrição do Evento</Text>
            <Text style={styles.eventDescription}>{MOCK_EVENTS[0].description}</Text>
          </View>

          <View>
            <Text style={styles.eventDescriptionTitle}>Informações importantes</Text>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text>
                <FaIcon name="calendar" size={17} style={styles.icon} />{' '}
                {moment(MOCK_EVENTS[0].date).format('DD/MM/YYYY')}{' '}
              </Text>
              <Text>
                <FaIcon name="clock-o" size={17} style={styles.icon} />{' '}
                {moment(MOCK_EVENTS[0].date).format('HH:mm')}
              </Text>
            </View>

            <Text style={{ textAlign: 'center', marginTop: 5 }}>Faixa etária: 18 Anos</Text>

            <Text style={{ textAlign: 'center' }}>
              <Icon name="location-on" size={17} style={styles.icon} />
              {MOCK_EVENTS[0].address}
            </Text>
          </View>

          {this.renderTicketArea()}
        </ScrollView>
      </LinearGradient>
    );
  }
}
