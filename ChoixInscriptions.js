import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class choixInscriptions extends Component {
    constructor(props) {
      super(props);
  }

Inscriptions = () => {
    this.props.history.push("/inscriptions");  
 }

Login = () => {
    this.props.history.push("/login");  
 }

 render() {
    return(
        <View style={styles.container} >
            <Button style={styles.boutoun} title="Client" onPress={this.Inscriptions} />

            <Button style={styles.boutoun} title="Retour" onPress={this.Login} />
        </View>
    );
}	
   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    boutoun: {
        backgroundColor: 'green',
    },
  });