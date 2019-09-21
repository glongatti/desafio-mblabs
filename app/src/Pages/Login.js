/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            Utilize sua conta para fazer login!
          </Text>
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

          <Button
            block
            style={{ margin: 20 }}
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                buttonText: 'Okay',
              })
            }
          >
            <Text style={{ color: '#FFFFFF' }}>Fazer Login!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
