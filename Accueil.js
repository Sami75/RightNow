import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, match} from 'react-native';


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
  fetch('https://396ef2a9.ngrok.io/api/demande', {
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

        <Button title="Afficher les Demande" onPress={this.lister} />

        <Text style={styles.saut}></Text>

        <Button title="Poster une Demande" onPress={this.gotoformjob} />

        <Text style={styles.saut}></Text>

        <Button title="Deconnexion" style={styles.sal} onPress={this.gotolog} />

      </View>
    );
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
  }
});