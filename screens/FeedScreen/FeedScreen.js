import React, { Component } from 'react';
import { Text, View,FlatList,ImageBackground} from 'react-native';
import styles from './styles.js'
import api from '../../api/requests.js';
import components from '../../components/components.js';
import customs from '../../customizer.js';

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles:[]
    };
    api.GetArticles().then(response => response.json())
    .then(json=>json.data.items.forEach(element => {
         this.setState({articles:[...this.state.articles,element]})
    }))
  }

  render() {
    return (
      <ImageBackground source={customs.bgImage} style={styles.container}>
       <FlatList data={this.state.articles} renderItem={({item})=>(
       <components.ArticlefeedComponents onPress={()=>{this.props.navigation.navigate("Article",{data:item})}} data={item}/>
       )}>
       </FlatList>
      </ImageBackground>
    )
  }
}

export default FeedScreen

                