/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: '#FFFFFF',
    // marginTop: 20,
    marginBottom: 250,
  },
  button: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    width: 300,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
  or: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
  },
  categoriesText: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

const Initial = () => (
  <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
    <View>
      <Text style={styles.title}>M.B. Events</Text>
    </View>
    <View>
      <TouchableHighlight style={styles.button} onPress={() => Actions.home()}>
        <Text style={styles.buttonText}> Buscar evento</Text>
      </TouchableHighlight>
    </View>

    <View>
      <Text style={styles.or}>Ou</Text>
    </View>
    <View>
      <TouchableHighlight style={styles.button} onPress={() => Actions.register()}>
        <Text style={styles.buttonText}> Criar uma conta</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => Actions.login()}>
        <Text style={{ color: '#FFFFFF', textAlign: 'center', marginTop: 10 }}>
          Já é cadastrado? clique aqui
        </Text>
      </TouchableHighlight>
    </View>
  </LinearGradient>
);

export default Initial;
