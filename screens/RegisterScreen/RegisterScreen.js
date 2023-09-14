import React, { Component } from 'react';
import { Text, View ,TextInput,TouchableOpacity,ToastAndroid} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles.js'
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <View style={styles.container}>
      <View style={styles.RegisterForm}>
        <FontAwesome name="user" size={50} color="black" />
        <TextInput value={this.state.password} onChangeText={(val)=>this.setState({password:val})} style={styles.inputbox} placeholder='password' secureTextEntry={true}/>
        <TextInput value={this.state.passwordControl} onChangeText={(val)=>this.setState({passwordControl:val})} style={styles.inputbox} placeholder='confirm-password' secureTextEntry={true}/>
        <TouchableOpacity onPress={this.control} style={styles.button}>
            <Text style={styles.buttonText}>send</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

export default RegisterScreen

                