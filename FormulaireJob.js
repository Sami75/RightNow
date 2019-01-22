import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';


export default class FormulaireJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
      test: "",
    };
}

render() {
    
   
    return (

        <View> 
            <Text> Page Formulaire de joooooob</Text>
        </View>
    );
  }
}
