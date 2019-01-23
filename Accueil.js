import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, match, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';


export default class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
      listeDemande: [],
      affld: "",
      bool: "",
    };
}

lister = () => {
  fetch('https://c0e31050.ngrok.io/api/demande', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  })
  .then((response) => {
    return response.json();
  })
  .then((result) => {
      console.log(result)
      this.setState({
          listeDemande: result
      });
  })
  .catch((error) => {
      console.error(error);
  });

   this.state.bool= "afficher"

  console.log(this.state.bool) 
}


gotolog = () => {
  this.props.history.push('/login');
}

gotoformjob = () => {
  this.props.history.push("/formulaireJob", {
    val1: this.props.location.state.val1,
  })
}

affListeDemande = () => {
  console.log("tiptop");
  console.log(this.state.listeDemande);
  {this.state.listeDemande.forEach((element,i) => {
    element.forEach((e,j) => {
      this.state.affld = this.state.affld + "Intitule: " + e.intitule + " Prix: " + e.prix + " € Temps: " + e.temps + " min \n"
    }
    )
  })} 


}


render() {
    
    return (

      <View style={styles.container}>
 
        <Text style={styles.instructions}>
          Bienvenue {this.props.location.state.val1[0].prenom} {this.props.location.state.val1[0].nom}
        </Text>

        {
            this.state.bool == "afficher"?
            this.affListeDemande():
            <Text></Text>
        }

        <Text style={styles.laliste}>
          {this.state.affld}
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
        <MapView.Marker
          coordinate={{latitude: 48.886070,
          longitude: 2.371540}}
          title={"title"}
          description={"description"}
          onLongPress={() => alert("Hehehe")}
         />
        </MapView>

        <Button title="Afficher les Demande" onPress={this.lister} />

        <Text style={styles.saut}></Text>

        <Button title="Poster une Demande" onPress={this.gotoformjob} />

        <Text style={styles.saut}></Text>

        <Button title="Deconnexion" onPress={this.gotolog} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  saut: {
    marginTop : 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  laliste: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
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