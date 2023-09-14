
import React, { Component, cloneElement } from 'react';
import { Text, View ,Image,TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons'; 
import styles from './styles.js'

const profilFoto = require("../../assets/profileFoto.png");

class CommentsectionComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems:"center",gap:10,backgroundColor:"#f9f9f9",padding:10}}>
        <View style={{flex:1,width:Dimensions.get("screen").width*(9/10),flexDirection:'row',justifyContent:"space-between"}}>
        <View style={{flexDirection:'row'}}>
        <Image source={profilFoto} style={{
            width: 50,
            height: 50,
            resizeMode: 'stretch',
          }}/>
          <View style={{flexDirection:"column",left:10}}>
             <Text> {this.props.data?.firstName} {this.props.data?.lastName}</Text>
             <Text style={{left:5}}> {this.props.data?.userName}</Text>
          </View>
        </View>
          <TouchableOpacity  style={{width:60,height:30,backgroundColor:"lightgray",padding:5}}>
               <Text style={{textAlign:"center"}}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,width:Dimensions.get("screen").width*(9/10),flexDirection:'row',justifyContent:"space-between"}}>
           <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontSize:20}}>Comments </Text>
            <View style={{flexDirection:"row",gap:30}}>
              <TouchableOpacity>
                 <AntDesign  style={{backgroundColor:"lightgray",padding:6,borderRadius:10}} name='like1' size={20}/>
              </TouchableOpacity>
              <TouchableOpacity>
                 <FontAwesome style={{backgroundColor:"lightgray",padding:6,borderRadius:10}} name="share" size={20}/>
              </TouchableOpacity>

            </View>
           </View>
        </View>
      </View>
    )
  }
}

export default CommentsectionComponents

                