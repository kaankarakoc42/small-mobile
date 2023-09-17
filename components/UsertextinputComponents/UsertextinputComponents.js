
import React, { Component } from 'react';
import { Text, View ,TextInput} from 'react-native';
import styles from './styles.js'
import { FontAwesome,Feather } from '@expo/vector-icons'; 

function UsertextinputComponents(props){
         const {icon} = props;
         return(
          <View style={{flexDirection:"row"}}>
             <Feather name={icon} size={20} style={styles.icon}/>
             <TextInput {...props} style={styles.inputbox}/>
          </View>
         )
}

UsertextinputComponents.defaultProps = {

};

export default UsertextinputComponents;

                