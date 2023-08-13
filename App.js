import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import TelaInicio from './components/TelaInicio';
import TelaLogin from './components/TelaLogin';
import TelaCadastro from './components/TelaCadastro';

const Tabs = createBottomTabNavigator();
const Stacks = createStackNavigator();

export default function App() {
  const [isTrue, setIsTrue] = useState(true);

  const fazerLogin = () => {
    
    setIsTrue(true);
  };

  return (
    <NavigationContainer>
      {isTrue ? (
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1fcc79',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        
          <Tabs.Screen
            name="Inicio"
            component={TelaInicio}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="home" color={color} size={20} />
              ),
            }}
          />
          <Tabs.Screen name="Logout" component={TelaLogin}/>
      </Tabs.Navigator>
        ) : (
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
          <Stacks.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {() => <TelaLogin onLogin={fazerLogin} />}
          </Stacks.Screen>
          
        
        <Stacks.Screen name="TelaCadastro" component={TelaCadastro} />
      </Stacks.Navigator>
      )}
    </NavigationContainer>
  );
}



// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Logout"
//         onPress={() => navigation.navigate('Logout')}
//       />
//     </View>
//   );
// }

// function HomeTabs() {
//   return (
//     <Tabs.Navigator>
//       <Tabs.Screen 
//           name = 'Home'
//           component={TelaInicio}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <Entypo name="home" color={ color } size={ 20 } />
//             ),
//           }}
//         />
//       <Tabs.Screen name="Logout" component={TelaLogin} />
//     </Tabs.Navigator>
//   );
// }
