import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';


export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
    };
}

gotolog = () => {
  console.log(this.props.history.goBack);
}

render() {
    
   
    return (

      <View>
        <Text>
          BIENVENUE SUR LINTRO
        </Text>

        <Button title="Suite" onPress={() => {this.props.history.push("/login")}}/>
      </View>
    )
}
}