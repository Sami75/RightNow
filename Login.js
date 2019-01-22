import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
      test: "",
    };
}


test = () => {
      fetch('https://caf60801.ngrok.io/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          mail: this.state.user.mail,
          password: this.state.user.mdp
      }),
    }).then((response) => {
      
      response.json();
    
      if(response._bodyText == '"Wrong password or mail"'){
        this.setState({ 
          reponse: response._bodyText,       
        });
      }
      else{
        this.setState({ 
          reponse: 'ok',       
        });
      }
      
      console.log(response);
      })
      
        .catch((error) => {
          console.error(error);
        });

      console.log(this.state.reponse)
}

handleMail = (text) => {
  this.setState({
    user: {
      ...this.state.user,
      mail: text
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

logg = () => {
  
  if(this.state.reponse == 'ok'){

      this.props.history.push("/accueil", {
        val1: this.state.user,
        val2: 5
      })
    }
}
  render() {
    
   
    return (

       <View style={styles.container}> 

        <Image style={styles.imgg}
          source={require('./rn2.png')}
        />
        
        {
          this.state.reponse == '"Wrong password or mail"'?
          <Text style={styles.erreur}> Le mot de passe ou l'adresse mail est incorrecte :</Text>:
          this.logg()
        }

        <Text style={styles.instructions}>Adressee mail :</Text>
        
        <TextInput style={styles.textinput} onChangeText={this.handleMail}/>
        
        <Text style={styles.instructions}>Mot de Passe :</Text>
        
        <TextInput style={styles.textinput} secureTextEntry={true}  onChangeText={this.handleMdp}/>

        <Button style={styles.buttton}
        onPress={this.test}
        loading
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
    borderRadius: 20,
  },
  imgg: {
    marginBottom: 40,
  },
  erreur:{
    color: 'red',
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
    fontFamily: 'System',
    fontStyle: 'italic',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});