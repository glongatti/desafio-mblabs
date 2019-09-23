/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, AsyncStorage } from 'react-native';
import {
  Content,
  Container,
  Body,
  Card,
  CardItem,
  Left,
  Right,
  Switch,
  Input,
  Form,
  Item,
  Label,
  Toast,
  Spinner,
  Button,
} from 'native-base';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text';

const styles = StyleSheet.create({});

class OrderResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhysicalTicket: false,
      isCepLoading: false,
      cep: '',
      street: '',
      neighborhood: '',
      number: '',
      complement: '',
      city: '',
      state: '',
      cardImage: 'front_card.png',
      cardOwnerName: '',
      cardNumber: '',
      isOrderFinished: false,
    };
  }

  async handleBuyTickets() {
    // const orders = await AsyncStorage.getItem('orders');
    // let newOrders;
    // // if(orders){
    // //   newOrders = JSON.parse(orders)
    // // }
    // if(!orders){
    //   newOrders = {

    //     this.state.tickets
    //   }
    //   await AsyncStorage.setItem()
    // }
    this.setState({
      isOrderFinished: true,
    });
  }

  handleChangeFieldData(field, value) {
    this.setState({
      [field]: value,
    });
  }

  handleLoadAddress = (cep) => {
    if (cep.replace(/\D/g, '').length === 8) {
      this.setState({
        isCepLoading: true,
      });
      const self = this;
      axios
        .get(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`)
        .then((result) => {
          self.setState({
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf,
            isCepLoading: false,
          });
        })
        .catch(() =>
          Toast.show({
            text: 'CEP Inválido!',
            type: 'warning',
          }));
    }
  };

  sumTickets = () => {
    let totalCost = 0;
    this.props.tickets.forEach((ticket) => {
      totalCost += ticket.cost;
    });
    return totalCost;
  };

  renderPaymentArea = () => (
    <View>
      <Card>
        <CardItem header bordered>
          <Body>
            <Text
              style={{
                fontSize: 18,
                color: '#3f51b5',
              }}
            >
              Informações de Pagamento
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            {this.state.cardOwnerName.length > 2 && this.state.cardNumber.length > 2 ? (
              <Image
                style={{
                  height: 130,
                  width: 200,
                }}
                resizeMode="contain"
                source={require('../../assets/back_card.png')}
              />
            ) : (
              <Image
                style={{
                  height: 130,
                  width: 200,
                }}
                resizeMode="contain"
                source={require('../../assets/front_card.png')}
              />
            )}
          </Body>
        </CardItem>
      </Card>
      <Form>
        <Item>
          <Input
            placeholder="Titular"
            value={this.state.cardOwnerName}
            onChangeText={text => this.handleChangeFieldData('cardOwnerName', text)}
          />
        </Item>
        <Item>
          <Input
            placeholder="Número do cartão"
            value={this.state.cardNumber}
            onChangeText={text => this.handleChangeFieldData('cardNumber', text)}
          />
        </Item>
        <Item>
          <Left>
            <Input placeholder="Data de expiração" />
          </Left>
          <Right>
            <Input placeholder="CCV" />
          </Right>
        </Item>
        <Item>
          <Button
            block
            info
            onPress={() => this.handleBuyTickets()}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 30,
            }}
          >
            <Text>Finalizar compra!</Text>
          </Button>
        </Item>
      </Form>
    </View>
  );
  renderPhysicalTicker = () => (
    <View>
      <Card>
        <CardItem header bordered>
          <Body>
            <Text
              style={{
                fontSize: 18,
                color: '#3f51b5',
              }}
            >
              Envio de ingresso físico
            </Text>
            <Text>
              Por favor preencha os dados abaixo para que os ingressos físicos sejam enviados
            </Text>
          </Body>
        </CardItem>
        <Form>
          <Item>
            {!this.state.isCepLoading ? <Label>CEP</Label> : <Spinner />}

            <TextInputMask
              type="zip-code"
              value={this.state.cep}
              onChangeText={(text) => {
                this.handleChangeFieldData('cep', text);
                this.handleLoadAddress(text);
              }}
            />
          </Item>
          <Item>
            <Label>Rua</Label>
            <Input
              value={this.state.street}
              onChangeText={text => this.handleChangeFieldData('street', text)}
            />
          </Item>
          <Item>
            <Label>Bairro</Label>
            <Input
              value={this.state.neighborhood}
              onChangeText={text => this.handleChangeFieldData('neighborhood', text)}
            />
          </Item>
          <Item>
            <Label>Número</Label>
            <Input
              value={this.state.number}
              onChangeText={text => this.handleChangeFieldData('number', text)}
            />
          </Item>
          <Item>
            <Label>Complemento</Label>
            <Input
              value={this.state.complement}
              onChangeText={text => this.handleChangeFieldData('complement', text)}
            />
          </Item>
          <Item>
            <Label>Cidade</Label>
            <Input
              value={this.state.city}
              onChangeText={text => this.handleChangeFieldData('city', text)}
            />
          </Item>
          <Item>
            <Label>Estado</Label>
            <Input
              value={this.state.state}
              onChangeText={text => this.handleChangeFieldData('state', text)}
            />
          </Item>
        </Form>
      </Card>
    </View>
  );
  renderOrderResume = () => (
    <Card>
      <CardItem header bordered>
        <Body>
          <Text
            style={{
              fontSize: 23,
              color: '#3f51b5',
            }}
          >
            Resumo do pedido
          </Text>
        </Body>
      </CardItem>
      <CardItem header bordered>
        <Left>
          <Text>Item</Text>
        </Left>
        <Body>
          <Text>Quantidade</Text>
        </Body>
        <Right>
          <Text>Valor</Text>
        </Right>
      </CardItem>
      {this.props.tickets &&
        this.props.tickets.map(ticket => (
          <CardItem key={ticket.id}>
            <Left>
              <Text>{ticket.name}</Text>
            </Left>
            <Body>
              <Text>{ticket.amount}</Text>
            </Body>
            <Right>
              <Text>{ticket.cost}</Text>
            </Right>
          </CardItem>
        ))}
      <CardItem header bordered>
        <Body>
          <Text
            style={{
              fontSize: 18,
              color: '#3f51b5',
            }}
          >
            Valor Total:
          </Text>
        </Body>
        <Right>
          <Text>R${this.sumTickets()}</Text>
        </Right>
      </CardItem>
      <CardItem>
        <Left>
          <Text>Enviar ingresso físico?</Text>
        </Left>
        <Right>
          <Switch
            onValueChange={() => this.setState({ isPhysicalTicket: !this.state.isPhysicalTicket })}
            value={this.state.isPhysicalTicket}
          />
        </Right>
      </CardItem>
    </Card>
  );

  render() {
    if (this.state.isOrderFinished) {
      return (
        <Container>
          <Content>
            <Text
              style={{
                fontSize: 30,
                paddingBottom: 5,
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 30,
              }}
            >
              Parabéns! Seu pedido foi gerado com sucesso!
            </Text>
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Content>
          {this.renderOrderResume()}

          {this.state.isPhysicalTicket && this.renderPhysicalTicker()}
          {this.renderPaymentArea()}
        </Content>
      </Container>
    );
  }
}

export default OrderResume;
