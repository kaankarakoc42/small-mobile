
import React, { Component } from 'react';
import { Image} from 'react-native';
import styles from './styles.js'
const logo = require("../../assets/small-mobile.png")

function SmalllogoimageComponents(){
  return(
    <Image source={logo} style={{
      width: 300,
      height: 100,
      resizeMode: 'stretch',
    }}/>   
  )      
}

export default SmalllogoimageComponents

                