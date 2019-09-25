/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Button, Left, Right, Body, Card, CardItem, Toast } from 'native-base';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  AsyncStorage,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import { MOCK_EVENTS } from './../utils';
import Login from './Login';

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
      modalVisible: false,
    };
  }
  componentDidMount() {
    const eventTickets = this.props.event.tickets.map(ticket => ({ ...ticket, amount: 0 }));

    this.setState({
      tickets: eventTickets,
    });
  }

  handleModal = (isModalVisible) => {
    this.setState(
      {
        modalVisible: isModalVisible,
      },
      () => this.goToCart(),
    );
  };

  toggleTickets = (action, index) => {
    const newTickets = this.state.tickets;

    if (action === 'add') {
      newTickets[index].amount += 1;
    } else if (action === 'remove') {
      if (newTickets[index].amount > 0) newTickets[index].amount -= 1;
      else alert('Quantidade inválida');
    }
    this.setState({
      tickets: newTickets,
    });
  };

  goToCart = async () => {
    let isEmpty = true;
    this.state.tickets.forEach((ticket) => {
      if (ticket.amount > 0) isEmpty = false;
    });

    const user = await AsyncStorage.getItem('userData');
    if (isEmpty) alert('Selecione pelo menos 1 ingresso!');
    else if (!user) this.handleModal(true);
    else Actions.orderResume({ tickets: this.state.tickets, event: this.props.event });
  };

  renderLoginModal = () => (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <TouchableHighlight onPress={() => this.handleModal(false)}>
          <Text>Fechar Modal</Text>
        </TouchableHighlight>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Login handleModal={this.handleModal} />
        </View>
      </Modal>
    </View>
  );

  renderEventInfoArea = () => (
    <Card>
      <CardItem header bordered>
        <Body>
          <Text
            style={{
              fontSize: 23,
              color: '#3f51b5',
            }}
          >
            {this.props.event.name}
          </Text>
        </Body>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.eventDescriptionTitle}>Descrição do Evento</Text>
          <Text style={styles.eventDescription}>{this.props.event.description}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text
            style={{
              fontSize: 23,
              color: '#3f51b5',
              marginLeft: 5,
            }}
          >
            Informações importantes
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>
            <FaIcon name="calendar" size={17} style={styles.icon} />{' '}
            {moment(this.props.event.date).format('DD/MM/YYYY')}{' '}
          </Text>
          <Text>
            <FaIcon name="clock-o" size={17} style={styles.icon} />{' '}
            {moment(this.props.event.date).format('HH:mm')}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Text style={{ textAlign: 'center' }}>
            <Icon name="location-on" size={17} style={styles.icon} />
            {this.props.event.address}
          </Text>

          <Text style={{ textAlign: 'center', marginTop: 5 }}>Faixa etária: 18 Anos</Text>
        </Body>
      </CardItem>
    </Card>
  );

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
          this.props.event.tickets.map((ticket, index) => (
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
          {this.renderEventInfoArea()}
          {this.renderTicketArea()}

          {this.renderLoginModal()}
        </ScrollView>
      </LinearGradient>
    );
  }
}
