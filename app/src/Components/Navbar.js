import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/AntDesign';
import Menu from 'react-native-vector-icons/Entypo';


export default class Navbar extends Component {
  render() {
    return (

      <Header>
        <Left>
          {Actions.currentScene !== 'home' ? (
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='left' size={25} color={"#ffffff"} />
            </Button>
          )
            :
            (
              <Button transparent onPress={() => Actions.pop()}>
                <Menu name='menu' size={25} color={"#ffffff"} />
              </Button>
            )
          }
        </Left>
        <Body>
          <Title>M.B. Events</Title>
        </Body>
        <Right />
      </Header>

    );
  }
}