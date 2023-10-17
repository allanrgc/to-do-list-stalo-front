import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, } from "react-native";
import { Ionicons, } from '@expo/vector-icons';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api";

import estilos from './estilos';
import { useNavigation } from "@react-navigation/native";
const getTokenLocally = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};
const addAuthToken = async (config) => {
  const token = await getTokenLocally();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // console.log(config)
  return config;
};
api.interceptors.request.use(addAuthToken);

export default function TelaLogin ({fazerLogin, teste}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ flagInputFocus, setFlagInputFocus ] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  
// console.log(getTokenLocally())
// console.log(addAuthToken())

  const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Erro ao armazenar o token:', error);
    }
  };
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  

  const navigation = useNavigation()

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={estilos.appButtonContainer}>
      <Text style={estilos.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Bem vindo(a)!</Text>
      
        
        <View style={ estilos.inputBox }>
          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              textAlign="left"
              keyboardType="default"
              paddingLeft = {30}
              style = { flagInputFocus === "foco1" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco1")}
              onBlur = { () => setFlagInputFocus("") }
            />
          </View>

          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              keyboardType="default"
              secureTextEntry={secureTextEntry}
              paddingLeft = {30}
              style = { flagInputFocus === "foco2" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco2")}
              onBlur = { () => setFlagInputFocus("") }
            />
            <Ionicons onPress={() => toggleSecureTextEntry()} style={estilos.iconEye} name={secureTextEntry ? "md-eye-outline" : "md-eye-off"} size={24} color="black" />
          </View>
          <View style = { estilos.forgotPass }>
            
            <Text style={{textAlign:'right', marginBottom: 30}}>Esqueceu a senha ?</Text>
          </View>
        </View>
        

        <View style = { estilos.boxBotao }>
          <AppButton title="Login"
          onPress={() => fazerLogin(email, password)}/>
        </View>

        <View style={estilos.cadastroTexto}>
          <Text style={{fontSize: 15, textAlign:'center'}}>
            Não tem uma conta?{' '}
            <Text
              style={{fontSize: 15, color:'#1fcc79'}}
              onPress={() => navigation.navigate('TelaCadastro')}>
              Criar conta
            </Text>
          </Text>
        </View>


      </View>
    </View>
  )
}