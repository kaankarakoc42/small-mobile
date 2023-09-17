import React, { Component } from 'react';
import { Text, View ,TextInput,TouchableOpacity,ToastAndroid,ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles.js'
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import components from '../../components/components.js';
import { StatusBar } from 'expo-status-bar';
import customs from '../../customizer.js';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:props.route.params.firstName,
        lastName:props.route.params.lastName,
        email:props.route.params.email,
        password:"",
        passwordControl:""
    };
    this.send = this.send.bind(this);
    this.control = this.control.bind(this);
    console.log("datas")
    console.log(this.state)
    
  }

  control(){
    if(this.state.password===this.state.passwordControl){
       this.send()
    }
    else{
      ToastAndroid.show('passwords does not match', ToastAndroid.SHORT);
    }
  }

  send(){
      console.log(this.state)
      api.RegisterRequest(this.state)
      .then(response=>response.json())
      .then(json=>{
        if(json.success){
            console.log(json)
            AsyncStorage.setItem("accesstoken",json.data.accessToken);
            AsyncStorage.setItem("refreshtoken",json.data.refreshToken);
            this.props.navigation.navigate("Profile");
        }
        else{
          ToastAndroid.show('this email already in use', ToastAndroid.SHORT);
        }
      })
      .catch(error =>console.error(error))
  }


  render() {
    return (
      <ImageBackground source={customs.bgImage} style={styles.container}>
      <View style={styles.RegisterForm}>
        <components.SmalllogoimageComponents/>
        <components.UsertextinputComponents icon="lock" placeholder="Password" placeholderTextColor={"white"}  value={this.state.password} onChangeText={val=>this.setState({password:val})}/>
        <components.UsertextinputComponents icon="lock"  placeholder='confirm-password' placeholderTextColor={"white"}  secureTextEntry={true} value={this.state.passwordControl} onChangeText={val=>this.setState({passwordControl:val})}/>
        <components.AuthformbuttonComponents title={"Register"} onPress={this.control}/>
      </View>
      </ImageBackground>
    )
  }
}

export default RegisterScreen

                