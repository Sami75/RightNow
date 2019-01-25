import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';


export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demande: [],
    };
  };

  componentDidMount() {
    console.log(this.props.location.state.val2);
    this.setState({
      demande: {
        intitule: this.props.location.state.val2.intitule,
        temps: this.props.location.state.val2.temps.toString(),
        prix: this.props.location.state.val2.prix.toString(),
      }
    });
    console.log(this.state.demande);
  }

  retour = () => {
    this.props.history.push("/accueil", {
      val1: this.props.location.state.val1,
      val2: this.props.location.state.val2,
    })
  }

  go = () => {
    fetch(`https://08ca17fa.ngrok.io/api/demande/${this.props.location.state.val2.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify({
        intitule: this.state.demande.intitule,
        temps: this.state.demande.temps,
        prix: this.state.demande.prix,
        latitude: 48.872213,
        longitude: 2.360714,
        user_id: this.props.location.state.val1[0].id,
      }),
    }).then((response) => {
      response.json();
      alert("Votre demande a bien été éditée sur RightNow !");
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
      demande: {
        ...this.state.demande,  
        intitule: text
      }
    });
  }

  handleTemps = (text) => {
    this.setState({
      demande: {
        ...this.state.demande,
        temps: text
      } 
    });
  }

  handlePrix = (text) => {
    this.setState({
      demande: {
        ...this.state.demande,  
        prix: text
      }
    });
  }

  accept = () => {
    fetch('https://08ca17fa.ngrok.io/api/validation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        demandeId: this.props.location.state.val2.id,
        jobeurId: this.props.location.state.val1[0].id,
        status: 0,
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

    this.retour();
  }

  delete = () => {
    fetch(`https://08ca17fa.ngrok.io/api/demande/${this.props.location.state.val2.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json();  
    })
    .then((result) => {
      console.log(result);
      alert("Votre demande à été supprimée, vous allez être redirigé vers l'accueil");
      this.props.history.push("/accueil", {
        val1: this.props.location.state.val1,
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderElement = () => {

    if(this.props.location.state.val1[0].id == this.props.location.state.val2.user_id) {
      return(
        <View style={styles.container}>
        <Text style={styles.welcome}>Editer/Supprimer votre Demande</Text>

        <Text style={styles.instructions}>Intitulé de la demande</Text>
        <TextInput style={styles.textinput} value={this.state.demande.intitule} onChangeText={this.handleIntitule}/>

        <Text style={styles.instructions}>Temps Estimé:</Text>
        <TextInput style={styles.textinput} keyboardType = 'numeric' value={this.state.demande.temps} onChangeText={this.handleTemps}/>

        <Text style={styles.instructions} >Prix :</Text>
        <TextInput style={styles.textinput} keyboardType = 'numeric' value={this.state.demande.prix} onChangeText={this.handlePrix}/>

        <Button
        style={styles.but}
        onPress={this.go}
        title= "Modifier la demande"
        color="#C01A2E"
        />
                <Text style={styles.saut}></Text>

        <Button
        style={styles.but}
        onPress={this.delete}
        title= "Supprimer la demande"
        color="#C01A2E"
        />
                        <Text style={styles.saut}></Text>

        <Button
        style={styles.but}
        onPress={this.retour}
        title= "Retour"
        color="#C01A2E"
        />
        </View>
        );
    } else {
      return(
        <View style={styles.container}>

        <Text style={styles.welcome}>{this.props.location.state.val2.intitule}</Text>
        <Text style={styles.welcome}>{this.props.location.state.val2.temps} minutes</Text>
        <Text style={styles.welcome}>{this.props.location.state.val2.prix} €</Text>
        <Button
        style={styles.but}
        onPress={this.accept}
        title= "Accepter"
        color="#C01A2E"
        />
                        <Text style={styles.saut}></Text>

        <Button
        style={styles.but}
        onPress={this.retour}
        title= "Retour"
        color="#C01A2E"
        />
        </View>

        );
    }


  }

  render() {

    return (

    <ScrollView>
      <View style={styles.container}> 
      {this.renderElement()}
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
