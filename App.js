import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import api from './components/api';
import axios from 'axios';
const baseUrl = 'http://10.0.0.103:8000/api';

import TelaInicio from './components/TelaInicio';
import TelaLogin from './components/TelaLogin';
import TelaCadastro from './components/TelaCadastro';

const Tabs = createBottomTabNavigator();
const Stacks = createStackNavigator();

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let token = ''

  const fazerLogin = (email, password) => {
    console.log('email:', email, 'password:', password)
    console.log('api:',api)
    api.post('/', {
      email: email,
      password: password
    })
    .then(response => {
      console.log('resposta:', response)
      const token = response.data.token; 
      console.log('token:',token)
      setIsTrue(true);
      navigation.navigate('TelaInicio')
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      // console.log('Response data1:', error.response);
      // console.log('Response data:', error.response.data);
    });
  };
  const teste = (email, password) => {
    console.log('email:', email, 'password:', password)
    console.log('url api:', baseUrl)
    
    axios.post(`${baseUrl}/login`, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      }
    }).then((response) => {
      const token = response.data.token;
      console.log('response', response)
      console.log('response com data',response.data);
    })
    .catch(error => {
      console.error('erro no teste:',error)
    })

  }
  

  
  const handleLogout = () => {
    setIsTrue(false);
  };
  

  // return (
  //   <NavigationContainer>
  //     {isTrue ? (
  //       <Stacks.Navigator screenOptions={{ headerShown: false }}>
  //         <Stacks.Screen
  //           name="Login"
  //           options={{ headerShown: false }}
  //           component={TelaLogin}
  //         >
  //           {/* {(props) => <TelaLogin {...props} fazerLogin={fazerLogin} />} */}
  //         </Stacks.Screen>
          
  //       <Stacks.Screen name="TelaCadastro" component={TelaCadastro} />
        
  //     </Stacks.Navigator>
      
  //       ) : (
  //         <Stacks.Navigator
  //       screenOptions={{
  //         tabBarActiveTintColor: '#1fcc79',
  //         headerShown: false,
  //         tabBarHideOnKeyboard: true,
  //       }}>
        
  //         <Tabs.Screen name="Inicio" component={TelaInicio} 
  //           options={{ tabBarIcon: ({ color }) => (
  //               <Entypo name="home" color={color} size={20} />
  //             ),
  //           }}
  //         />
  //         <Tabs.Screen name="Logout" component={TelaLogin}/>
  //     </Stacks.Navigator>
  //     )}
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
      
      <Stacks.Screen
          name="TelaLogin"
          options={{ headerShown: false }}
          // component={TelaLogin}
        >
          {/* {(props) => <TelaLogin {...props} teste={teste} />} */}
          {(props) => <TelaLogin {...props} fazerLogin={fazerLogin} />}
        </Stacks.Screen>
        <Stacks.Screen name="TelaCadastro" component={TelaCadastro} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}