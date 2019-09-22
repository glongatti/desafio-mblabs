/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { StyleSheet, Dimensions } from 'react-native';
import { Root } from 'native-base';

import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';

import Navbar from './src/Components/Navbar';

import Initial from './src/Pages/Initial';
import Home from './src/Pages/Home';
import EventsList from './src/Pages/EventsList';
import EventInfo from './src/Pages/EventInfo';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Sidebar from './src/Components/Sidebar';

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

const { width } = Dimensions.get('window');

const App = () => {
  // eslint-disable-next-line no-console
  console.disableYellowBox = true;
  return (
    <Root>
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Stack key="root" navBar={Navbar}>
          <Scene key="initial" component={Initial} hideNavBar />
          <Scene key="login" component={Login} />
          <Scene key="register" component={Register} />
          <Drawer
            key="drawer"
            contentComponent={Sidebar}
            drawerWidth={width * 0.7}
            drawer
            hideNavBar
          >
            <Scene key="home" initial component={Home} />
          </Drawer>
          <Scene key="eventsList" component={EventsList} />
          <Scene key="eventInfo" component={EventInfo} />
        </Stack>
      </Router>
    </Root>
  );
};

export default App;
