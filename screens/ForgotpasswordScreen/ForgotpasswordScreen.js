import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity,ToastAndroid,Image,ImageBackground} from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons'; 
import styles from './styles.js';
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import components from '../../components/components.js';
import customs from '../../customizer.js';
const logo = require("../../assets/small-mobile.png")


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
      <ImageBackground source={customs.bgImage}  style={styles.container}>
      <View style={styles.loginForm}>
        <components.SmalllogoimageComponents/> 
        <components.UsertextinputComponents value={this.state.username} onChangeText={(val)=>this.setState({username:val})} placeholderTextColor={"white"} placeholder='Username/Email'/>
        <components.AuthformbuttonComponents title={"Reset Password"}/>
      </View>
      </ImageBackground>

    )
  }
}

export default ForgotpasswordScreen