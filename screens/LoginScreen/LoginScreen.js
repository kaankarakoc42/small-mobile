import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity,ToastAndroid,Image,ImageBackground} from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons'; 
import styles from './styles.js';
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const logo = require("../../assets/small-mobile.png")
const bgImage = require("../../assets/bg.png");


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:""
    };
    this.send = this.send.bind(this);
   
  }

  send() {
    api.LoginRequest(this.state.username,this.state.password)
    .then(response => response.json())
    .then(json => {
      if(json.success){
          AsyncStorage.setItem("accesstoken",json.data.accessToken);
          AsyncStorage.setItem("refreshtoken",json.data.refreshToken);
          this.props.navigation.navigate("Profile");
      }
      else{
        ToastAndroid.show('invalid username', ToastAndroid.SHORT);
      }

    })
    .catch(error => {
      console.error(error);
    });;
    this.setState({username:'',password:''})
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
            <TextInput value={this.state.username} onChangeText={(val)=>this.setState({username:val})} style={styles.inputbox} placeholder='username' />
        </View>
        <View style={{flexDirection:"row"}}>
            <Feather name="lock" size={20} style={{alignSelf:"center",position:"absolute",right:10}}/>
            <TextInput value={this.state.password} onChangeText={(val)=>this.setState({password:val})} style={styles.inputbox} placeholder='password' secureTextEntry={true}/>
        </View>
        <TouchableOpacity onPress={this.send} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row"}}>
         <Text>forgot password? </Text>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("ForgotPassword")}>
            <Text style={{color:"green"}}>recover here</Text>
        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterFirst")}>
          <Text style={{fontSize:16}}>Dont you have an account yet?</Text>
      </TouchableOpacity>
      </ImageBackground>

    )
  }
}

export default LoginScreen

                