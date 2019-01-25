import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Image, match, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

export default class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      reponse:"",
      listeDemande: [],
      affld: "",
      bool: "",
      latitude: 48.902375,
      longitude: 2.360714,
      colormark: "",
      descri: "",
      openMenu: false,
    };

    this.goToDetails = this.goToDetails.bind(this);
  }

  componentDidMount() {
    fetch('https://08ca17fa.ngrok.io/api/demande', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result)
      this.setState({
        listeDemande: result
      });
    })
    .catch((error) => {
      console.error(error);
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.state.latitude = position.coords.latitude;
        this.state.longitude = position.coords.longitude;
      }
      );

  }

  refresh = () => {
    fetch('https://08ca17fa.ngrok.io/api/demande', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result)
      this.setState({
        listeDemande: result
      });
    })
    .catch((error) => {
      console.error(error);
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.state.latitude = position.coords.latitude
        this.state.longitude = position.coords.longitude
      });

  }

  profil = () =>{
    this.props.history.push("/profil", {
      val1: this.props.location.state.val1,
    })
  }

  gotolog = () => {
    this.props.history.push('/login');
  }

  gotoformjob = () => {
    this.props.history.push("/formulaireJob", {
      val1: this.props.location.state.val1,
    })
  }

  goToDetails(j, evt) {

    this.props.history.push("/details", {
      val1: this.props.location.state.val1,
      val2: this.state.listeDemande[0][j],
    })
  }

  toggleMenu = () => {

    this.setState({
      openMenu: !this.state.openMenu,
    });

  }

  suiviJob = () => {
    let idx = 0;
    this.state.listeDemande.forEach((element,i) => {
      element.forEach((e,j) => {
        if(e.user_id == this.props.location.state.val1[0].id){
           idx = j;
        }
      });
    });

        fetch(`https://08ca17fa.ngrok.io/api/demande/${this.state.listeDemande[0][idx].id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      this.props.history.push("/suiviJob", {
            val1: this.props.location.state.val1,
            val2: this.state.listeDemande[0][idx],
            val3: result,
          });
    })
    .catch((error) => {
      console.error(error);
    });
    console.log("ok");
    console.log(this.state.user);


    

  }

  render() {

    var markers = [];

    {this.state.listeDemande.forEach((element,i) => {
      element.forEach((e,j) => {
        if(e.user_id == this.props.location.state.val1[0].id){
          this.state.colormark = '#0000FF';
          this.state.descri = 'Votre Demande';
        }
        else{
          this.state.colormark = '#FF0000';
          this.state.descri = '';
        }
        markers.push(
          <MapView.Marker
          pinColor={this.state.colormark}
          coordinate={{
            latitude: e.latitude,
            longitude: e.longitude,
          }}
          title={e.intitule}
          description={this.state.descri}
          onPress={this.goToDetails.bind(this, j)}
          />)
      }
      )
    })}

    return (

      <View style={styles.container}>

      <View style={styles.icon3} onPress={this.toggleMenu}>
      <TouchableOpacity style={styles.icon3} onPress={this.toggleMenu}>
      <Image
      style={styles.imgg}
      source={require('./burger.png')}
      />
      </TouchableOpacity>
      </View>




      <View style={styles.icon} onPress={this.profil}>
      <TouchableOpacity style={styles.icon} onPress={this.profil}>
      <Image 
      style={styles.imgg}
      source={require('./profil1.png')}
      />
      </TouchableOpacity>
      </View>


      <MapView
      style={styles.map}
      region={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
      >
      <MapView.Marker
      pinColor={'#00FF00'}
      coordinate={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      }}
      title={"Votre position"}
      />
      { markers }
      </MapView>
      <View style={styles.icon2} onPress={this.refresh}>
            <TouchableOpacity onPress={this.refresh}>
            <Image 
                style={styles.imgg2}
                source={require('./boussole.png')}
            />
            </TouchableOpacity>
          </View>
      {this.state.openMenu ? 
        <View>
          <Button color="#C01A2E" onPress={this.suiviJob} title= "Suivi Des Jobs" />
          <Button color="#C01A2E" title="Poster une demande" onPress={this.gotoformjob} />
          <Button color="#C01A2E" title="Deconnexion" onPress={this.gotolog} />
        </View> :
        <View></View>
        
      }
    </View>
      )
  }
}

const styles = StyleSheet.create({
  saut: {
    marginTop : 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  laliste: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  containerButton: {
   flexDirection: 'row', 
   alignSelf: 'flex-start'
 },
 map: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
},
icon:{
  position: 'absolute',
  width: 50,
  height: 50,
  top: 10,
  right: 10,
  flexDirection: 'row',
  zIndex: 999
},
icon2:{
    position: 'absolute',
    width: 75,
    height: 75,
    bottom: 50,
    left: 10,
    flexDirection: 'row',
    zIndex: 999
  },
icon3:{
  position: 'absolute',
  width: 50,
  height: 50,
  top: 10,
  left: 10,
  flexDirection: 'row',
  zIndex: 999
},
imgg:{
  width: 30,
  height: 30,
}
});