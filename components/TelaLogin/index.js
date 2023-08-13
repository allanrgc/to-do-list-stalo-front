import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { Ionicons, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

import estilos from './estilos';

export default function TelaLogin ({navigation, onLogin}) {

  const [ flagInputFocus, setFlagInputFocus ] = useState("");

  const fazerLogin = () => {

    if (true) {
      // onLogin();
      navigation.navigate('TelaInicio')
    }
  };
  
  // const navigation = useNavigation()
  return (
    <View>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Bem vindo(a)!</Text>
      
        
        <View style={ estilos.inputBox }>
          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Email"
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
              textAlign="left"
              keyboardType="default"
              paddingLeft = {30}
              style = { flagInputFocus === "foco2" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco2")}
              onBlur = { () => setFlagInputFocus("") }
            />
            <Ionicons style={estilos.iconEye} name="md-eye-outline" size={24} color="black" />
          </View>
          <View style = { estilos.forgotPass }>
            {/* <Button 
            title="Esqueceu a senha?" 
            // onPress = { console.log("nada ainda") } 
            color="#00000000"
            onPress={fazerLogin}
            /> */}
            <Text style={{textAlign:'right', marginBottom: 30}}>Esqueceu a senha ?</Text>
          </View>
        </View>
        

        <View style = { estilos.boxBotao }>
          <Button 
            style={estilos.botaoLogin}
            title="Login" 
            // onPress = { console.log("nada ainda") } 
            color="#00000000"
            onPress={fazerLogin}
            // textAlign='right'
            />
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