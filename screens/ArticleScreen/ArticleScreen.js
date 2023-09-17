
import React, { Component } from 'react';
import { Text, View ,ScrollView,Dimensions,TouchableOpacity, ViewBase,ImageBackground} from 'react-native';
import edjsHTML from "editorjs-html";
import RenderHtml from 'react-native-render-html';
import styles from './styles.js'
import { FontAwesome,AntDesign } from '@expo/vector-icons'; 
import components from '../../components/components.js';
const bgImage = require("../../assets/bg.png");



class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    data = this.props.route.params.data
    this.props.navigation.setOptions({title:data.title})
    //console.log(data.content)
    html = edjsHTML().parse({blocks:JSON.parse(data.content)}).join("");
    // console.log(data.content)
    
    //console.log(data.author)
  }


  render() {
    return (
      <ImageBackground source={bgImage} style={{flex:1,alignContent:"center",alignItems:"center"}}>
      <ScrollView>
        <View style={{width:Dimensions.get("screen").width*(9/10),alignSelf:"center"}}>
        <RenderHtml
          baseStyle={{backgroundColor:"#f9f9f9"}}
          contentWidth={Dimensions.get("screen").width*(8/10)}
          source={{html:`<html><head></head><body style="font-size:17px;color:#212121;padding:10px;">${html}</body></html>`}}
        />
        </View>
      </ScrollView>

      </ImageBackground>


    )
  }
}

export default ArticleScreen

                