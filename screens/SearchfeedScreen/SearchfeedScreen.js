
import React,{Component} from 'react';
import { Text, View,TouchableOpacity ,TextInput,Dimensions,FlatList} from 'react-native';
import { FontAwesome,Entypo } from '@expo/vector-icons'; 
import styles from './styles.js'
import api from '../../api/requests.js';
import components from '../../components/components.js';

class SearchfeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context:"",
      items:[],
      searchingState:false
    };
    this.props.navigation.setOptions({
      headerRight:()=>(
          <TouchableOpacity style={{flexDirection:"row",gap:-25,right:100}}>
          <TextInput defaultValue={this.state.context}  onChangeText={(text)=>{
            this.setState({context:text})
            if(!this.state.searchingState&&this.state.context.length>2){
               this.search()
            }
        }}  style={{textAlign:'center',borderWidth:1,top:2,height:30,width:Dimensions.get("screen").width/2,borderRadius:10}}/>
          <FontAwesome style={{top:7}} size={20} name="search"/>
          </TouchableOpacity>
      )
    })
    this.search = this.search.bind(this)
  }

  search(){
     this.setState({searchingState:true})
     api.SearchArticle(this.state.context).then(
       json=>{
        let data = json?.data?.items
        this.setState({items:(data?data:[])})
        this.setState({searchingState:false})
       }
     )
    
  }

  render() {
    return (
      <View style={styles.container}>
         <FlatList data={this.state.items} renderItem={({item})=>(
            <components.ArticlefeedComponents data={item}/>
         )}>
         </FlatList>
      </View>
    )
  }
}

export default SearchfeedScreen

                