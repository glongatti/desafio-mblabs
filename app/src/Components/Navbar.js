import React from 'react';
import { Header, Title, Button, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/AntDesign';
import Menu from 'react-native-vector-icons/Entypo';

const Navbar = () => (
  <Header>
    <Left>
      {Actions.currentScene !== '_home' ? (
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="left" size={25} color="#ffffff" />
        </Button>
      ) : (
        <Button transparent onPress={() => Actions.drawerOpen()}>
          <Menu name="menu" size={25} color="#ffffff" />
        </Button>
      )}
    </Left>
    <Body>
      <Title>MB Events</Title>
    </Body>
    <Right />
  </Header>
);

export default Navbar;
