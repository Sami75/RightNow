import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class choixInscriptions extends Component {
    constructor(props) {
      super(props);
  }

Inscriptions = () => {
    this.props.history.push("/inscriptions");  
 }

InscriptionsPro = () => {
    this.props.history.push("/inscriptionsPro");  
 }

 render() {
    return(
        <View style={styles.container} >
            <Button style={styles.boutoun} title="Client" onPress={this.Inscriptions} />

            <Button style={styles.boutoun} title="Professionnel" onPress={this.InscriptionsPro} />
        </View>
    );
}	
   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E7FCB',
    },
    boutoun: {
        backgroundColor: 'green',
    },
  });