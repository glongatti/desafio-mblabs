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
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

class Login extends React.Component {


  render() {
    return (
      <Container>
        <Content>
          <Text style={{
            textAlign: 'center',
            fontSize: 30,
            marginTop: 20,
            marginBottom: 40
          }}>Utilize sua conta para fazer login!</Text>
          <Form>
            <Item stackedLabel underline>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>

          <Button block style={{ margin: 20 }}>
            <Text style={{ color: '#FFFFFF' }}>Fazer Login!</Text>
          </Button>
        </Content>
      </Container >
    );
  }

}

const styles = StyleSheet.create({


})

export default Login;

