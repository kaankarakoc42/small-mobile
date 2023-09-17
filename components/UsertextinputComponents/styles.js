import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
     flex:1,
     justifyContent: "center",
     alignItems: "center"
  },
  inputbox:{
    borderWidth:1,
    width:"100%",
    textAlign:"center",
    borderColor:"white",
    backgroundColor:"rgba(0,0,0,0.4)",
    color:"white"
 },
 icon:{
    alignSelf:"center",
    position:"absolute",
    right:10,
    color:"white",
    zIndex:2
}
});

export default styles;                
                
                