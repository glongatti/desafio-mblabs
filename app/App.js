/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux'

import Home from './src/home'

const App = () => {
  console.disableYellowBox = true;
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="home" component={Home} />
      </Stack>
    </Router>
  );
};

export default App;
