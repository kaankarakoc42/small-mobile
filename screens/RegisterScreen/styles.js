import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
 },
 
 RegisterForm:{
      width:Dimensions.get("screen").width*(9/10),
      height:Dimensions.get("screen").height*(6/10),
      alignItems:"center",
      justifyContent:"center",
      gap:20,

 }
 ,
 inputbox:{
   borderWidth:1,
   width:Dimensions.get("screen").width/2,
   textAlign:"center",
   borderRadius:10,
 },
 button:{
     backgroundColor:"cyan",
     borderRadius:10,
     width:Dimensions.get("screen").width/5,
     height:Dimensions.get("screen").width/15,
     alignItems:"center",
     justifyContent:"center",
     
 },
 buttonText:{
    fontSize:18,
 }
});

export default styles;                
                
                