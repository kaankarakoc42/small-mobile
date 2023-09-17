import styles from './styles.js'
import React, { Component } from 'react';
import { Text, View ,TextInput,TouchableOpacity,ToastAndroid,ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import components from '../../components/components.js';
import { StatusBar } from 'expo-status-bar';
import customs from '../../customizer.js';

class RegisterFirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:"",
        lastName:"",
        email:"",
    };
    this.send = this.send.bind(this);
    
  }

  send(){
      this.props.navigation.navigate("Register",this.state);
  }


  render() {
    return (
      <ImageBackground source={customs.bgImage} style={styles.container}>
      <View style={styles.RegisterForm}>
        <components.SmalllogoimageComponents/>
        <components.UsertextinputComponents icon={"user"} value={this.state.firstName} onChangeText={(val)=>this.setState({firstName:val})} placeholderTextColor={"white"} placeholder="First name"/>
        <components.UsertextinputComponents icon={"user"} value={this.state.lastName} onChangeText={(val)=>this.setState({lastName:val})} placeholderTextColor={"white"} placeholder="Second name"/>
        <components.UsertextinputComponents icon={"mail"} value={this.state.email} onChangeText={(val)=>this.setState({email:val})} placeholderTextColor={"white"} placeholder="Email"/>
        <components.AuthformbuttonComponents title={"Continue"} onPress={this.send}/>
      </View>
       <StatusBar  style='light'/>
      </ImageBackground>
    )
  }
}

export default RegisterFirstScreen;
                