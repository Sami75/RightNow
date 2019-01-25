import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, Animated, TouchableOpacity} from 'react-native';


export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      good: '',
    };
}

_fadeAnimation = () => {
  Animated.timing(this.state.fadeValue,{
    toValue: 1,
    duration: 4000,
  }).start(() => { this.props.history.push("/login")});

    
}


go = () => {
  this.props.history.push("/login");
}



render() {
    
   
    return (

        <View>
          <TouchableOpacity onPress={this.go}>
                <Animated.Image style={[styles.animationView, {opacity: this.state.fadeValue}]} source={require('./rouj3.png')}>
                </Animated.Image>
          </TouchableOpacity>
        {
          this._fadeAnimation()
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationView: {
    width: 300,
    height: 300,
  },

});