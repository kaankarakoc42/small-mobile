import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import MyStack from './navigations/navigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <>
    <NavigationContainer>
          <MyStack/>
    </NavigationContainer>
    <StatusBar  style='dark'/>
    </>
  );
}

export default App;

