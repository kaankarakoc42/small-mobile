import React, { Component } from 'react';
import { Text, View ,TextInput,TouchableOpacity,ToastAndroid} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles.js'
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <View style={styles.container}>
      <View style={styles.RegisterForm}>
        <FontAwesome name="user" size={50} color="black" />
        <TextInput value={this.state.firstName} onChangeText={(val)=>this.setState({firstName:val})} style={styles.inputbox} placeholder='first name' />
        <TextInput value={this.state.lastName} onChangeText={(val)=>this.setState({lastName:val})} style={styles.inputbox} placeholder='last name' />
        <TextInput value={this.state.email} onChangeText={(val)=>this.setState({email:val})} style={styles.inputbox} placeholder='email' />
        <TouchableOpacity onPress={this.send} style={styles.button}>
            <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

export default RegisterFirstScreen;
                