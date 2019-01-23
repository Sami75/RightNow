import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';


export default class FormulaireJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
		intitule: "",
		temps: "",
        prix: "",
    };
};

go = () => {
    fetch('https://08d034a1.ngrok.io/api/demande', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intitule: this.state.intitule,
        temps: this.state.temps,
        prix: this.state.prix,
        latitude: 54.5454,
        longitude: 42.56,
        userid: this.props.location.state.val1[0].id,
      }),
    }).then((response) => {
        response.json();
        alert("Votre demande a bien été postée sur RightNow !");
        this.props.history.push("/accueil", {
            val1: this.props.location.state.val1,
          })
        })
        .catch((error) => {
          console.error(error);
        });
}



handleIntitule = (text) => {
    this.setState({
        intitule: text
    });
}

handleTemps = (text) => {
    this.setState({ 
        temps: text
    });
}

handlePrix = (text) => {
    this.setState({
        prix: text
    });
}

retour = () => {
    this.props.history.push("/accueil", {
        val1: this.props.location.state.val1,
      })
}

render() {
   
    return (

        <View style={styles.container}> 
                
                <Text style={styles.welcome}>Formulaire de demande</Text>

                <Text style={styles.instructions}>Intutilé de la demande</Text>
                <TextInput style={styles.textinput}  onChangeText={this.handleIntitule}/>

                <Text style={styles.instructions}>Temps Estimé:</Text>
                <TextInput style={styles.textinput} onChangeText={this.handleTemps}/>

                <Text style={styles.instructions} >Prix :</Text>
                <TextInput style={styles.textinput}  onChangeText={this.handlePrix}/>

                <Button
                    style={styles.but}
                    onPress={this.go}
                    title= "Envoyer la demande"
                />
                
                <Text style={styles.saut}></Text>

                <Button
                    style={styles.but}
                    onPress={this.retour}
                    title= "Retour"
                />
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
    textinput: {
      marginBottom: 25,
      height: 40,
      borderColor: 'green',
      borderRadius: 7,
      borderWidth: 1,
      backgroundColor: 'white',
      width: 150,
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
