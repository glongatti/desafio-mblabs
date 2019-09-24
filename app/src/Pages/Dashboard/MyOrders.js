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
import { Text, AsyncStorage, TouchableHighlight } from 'react-native';
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

class MyOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const orders = JSON.parse(await AsyncStorage.getItem('orders'));
    this.setState({
      orders,
      isLoading: false,
    });
  }

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
                <TouchableHighlight key={index} onPress={() => console.log('clicou')}>
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
        </Content>
      </Container>
    );
  }
}

export default MyOrders;
