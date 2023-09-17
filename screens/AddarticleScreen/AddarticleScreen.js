
import React, { Component } from 'react';
import { Text, View,Dimensions,Keyboard} from 'react-native';
import styles from './styles.js'
import { WebView } from 'react-native-webview';
import ArticleEditHTML from '../../webviews/editArticle/editArticle.js'
import AsyncStorage from '@react-native-async-storage/async-storage';


class AddarticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
         jsonData:[{
          type: 'header',
          data: {
              text: 'This is a sample Header',
              level: 2
            }
          }],
         token:"11111",
         html:''
    };
    statusHeight= Dimensions.get("window").height*(4/100)
  }


  componentDidMount(){
    AsyncStorage.getItem("accesstoken").then(token=>{
             this.setState({token:token})
             this.setState({html:ArticleEditHTML(this)})
             console.log(this.state.html)
     
    })

  }

  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"#f9f9f9"}}>
           <View style={{width:"100%",height:statusHeight,backgroundColor:"#f9f9f9"}}/>
           <WebView source={{html:this.state.html}}    javaScriptEnabled={true}
   domStorageEnabled={true} style={{ flex: 1}} />
      </View>

    )
  }
}

export default AddarticleScreen

                