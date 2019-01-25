import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
      test: "",
      userResponse: [],
    };
}


test = () => {

  fetch('https://08ca17fa.ngrok.io/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          mail: this.state.user.mail,
          password: this.state.user.mdp
      }),
      })
      .then((response) => {
        return response.json();  
      })
      .then((result) => {
        if(result == "Wrong password or mail"){
          this.setState({ 
            reponse: result,       
          });
        }
        else{
          this.setState({ 
            reponse: "ok",
            userResponse: result,
          });
        }
      })
      .catch((error) => {
          console.error(error);
      });

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
        val1: this.state.userResponse,
      })
    }
}
  render() {
    
   
    return (

      <ScrollView style={styles.scroll}>
       <View style={styles.container}> 

      

          <Image style={styles.imgg}
            source={require('./rouj3.png')}
          />
          
        {
          this.state.reponse == "Wrong password or mail" ?
          <Text style={styles.erreur}> Le mot de passe ou l'adresse mail est incorrecte !</Text> :
          this.logg()
        }

        <Text style={styles.instructions}>Adresse mail :</Text>
        
        <TextInput style={styles.textinput} onChangeText={this.handleMail}/>
        
        <Text style={styles.instructions}>Mot de Passe :</Text>
        
        <TextInput style={styles.textinput} secureTextEntry={true}  onChangeText={this.handleMdp}/>

      

          <Button style={styles.buttton}
          onPress={this.test}
          loading
          title= "Connexion"
          color="#C01A2E"
          />

          <Text style={styles.koz} onPress={this.inscriptions}>Pas de compte ? Cliquez ici pour vous Inscrire ! ! !</Text>

        

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
  buttton: {
    marginTop: 40,
    borderRadius: 20,
  },
  imgg: {
    marginBottom: 40,
    width: 250,
    height : 150,
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
  scroll: {
    width: '100%',
  }
});