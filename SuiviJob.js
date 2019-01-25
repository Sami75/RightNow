import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';


export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  };

  componentDidMount() {
    console.log(this.props.location.state.val3);
  }


  retour = () => {
    this.props.history.push("/accueil", {
      val1: this.props.location.state.val1,
      val2: this.props.location.state.val2,
    })
  }

  accept = () => {
    fetch(`https://08ca17fa.ngrok.io/api/demande/${this.props.location.state.val2.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intitule: this.props.location.state.val2.intitule,
        temps: this.props.location.state.val2.temps,
        prix: this.props.location.state.val2.prix,
        latitude: this.props.location.state.val2.latitude,
        longitude: this.props.location.state.val2.longitude,
        user_id: this.props.location.state.val2.user_id,
        valide: 0,
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log("ok");
    console.log(this.state.user);
  }

    refuser = () => {
    fetch(`https://08ca17fa.ngrok.io/api/demande/${this.props.location.state.val2.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intitule: this.props.location.state.val2.intitule,
        temps: this.props.location.state.val2.temps,
        prix: this.props.location.state.val2.prix,
        latitude: this.props.location.state.val2.latitude,
        longitude: this.props.location.state.val2.longitude,
        user_id: this.props.location.state.val2.user_id,
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log("ok");
    console.log(this.state.user);
  }

  render() {

    return (

    <ScrollView>
      <View style={styles.container}> 
        <Text style={styles.welcome}>Suivi du Job - Accepter ou refuser le jobbeur</Text>
        <Text>{this.props.location.state.val3[0].nom} {this.props.location.state.val3[0].prenom}, {this.props.location.state.val3[0].noteJobeur}/5</Text>
        <Text>0{this.props.location.state.val3[0].telephone}</Text>
        <Button color="#C01A2E" onPress={this.accept} title= "Accepter" />
        <Button color="#C01A2E" onPress={this.refuser} title= "Refuser" />
        <Button color="#C01A2E" onPress={this.retour} title= "Retour" />
      </View>
    </ScrollView>
      );
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
  textinput: {
    marginBottom: 25,
    height: 40,
    borderColor: 'green',
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 150,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 50,
    fontFamily: 'System',
    fontStyle: 'italic',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  saut: {
    marginTop : 5,
    marginBottom: 5,
  },
  but: {
    height: 150,
  }
});
