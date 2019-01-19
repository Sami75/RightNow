import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';
import axios from 'axios';

export default class Inscriptions extends Component {
  constructor(props) {
		super(props);
		this.state = {
      user: [],
    };
	};

	test = () => {
		alert("L'identifiant est " + this.state.user.id + " et le mot de passe est " + this.state.user.mdp)
	}
	
	handlePrenom = (text) => {
		this.setState({
			user: {
				...this.state.user,
				prenom: text
			},
		});
	}
	
	handleNom = (text) => {
		this.setState({ 
			user: {
				...this.state.user,
				nom: text
			},
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
	handleRue = (text) => {
		this.setState({
			user: {
				...this.state.user,
				rue: text
			},
		});
	}
	
	handleAdresse = (text) => {
		this.setState({ 
			user: {
				...this.state.user,
				adresse: text
			},
		});
	}
	handleCdp = (text) => {
		this.setState({
			user: {
				...this.state.user,
				cdp: text
			},
		});
	}
	
	handleVille = (text) => {
		this.setState({ 
			user: {
				...this.state.user,
				ville: text
			},
		});
	}
	handleSexe = (text) => {
		this.setState({
			user: {
				...this.state.user,
				sexe: text
			},
		});
	}
	
	handleTel = (text) => {
		this.setState({ 
			user: {
				...this.state.user,
				tel: text
			},
		});
	}

	go = () => {		

		axios.post('http://127.0.0.1:8000/api/user', {user : this.state.user}).then(response => {console.log(response)}) 

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

					<Text style={styles.instructions}>Numero de Rue :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleRue}/>

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


					<Button title="Inscription" onPress={this.go} />
					

					<Button title="Retour" onPress={() => this.props.history.push("/choixInscriptions")} />
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
		width: 360,
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