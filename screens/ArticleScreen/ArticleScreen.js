
import React, { Component } from 'react';
import { Text, View ,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import edjsHTML from "editorjs-html";
import RenderHtml from 'react-native-render-html';
import styles from './styles.js'
import { FontAwesome,AntDesign } from '@expo/vector-icons'; 
import components from '../../components/components.js';


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
      <View style={{flex:1,alignContent:"center"}}>
      <ScrollView style={{flex:1,alignContent:"center"}}>
        <RenderHtml
          contentWidth={Dimensions.get("screen").width*(8/10)}
          source={{html:`<html><head></head><body style="font-size:17px;color:#212121;">${html}</body></html>`}}
        />
        <components.CommentsectionComponents data={data.author}/>
      </ScrollView>



      </View>


    )
  }
}

export default ArticleScreen

                