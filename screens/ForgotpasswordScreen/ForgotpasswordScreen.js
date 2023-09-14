import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity,ToastAndroid,Image,ImageBackground} from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons'; 
import styles from './styles.js';
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const logo = require("../../assets/small-mobile.png")
const bgImage = require("../../assets/bg.png");


class ForgotpasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
    };
    this.send = this.send.bind(this);
   
  }

  send() {
      api.ResetPassword(this.state.username).then(json=>{
          if(json.success){
             this.props.navigation.navigate("ResetPasswordCode")
          }
      })
  }

  render() {
    return (
      <ImageBackground source={bgImage}  style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={logo} style={{
            width: 300,
            height: 100,
            resizeMode: 'stretch',
          }}/>
        <View style={{flexDirection:"row"}}>
            <Feather name="mail" size={20} style={{alignSelf:"center",position:"absolute",right:10}}/>
            <TextInput value={this.state.username} onChangeText={(val)=>this.setState({username:val})} style={styles.inputbox} placeholder='Username/Email' />
        </View>
        <TouchableOpacity onPress={this.send} style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>

    )
  }
}

export default ForgotpasswordScreen