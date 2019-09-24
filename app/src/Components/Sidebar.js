/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Left, Body, ListItem, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import FaIcon from 'react-native-vector-icons/FontAwesome';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    const user = await AsyncStorage.getItem('userData');
    this.setState({
      user,
    });
  }

  handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    this.setState({
      user: null,
    });
    Actions.home();
  };

  render() {
    const { user } = this.state;

    if (!user) {
      return (
        <Content>
          <ListItem icon onPress={() => Actions.login()}>
            <Left>
              <Button style={{ backgroundColor: '#FF9501' }}>
                <Icon active name="user" />
              </Button>
            </Left>
            <Body>
              <Text>Fazer login</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => Actions.register()}>
            <Left>
              <Button style={{ backgroundColor: '#FF9501' }}>
                <Icon active name="user-plus" />
              </Button>
            </Left>
            <Body>
              <Text>Cadastrar-me</Text>
            </Body>
          </ListItem>
        </Content>
      );
    }
    return (
      <Content>
        <ListItem>
          <Body>
            <Text>Seja bem-vindo(a)</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => Actions.login()}>
          <Left>
            <Button style={{ backgroundColor: '#FF9501' }}>
              <Icon active name="user" />
            </Button>
          </Left>
          <Body>
            <Text>Meus Pedidos</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => Actions.home()}>
          <Left>
            <Button style={{ backgroundColor: '#FF9501' }}>
              <Icon active name="user" />
            </Button>
          </Left>
          <Body>
            <Text>Eventos</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={() => this.handleLogout()}>
          <Left>
            <Button style={{ backgroundColor: '#FF9501' }}>
              <Icon active name="user" />
            </Button>
          </Left>
          <Body>
            <Text>Fazer logout</Text>
          </Body>
        </ListItem>
      </Content>
    );
  }
}

export default Sidebar;
