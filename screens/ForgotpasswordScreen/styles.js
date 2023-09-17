import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
     flex:1,

     alignItems: "center",

  },
  loginForm:{
    width:Dimensions.get("screen").width*(6/10),
    height:Dimensions.get("screen").height*(6/10),
    alignItems:"center",
    justifyContent:"center",
    gap:20,

}
,
inputbox:{
 borderWidth:1,
 width:"100%",
 textAlign:"center",
},
button:{
   backgroundColor:"cyan",

   width:"100%",
   padding:5,
   alignItems:"center",
   justifyContent:"center",
   
},
buttonText:{
  fontSize:18,
}
});

export default styles;                
                
                