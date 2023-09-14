import React, { Component } from 'react';
import { Text, TouchableOpacity, View,Image } from 'react-native';
import styles from './styles.js'

const profilFoto = require("../../assets/profileFoto.png");

class ArticlefeedComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <View style={styles.upper}>
          <Image source={profilFoto} style={{
            width: 50,
            height: 50,
            resizeMode: 'stretch',
          }}/>
          <Text style={{fontSize:20}}> {this.props.data.title} </Text>
        </View>
        <View style={styles.bottom}>
           <Text> {this.props.data.author.firstName} {this.props.data.author.lastName}</Text>
           <View style={styles.topics}>
           {this.props.data.topics.map((prop,key) => {
                return (<Text style={styles.topic} key={key}> {prop.name}</Text>) 
           })}
           </View>
        </View>
  
      </TouchableOpacity>
    )
  }
}

export default ArticlefeedComponents

                