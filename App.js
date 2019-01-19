/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native'

import Login from './Login.js';
import Inscriptions from './Inscriptions.js';
import choixInscriptions from './ChoixInscriptions.js';
import InscriptionsPro from './InscriptionsPro';


export default class App extends Component {

  render() {
      
    return (
      <NativeRouter>
        <View style={styles.container}> 
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/choixInscriptions" component={choixInscriptions} />
            <Route exact path="/inscriptions" component={Inscriptions} />
            <Route exact path="/inscriptionsPro" component={InscriptionsPro} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#1E7FCB',
    fontSize: 20,
  },
});
