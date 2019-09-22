/* eslint-disable no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import { Left, Body, ListItem, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Sidebar = () => (
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

export default Sidebar;
