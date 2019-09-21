/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Form, Item, Input, Label, Button, DatePicker } from 'native-base';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  ren

  render() {
    return (
      <Container>
        <Content>
          <Text style={{
            textAlign: 'center',
            fontSize: 30,
            marginTop: 20,
            marginBottom: 40
          }}>Cadastro de usuário</Text>
          <Form>
            <Item stackedLabel underline>
              <Label>Nome</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Senha</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Celular</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>CPF</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Data de Nascimento</Label>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"br"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Selecione a data"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>

          </Form>

          <Button block style={{ margin: 20 }}>
            <Text style={{ color: '#FFFFFF' }}>Cadastrar</Text>
          </Button>
        </Content>
      </Container >
    );
  }

}

const styles = StyleSheet.create({


})

export default Register;

