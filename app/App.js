/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux'

import Navbar from './src/Components/Navbar'

import Initial from './src/Pages/Initial'
import Home from './src/Pages/Home'
import EventList from './src/Pages/EventList'

const App = () => {
  console.disableYellowBox = true;
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
      <Stack key="root"  navBar={Navbar} >
        <Scene key="initial" component={Initial} initial hideNavBar />
        <Scene key="home" component={Home} />
        <Scene key="eventList" component={EventList} />
      </Stack>
    </Router>
  );
};

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
    textAlign: 'center' // changing navbar title color
  }
})

export default App;
