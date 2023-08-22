import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import api from './components/api';

import TelaInicio from './components/TelaInicio';
import TelaLogin from './components/TelaLogin';
import TelaCadastro from './components/TelaCadastro';

const Tabs = createBottomTabNavigator();
const Stacks = createStackNavigator();

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const fazerLogin = (email, password) => {
    console.log('email:', email, 'password:', password)
    api.post('/login', {
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
      console.log('Response data1:', error.response);
      console.log('Response data:', error.response.data);
    });
  };
  

  
  const handleLogout = () => {
    setIsTrue(false);
  };
  

  // return (
  //   <NavigationContainer>
  //     {isTrue ? (
  //     <Stacks.Navigator screenOptions={{ headerShown: false }}>
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
          name="Login"
          options={{ headerShown: false }}
        >
          {(props) => <TelaLogin {...props} fazerLogin={fazerLogin} />}
        </Stacks.Screen>
        <Stacks.Screen name="TelaCadastro" component={TelaCadastro} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}