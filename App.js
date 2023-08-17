import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home/Home';
import Loja from './Screens/Loja/Loja';
import Quiosque from './Screens/Quiosque/Quiosque';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loja" component={Loja} />
        <Stack.Screen name="Quiosque" component={Quiosque} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
