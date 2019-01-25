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

import Intro from './Intro.js';
import Login from './Login.js';
import Inscriptions from './Inscriptions.js';
import choixInscriptions from './ChoixInscriptions.js';
import InscriptionsPro from './InscriptionsPro';
import Accueil from './Accueil.js';
import FormulaireJob from './FormulaireJob.js';
import Details from './Details.js';
import Profil from './Profil.js';
import SuiviJob from './SuiviJob.js';


export default class App extends Component {

  render() {
      
    return (
      <NativeRouter>
        <View style={styles.container}> 
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/choixInscriptions" component={choixInscriptions} />
            <Route exact path="/inscriptions" component={Inscriptions} />
            <Route exact path="/inscriptionsPro" component={InscriptionsPro} />
            <Route exact path="/accueil" component={Accueil}/>
            <Route exact path="/formulaireJob" component={FormulaireJob}/>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/profil" component={Profil}/>          
            <Route exact path="/suiviJob" component={SuiviJob}/>          
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
    backgroundColor: '#f2f2f2',
    fontSize: 20,
  },
});
