import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
}

test = () => {
  alert("L'identifiant est " + this.state.user.id + " et le mot de passe est " + this.state.user.mdp)
}

handleId = (text) => {
  this.setState({
    user: {
      ...this.state.user,
      id: text
    },
  });
}

handleMdp = (text) => {
  this.setState({ 
    user: {
      ...this.state.user,
      mdp: text
    },
  });
}

inscriptions = () => {
   this.props.history.push("/inscriptions");  
}

choixInscriptions = () => {
  this.props.history.push("/choixInscriptions");  
}
  render() {
    
   
    return (

       <View style={styles.container}> 

        <Text style={styles.welcome}>Right Now !</Text>

        <Text style={styles.instructions}>Adresse mail :</Text>
        
        <TextInput style={styles.textinput}  onChangeText={this.handleId}/>

        <Text style={styles.instructions}>Mot de Passe :</Text>

        <TextInput style={styles.textinput} secureTextEntry={true}  onChangeText={this.handleMdp}/>

        <Button style={styles.buttton}
        onPress={this.test}
        title= "Connexion"
        />

        <Text style={styles.koz} onPress={this.choixInscriptions}>Pas de compte ? Cliquez ici pour vous Inscrire ! ! !</Text>
        
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
  buttton: {
    marginTop: 40,
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
  koz: {
    marginTop: 20,
    fontStyle: 'italic',
    color: 'red',
    
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 70,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
});