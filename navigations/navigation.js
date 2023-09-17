import { createStackNavigator } from '@react-navigation/stack';
import screens from '../screens/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome,Entypo } from '@expo/vector-icons'; 
import { View ,Text,TextInput,Dimensions,TouchableOpacity,Alert,Image} from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'

const icon = require("../assets/favicon2.png");
const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
<Drawer.Navigator initialRouteName="Settings" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Log out" onPress={() => {
      props.navigation.toggleDrawer()
      Alert.alert("do you really want to log out?","",
      [
      {
        text: 'yes',
        onPress: () => props.navigation.navigate("Login"),
      },
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      }
      ])}} />
      </DrawerContentScrollView>
    )
  }} screenOptions={({navigation})=>({
       drawerPosition:"right",
       headerLeft:()=>null,
       headerRight:()=>(
       <TouchableOpacity onPress={navigation.toggleDrawer}>
          <FontAwesome name='bars' size={20} style={{right:20}}/> 
       </TouchableOpacity>
       )
  })}>
    <Drawer.Screen name="Profile" component={screens.ProfileScreen}/>
  </Drawer.Navigator>
  );
}



function MyFeedStack(){
  return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="Feed"  component={screens.FeedScreen}
            options={({ navigation }) => ({
              title: "Feed",
              headerLeft:null,
              headerRight:()=>(<TouchableOpacity onPress={()=>navigation.navigate("FeedSearch")} style={{flexDirection:"row",gap:-25,right:140}}><View style={{borderWidth:1,top:2,height:30,width:Dimensions.get("screen").width/3,borderRadius:10}}/><FontAwesome style={{top:7}} size={20} name="search"/></TouchableOpacity>),
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome name="compass" size={30}/>
              ),
              
        
            })}/>

          <FeedStack.Screen name="Article"  component={screens.ArticleScreen}
            options={({ navigation }) => ({
              title: "Article",
        
             })}/>
 
        </FeedStack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='AddArticle'>
        <Tab.Screen name="FeedStack" component={MyFeedStack} options={({ navigation }) => ({
      title: "Feed",
      tabBarShowLabel: false,
      headerShown:false,
      tabBarIcon: ({ focused, color }) => (
        <FontAwesome name="compass" size={30}/>
      ),

    })}/>

    <Tab.Screen name="AddArticle" component={screens.AddarticleScreen} options={({ navigation }) => ({
      headerShown:false,
      tabBarHideOnKeyboard:true,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color }) => (
        <FontAwesome name="plus-circle" size={30}/>
      ),

    })}/>

    
        <Tab.Screen name="Home" component={MyDrawer}  options={({ navigation }) => ({
      title: "Home",
      tabBarShowLabel: false,
      headerShown:false,

      tabBarIcon: ({ focused, color }) => (
        <FontAwesome name="home" size={30}/>
      ),
      
    })}/>


    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function MyStack() {

  return (
    
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name="Waiting" component={screens.WaitingScreen} options={{headerShown:false,}}/>
        <Stack.Screen name="Login" component={screens.LoginScreen} options={{headerShown:false,headerLeft:null}} />
        <Stack.Screen name="Register" component={screens.RegisterScreen}  options={{ headerTransparent: true,headerTintColor:"white"}} />
        <Stack.Screen name="RegisterFirst" component={screens.RegisterfirstScreen} options={{ headerTransparent: true,headerTintColor:"white"}} />
        <Stack.Screen name="Profile"  component={MyTabs}  options={{headerLeft:null,headerShown:false}}/>
        <Stack.Screen name="Settings" component={MyDrawer} />
        <Stack.Screen name="FeedSearch" component={screens.SearchfeedScreen} options={({ navigation }) => ({title:""})}/>
        <Stack.Screen name="ForgotPassword" component={screens.ForgotpasswordScreen} options={({ navigation }) => ({title:"", headerTransparent: true,headerTintColor:"white"})}/>
        <Stack.Screen name="ResetPasswordCode" component={screens.ResetpasswordconfirmationScreen} options={({ navigation }) => ({title:"", headerTransparent: true,headerTintColor:"white"})}/>
        <Stack.Screen name="ResetPassword" component={screens.ResetpasswordScreen} options={({ navigation }) => ({title:"", headerTransparent: true})}/>
       </Stack.Navigator>
  
  );
}

export default MyStack;