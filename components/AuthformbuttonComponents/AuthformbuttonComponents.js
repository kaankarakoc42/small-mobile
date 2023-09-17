
import React, { Component } from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styles.js'

function AuthformbuttonComponents(props){
         const {title} = props;
         return(
          <TouchableOpacity {...props} style={styles.button}>
               <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
         )
}

export default AuthformbuttonComponents

                