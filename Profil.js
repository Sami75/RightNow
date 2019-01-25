import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';


export default class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],

    };
  };

  componentDidMount() {
    this.setState({
      user: {
        newCdp : this.props.location.state.val1[0].cdp.toString(),
        newTelephone : this.props.location.state.val1[0].telephone.toString(),
        nom : this.props.location.state.val1[0].nom,
        prenom : this.props.location.state.val1[0].prenom,
        mail : this.props.location.state.val1[0].mail,
        adresse : this.props.location.state.val1[0].adresse,
        mdp : this.props.location.state.val1[0].password,
        ville : this.props.location.state.val1[0].ville,
        sexe : this.props.location.state.val1[0].sexe,
      
    }
  });

}
  sauvegarder = () => {
    fetch(`https://08ca17fa.ngrok.io/api/users/${this.props.location.state.val1[0].id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: this.state.user.nom,
        prenom: this.state.user.prenom,
        mail: this.state.user.mail,
        password: this.state.user.mdp,
        adresse: this.state.user.adresse,
        cdp: this.state.user.cdp,
        ville: this.state.user.ville,
        sexe: this.state.user.sexe,
        telephone: this.state.user.tel,
      }),
    }).then((response) => {
      response.json();
      alert("Votre compte a été édité avec succès!");
      this.props.location.state.val1[0].cdp = this.state.user.cdp;
      this.props.location.state.val1[0].telephone = this.state.user.tel;
      this.props.location.state.val1[0].nom = this.state.user.nom;
      this.props.location.state.val1[0].prenom = this.state.user.prenom;
      this.props.location.state.val1[0].mail = this.state.user.mail;
      this.props.location.state.val1[0].adresse = this.state.user.adresse;
      this.props.location.state.val1[0].password = this.state.user.mdp;
      this.props.location.state.val1[0].ville = this.state.user.ville;
      this.props.location.state.val1[0].sexe = this.state.user.sexe;
      this.props.history.push("/accueil", {
        val1: this.props.location.state.val1,
        val2: this.props.location.state.val2,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  retour = () => {
    this.props.history.push("/accueil", {
      val1: this.props.location.state.val1,
      val2: this.props.location.state.val2,
    })
  }

  handlePrenom = (text) => {
    this.setState({
      user: {
        ...this.state.user,        
        prenom: text
      }
    });
  }

  handleNom = (text) => {
    this.setState({
      user: {
        ...this.state.user,      
        nom: text
      } 
    });
  }

  handleMail = (text) => {
    this.setState({
      user: {
        ...this.state.user,        
        mail: text
      }
    });
  }

  handleMdp = (text) => {
    this.setState({
      user: {
        ...this.state.user,      
        mdp: text
      } 
    });
  }

  handleAdresse = (text) => {
    this.setState({
      user: {
        ...this.state.user,      
        adresse: text
      } 
    });
  }
  handleCdp = (text) => {
    this.setState({
      user: {
        ...this.state.user,        
        cdp: text
      }
    });
  }

  handleVille = (text) => {
    this.setState({
      user: {
        ...this.state.user,      
        ville: text
      } 
    });
  }
  handleSexe = (text) => {
    this.setState({
      user: {
        ...this.state.user,        
        sexe: text
      }
    });
  }

  handleTel = (text) => {
    this.setState({
      user: {
        ...this.state.user,      
        tel: text
      } 
    });
  }

  render() {

    return (

      <ScrollView style={styles.scroll}>
      <View style={styles.container}> 
      <Text style={styles.welcome}> Vos informations personnelles</Text>
      <View style={styles.ligne}>
      <Text style={styles.instructions}>Nom :</Text>
      <TextInput style={styles.textinput} value={this.state.user.nom}  onChangeText={this.handleNom}/>
      </View>
      
      <View style={styles.ligne}>
      <Text style={styles.instructions}>Prénom :</Text>
      <TextInput style={styles.textinput} value={this.state.user.prenom} onChangeText={this.handlePrenom}/>
      </View>

      <View style={styles.ligne}>
      <Text style={styles.instructions}>Adresse Mail :</Text>
      <TextInput style={styles.textinput} value={this.state.user.mail} onChangeText={this.handleMail}/>
      </View>

      <View style={styles.ligne}>
      <Text style={styles.instructions} >Mot de passe :</Text>
      <TextInput style={styles.textinput} value={this.state.user.mdp} secureTextEntry={true} onChangeText={this.handleMdp}/>
      </View>

      <View style={styles.ligne}>
      <Text style={styles.instructions}>Adresse :</Text>
      <TextInput style={styles.textinput} value={this.state.user.adresse} onChangeText={this.handleAdresse}/>
      </View>

      <View style={styles.ligne}>
      <Text style={styles.instructions}>Code Postal :</Text>
      <TextInput style={styles.textinput} value={this.state.user.newCdp} onChangeText={this.handleCdp}/>
      </View>

      <View style={styles.ligne}>
      <Text style={styles.instructions}>Ville :</Text>
      <TextInput style={styles.textinput} value={this.state.user.ville} onChangeText={this.handleVille}/>
      </View>
      
      <View style={styles.ligne}>
      <Text style={styles.instructions}>Sexe :</Text>
      <TextInput style={styles.textinput} value={this.state.user.sexe} onChangeText={this.handleSexe}/>
      </View>

      <View style={styles.ligne}>
      <Text style={styles.instructions}>Téléphone :</Text>
      <TextInput style={styles.textinput} value={this.state.user.newTelephone} onChangeText={this.handleTel}/>
      </View>  

      <Button
      style={styles.but}
      onPress={this.sauvegarder}
      title= "Sauvegarder"
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
    height: 40,
    borderColor: 'green',
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 150,
    textAlign: 'center',
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
    marginBottom: 5,
    marginTop: 10,
    textDecorationLine: 'underline',
    height: 30,
    marginRight: 20,
  },
  saut: {
    marginTop : 5,
    marginBottom: 5,
  },
  but: {
    height: 150,
  },
  ligne: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 250,
    marginBottom: 10,
  },
  scroll: {
    width: '100%',
  }
});
