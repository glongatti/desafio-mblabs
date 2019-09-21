/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { StyleSheet } from 'react-native';
import { Root } from 'native-base';

import { Router, Stack, Scene } from 'react-native-router-flux';

import Navbar from './src/Components/Navbar';

import Initial from './src/Pages/Initial';
import Home from './src/Pages/Home';
import EventsList from './src/Pages/EventsList';
import EventInfo from './src/Pages/EventInfo';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red', // changing navbar color
  },
  navTitle: {
    color: 'white',
    textAlign: 'center', // changing navbar title color
  },
});

const App = () => {
  // eslint-disable-next-line no-console
  console.disableYellowBox = true;
  return (
    <Root>
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Stack key="root" navBar={Navbar}>
          <Scene key="initial" initial component={Initial} hideNavBar />
          <Scene key="login" component={Login} />
          <Scene key="register" component={Register} />
          <Scene key="home" component={Home} />
          <Scene key="eventsList" component={EventsList} />
          <Scene key="eventInfo" component={EventInfo} />
        </Stack>
      </Router>
    </Root>
  );
};

export default App;
