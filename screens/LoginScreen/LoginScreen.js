import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity,ToastAndroid,Image,ImageBackground} from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import styles from './styles.js';
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import components from '../../components/components.js';
import customs from '../../customizer.js';


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
    .then(response => {console.log(response);return response.json()})
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
      <ImageBackground source={customs.bgImage}  style={styles.container}>
      <View style={styles.loginForm}>
        <components.SmalllogoimageComponents/>
        <components.UsertextinputComponents icon={"mail"} value={this.state.username} onChangeText={(val)=>this.setState({username:val})} placeholderTextColor={"white"} placeholder="Username"/>
        <components.UsertextinputComponents icon={"lock"} value={this.state.password} onChangeText={(val)=>this.setState({password:val})} placeholderTextColor={"white"} placeholder='password' secureTextEntry={true}/>
        <components.AuthformbuttonComponents title={"Login"} onPress={this.send}/>
        <View style={{flexDirection:"row"}}>
            <Text style={{color:"white",fontSize:15}}>forgot password? </Text>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate("ForgotPassword")}>
                <Text style={{color:"cyan"}}>recover here</Text>
            </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterFirst")}>
            <Text style={{fontSize:16,color:"white"}}>Dont you have an account yet?</Text>
        </TouchableOpacity>
        <StatusBar  style='light'/>
      </ImageBackground>

    )
  }
}

export default LoginScreen

                