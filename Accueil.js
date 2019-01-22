import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, match} from 'react-native';


export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
    };
}

gotolog = () => {
  this.props.history.push('/login');
}



render() {
    
   
    return (

      <View>
        <Text>
            {JSON.stringify(this.props.location.state)}
        </Text>

        <Button title="Deconnexion" onPress={this.gotolog} />
      </View>
    )
}
}