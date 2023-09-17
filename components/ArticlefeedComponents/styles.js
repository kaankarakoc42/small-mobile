import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
card:{
  width:350,
  height:100,
  backgroundColor:"#f9f9f9f9",

  borderRadius:10,
  margin:10,
  alignItems:"center",
  elevation: 7
},
upper:{
  width:320,
  height:70,
  flexDirection:"row",
  top:10
},
bottom:{
  width:300,
  flexDirection:"row",
  justifyContent:"space-between"
},
topics:{
  flexDirection:"row",
  gap:5

},
topic:{
  backgroundColor:"lightgray",
  padding:2,
  borderRadius:1
}
});

export default styles;                
                
                