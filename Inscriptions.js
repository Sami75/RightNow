import React, {Component}from "react";
import { View, Text, Button } from "react-native";

export default class Inscriptions extends Component {
  constructor(props) {
    super(props);
	};

	render() {
		return(
			<View>
				<Text>This is my inscription page</Text>
				<Button title="Login" onPress={() => this.props.history.push("/")} />
			</View>
		);
	}	
}