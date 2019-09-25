/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, AsyncStorage, TouchableHighlight, Modal, View, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Button,
  Spinner,
} from 'native-base';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});

class MyOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isLoading: true,
      isModalVisible: false,
      selectedOrder: null,
    };
  }

  async componentDidMount() {
    const orders = JSON.parse(await AsyncStorage.getItem('orders'));
    this.setState({
      orders,
      isLoading: false,
    });
  }

  handleSelectOrder = (order) => {
    this.setState(
      {
        selectedOrder: order,
      },
      () => this.openModal(),
    );
  };

  openModal() {
    this.setState({ isModalVisible: true });
  }

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  renderModal = () => {
    const { selectedOrder } = this.state;
    if (selectedOrder) {
      console.log('selectedOrder', selectedOrder);
      return (
        <Modal
          visible={this.state.isModalVisible}
          animationType="slide"
          onRequestClose={() => this.closeModal()}
        >
          <Card>
            <CardItem header bordered>
              <Body>
                <Text
                  style={{
                    fontSize: 23,
                    color: '#3f51b5',
                  }}
                >
                  {selectedOrder.event.name}
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#3f51b5',
                  }}
                >
                  Ingressos
                </Text>
              </Left>
              <Right>
                <Text
                  style={{
                    color: '#3f51b5',
                  }}
                >
                  Quantidade
                </Text>
              </Right>
            </CardItem>
            {selectedOrder.tickets.map((ticket, index) => (
              <CardItem key={index}>
                <Left>
                  <Text>{ticket.name}</Text>
                </Left>
                <Right>
                  <Text>{ticket.amount}</Text>
                </Right>
              </CardItem>
            ))}
            <CardItem>
              <Left>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#3f51b5',
                  }}
                >
                  Informações do Evento
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Local</Text>
              </Left>
              <Right>
                <Text>{selectedOrder.event.address}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Data e Hora</Text>
              </Left>
              <Right>
                <Text>
                  {moment(selectedOrder.event.date).format('DD/MM/YYYY')} as{' '}
                  {moment(selectedOrder.event.date).format('HH:mm')}
                </Text>
              </Right>
            </CardItem>
          </Card>

          <Button block style={{ margin: 20 }} onPress={() => this.closeModal()}>
            <Text style={{ color: '#FFFFFF' }}>Fechar Modal</Text>
          </Button>
        </Modal>
      );
    }
  };

  render() {
    const { orders, isLoading } = this.state;
    if (isLoading) {
      return (
        <Container>
          <Content>
            <Body>
              <Spinner />
            </Body>
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Content style={{ padding: 10 }}>
          <Card>
            <CardItem header bordered>
              <Text
                style={{
                  fontSize: 23,
                  color: '#3f51b5',
                }}
              >
                Meus Pedidos
              </Text>
            </CardItem>
            {orders && (
              <CardItem bordered>
                <Left>
                  <Text>Evento</Text>
                </Left>
                <Right>
                  <Text>Data</Text>
                </Right>
              </CardItem>
            )}
            {orders &&
              orders.length >= 1 &&
              this.state.orders.map((order, index) => (
                <TouchableHighlight key={index} onPress={() => this.handleSelectOrder(order)}>
                  <CardItem bordered>
                    <Left>
                      <Text>{order.event.name}</Text>
                    </Left>
                    <Right>
                      <Text>
                        {moment(order.event.date).format('DD/MM/YYYY')}{' '}
                        <Icon name="right" size={20} color="#cccccc" />
                      </Text>
                    </Right>
                  </CardItem>
                </TouchableHighlight>
              ))}

            {(!orders || orders.length === 0) && (
              <Fragment>
                <CardItem bordered>
                  <Text>Ops! parece que você não fez nenhum pedido até agora!</Text>
                </CardItem>
                <Button
                  block
                  info
                  onPress={() => Actions.home()}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 30,
                  }}
                >
                  <Text>Procurar Eventos</Text>
                </Button>
              </Fragment>
            )}
          </Card>
          {this.state.selectedOrder && this.renderModal()}
        </Content>
      </Container>
    );
  }
}

export default MyOrders;
