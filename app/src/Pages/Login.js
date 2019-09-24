/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeFieldData(field, value) {
    this.setState({
      [field]: value,
    });
  }

  async handleSubmitForm() {
    const { email, password } = this.state;
    if (!email.trim() || !password.trim()) {
      Toast.show({
        text: 'Preencha todos os campos!',
        type: 'warning',
      });
    } else if (email === 'exemplo@teste.com' && password === '123456') {
      await AsyncStorage.setItem('userData', JSON.stringify({ email, password }));
      Actions.userOrders();
    } else {
      Toast.show({
        text: 'E-mail ou senha incorreto!',
        type: 'warning',
      });
    }
  }

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
              <Label>E-mail</Label>
              <Input
                value={this.state.email}
                onChangeText={text => this.handleChangeFieldData('email', text)}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Senha</Label>
              <Input
                value={this.state.password}
                onChangeText={text => this.handleChangeFieldData('password', text)}
              />
            </Item>
          </Form>

          <Button block style={{ margin: 20 }} onPress={() => this.handleSubmitForm()}>
            <Text style={{ color: '#FFFFFF' }}>Fazer Login!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
