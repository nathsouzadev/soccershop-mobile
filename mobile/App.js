import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Produtos } from './src/pages';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:'Home',
            headerStyle: {
              backgroundColor: '#198754',
            },
            headerTitleStyle: {fontWeight:'bold', alignSelf: 'center'}
          }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{
            title:'Produtos',
            headerStyle: {
              backgroundColor: '#198754',
            },
            headerTitleStyle: {fontWeight:'bold', alignSelf: 'center'}
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title:'Login',
            headerStyle: {
              backgroundColor: '#198754',
            },
            headerTitleStyle: {fontWeight:'bold', alignSelf: 'center'}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
