import React, { Component } from 'react';
import { Text, View,TextInput,TouchableOpacity,ToastAndroid,Image,ImageBackground} from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons'; 
import styles from './styles.js';
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const logo = require("../../assets/small-mobile.png")
import customs from '../../customizer.js';

class ResetpasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        password1:"",
        password2:"",
        show1:false,
        show2:false
    };
    this.send = this.send.bind(this);
    this.props.navigation.setOptions({title:"Reset Password"})
   
  }

  send() {

    this.props.navigation.navigate("Profile");

  }

  render() {
    return (
      <ImageBackground source={customs.bgImage}  style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={logo} style={{
            width: 300,
            height: 100,
            resizeMode: 'stretch',
          }}/>
        <View style={{flexDirection:"row"}}>

           <TouchableOpacity onPress={()=>{this.setState({show1:!this.state.show1})}} style={{alignSelf:"center",position:"absolute",right:10,zIndex:2}}>
               <Feather name={!this.state.show1?"eye":"eye-off"} size={20}/>
           </TouchableOpacity>
            <TextInput secureTextEntry={!this.state.show1} value={this.state.password1} onChangeText={(val)=>this.setState({password1:val})} style={styles.inputbox} placeholder="Password" />
        </View>
        <View style={{flexDirection:"row"}}>

           <TouchableOpacity onPress={()=>{this.setState({show2:!this.state.show2})}} style={{alignSelf:"center",position:"absolute",right:10,zIndex:2}}>
               <Feather name={!this.state.show2?"eye":"eye-off"} size={20}/>
           </TouchableOpacity>
            <TextInput secureTextEntry={!this.state.show2} value={this.state.password2} onChangeText={(val)=>this.setState({password2:val})} style={styles.inputbox} placeholder="Confirm Password" />
        </View>
        <TouchableOpacity onPress={this.send} style={styles.button}>
            <Text style={styles.buttonText}>Confirm password</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>

    )
  }
}

export default ResetpasswordScreen;
                