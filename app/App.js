
import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskListScreen';


const Stack = createStackNavigator ();

const App = () =>{
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="tareass" component={TaskFormScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}



export default App;
