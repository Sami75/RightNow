import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';


export default class InscriptionsPro extends Component {
  constructor(props) {
    super(props);
	};

	render() {
		return(
			<View style={styles.container}>
                <ScrollView>
					<Text style={styles.welcome}>Page d'inscription Professionnel</Text>

					<Text style={styles.instructions}>Identifiant :</Text>

					<TextInput style={styles.textinput}  onChangeText={this.handleId}/>

					<Text style={styles.instructions}>Mot de Passe :</Text>

					<TextInput style={styles.textinput} secureTextEntry={true} onChangeText={this.handleMdp}/>

					<Text style={styles.instructions}>Identifiant :</Text>

					<TextInput style={styles.textinput} onChangeText={this.handleId}/>

					<Text style={styles.instructions}>Mot de Passe :</Text>

					<TextInput style={styles.textinput} secureTextEntry={true} onChangeText={this.handleMdp}/>

					<Text style={styles.instructions}>Identifiant :</Text>

					<TextInput style={styles.textinput} onChangeText={this.handleId}/>

					<Text style={styles.instructions}>Mot de Passe :</Text>

					<TextInput style={styles.textinput} secureTextEntry={true} onChangeText={this.handleMdp}/>
					
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