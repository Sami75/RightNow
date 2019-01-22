import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, match} from 'react-native';
import MapView from 'react-native-maps';


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
      <View style={styles.container}>
        <Text>
          Welcome {this.props.location.state.val1[0].nom} {this.props.location.state.val1[0].prenom}
        </Text>
          <MapView
            style={styles.map}
            region={{
              latitude: 48.8833554,
              longitude: 2.3688094999999976,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
          >
          </MapView>
        <Button title="Deconnexion" onPress={this.gotolog} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
});