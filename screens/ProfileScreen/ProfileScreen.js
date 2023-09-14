import React, { Component } from 'react';
import { Text, View,Image,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/requests.js';
import styles from './styles.js'
const profilFoto = require("../../assets/profileFoto.png");
const bgImage = require("../../assets/bg.png");
const cardImage = require("../../assets/card.png");

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
         user:{}
    };
    this.getUserData = this.getUserData.bind(this)
  }

  getUserData(){
     AsyncStorage.getItem("accesstoken").then(token=>token)
     .then(token=>{
          api.GetProfile(token)
          .then(data=>{
            this.setState({user:data.data.user})
            //console.log("selam",this.state.user)
          }).catch(error=>console.log(error))


     });
  }

  componentDidMount() {
     this.getUserData();
  }


  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={bgImage} resizeMode="cover" style={{flex:1}}>
          
        <View style={{justifyContent:"center",width:"80%",height:"30%",alignSelf:'center',alignItems:"center",top:100,zIndex:2,borderRadius:10}}>
           
                <View style={{padding:30,flexDirection:"column"}}>
                   <Image source={profilFoto}  style={{
                      width: 80,
                      height: 80,
                      resizeMode: 'stretch',
                      alignSelf:"center"
                    }}/> 
                  <View style={{top:10,alignItems:"center"}}>
                     <Text style={{fontSize:20}}>{this.state.user.firstName} {this.state.user.lastName}</Text>
                     <Text style={{fontSize:15}}>@{this.state.user.userName}</Text>
                  </View>
                </View>
 
        </View>
             
        <View style={{width:"90%",alignSelf:"center",height:"80%",backgroundColor:"white",borderTopRightRadius:40,borderTopLeftRadius:40}}>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

export default ProfileScreen

                