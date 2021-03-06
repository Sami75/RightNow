import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';
import axios from 'axios';


export default class Inscriptions extends Component {
  constructor(props) {
		super(props);
		this.state = {
		nom: "",
		prenom: "",
		mail: "",
		mdp: "",
		adresse: "",
		cdp: "",
		ville: "",
		sexe: "",
		telephone: "",
    };
	};

	test = () => {
		alert("L'identifiant est " + this.state.user.id + " et le mot de passe est " + this.state.user.mdp)
	}
	
	handlePrenom = (text) => {
		this.setState({
				prenom: text
		});
	}
	
	handleNom = (text) => {
		this.setState({ 
				nom: text
		});
	}

	handleMail = (text) => {
		this.setState({
				mail: text
		});
	}
	
	handleMdp = (text) => {
		this.setState({ 
				mdp: text
		});
	}
	
	handleAdresse = (text) => {
		this.setState({ 
				adresse: text
		});
	}
	handleCdp = (text) => {
		this.setState({
				cdp: text
		});
	}
	
	handleVille = (text) => {
		this.setState({ 
				ville: text
		});
	}
	handleSexe = (text) => {
		this.setState({
				sexe: text
		});
	}
	
	handleTel = (text) => {
		this.setState({ 
				tel: text
		});
	}

	go = () => {

	  fetch('https://08ca17fa.ngrok.io/api/users', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			  	nom: this.state.nom,
			  	prenom: this.state.prenom,
			  	mail: this.state.mail,
			  	password: this.state.mdp,
			  	adresse: this.state.adresse,
			  	cdp: this.state.cdp,
			  	ville: this.state.ville,
			  	sexe: this.state.sexe,
			  	telephone: this.state.tel,
		  }),
		}).then((response) => {
			response.json();
			alert("Votre compte a été créé avec succes !");
			this.props.history.push("/login");
			})
		    .catch((error) => {
		      console.error(error);
		    });
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.welcome}>Page d'inscription Client</Text>

					<Text style={styles.instructions}>Nom :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleNom}/>

					<Text style={styles.instructions}>Prénom :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handlePrenom}/>

					<Text style={styles.instructions}>Adresse Mail :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleMail}/>

					<Text style={styles.instructions} >Mot de passe :</Text>

					<TextInput style={styles.textinput} secureTextEntry={true} onChangeText={this.handleMdp}/>

					<Text style={styles.instructions}>Adresse :</Text>

					<TextInput style={styles.textinput}   onChangeText={this.handleAdresse}/>

					<Text style={styles.instructions}>Code Postal :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleCdp}/>

					<Text style={styles.instructions}>Ville :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleVille}/>

					<Text style={styles.instructions}>Sexe :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleSexe}/>

					<Text style={styles.instructions}>Téléphone :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleTel}/>


					<Button title="Inscription" color="#C01A2E" onPress={this.go} />
					

					<Button title="Retour" color="#C01A2E" onPress={() => this.props.history.push("/login")} />
					</ScrollView>
			</View>
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
  },
  textinput: {
    marginBottom: 25,
    height: 40,
    borderColor: 'green',
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: 'white',
	width: '100%',
	alignItems: 'center',
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