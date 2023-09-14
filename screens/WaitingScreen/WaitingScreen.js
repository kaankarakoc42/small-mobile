import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import styles from './styles.js'
import api from '../../api/requests.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const logo = require("../../assets/favicon2.png");

class WaitingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.tokenControl = this.tokenControl.bind(this);
  }



  tokenControl= async()=>{
      if((await AsyncStorage.getAllKeys()).includes("accesstoken")){
      accesstoken = await AsyncStorage.getItem("accesstoken");
      refreshtoken = await AsyncStorage.getItem("refreshtoken");
      api.VerifyToken(accesstoken).then(json=>{
            if(json){
              this.props.navigation.navigate("Profile")
            }
            else{
              api.RefreshToken(refreshtoken).then(json=>{
                if(json){
                    if(json.success)
                    {
                       AsyncStorage.setItem("accesstoken",json.data.accessToken);
                       AsyncStorage.setItem("refreshtoken",json.data.refreshToken);
                       this.props.navigation.navigate("Profile")
                    }

                }
                else{
                   this.props.navigation.navigate("Login");
                }
              });
            }
          })
        }
        else{
          this.props.navigation.navigate("Login")
        }


  }

  deleteToken(){
      AsyncStorage.removeItem("refreshtoken");
      AsyncStorage.removeItem("accestoken");
  }

  componentDidMount(){
    this.tokenControl();
  }

  render() {
    //this.deleteToken();
    return (
      <View style={styles.container}>
        <Image source={logo} width={100} height={100} resizeMode='center'/>
        <View style={{position:"absolute",bottom:20}}>
           <Text>small-ui made by kaan karakoç</Text>
        </View>
      </View>
    )
  }
}

export default WaitingScreen

                