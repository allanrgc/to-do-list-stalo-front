import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Ionicons, } from '@expo/vector-icons';

import estilos from './estilos';

export default function TelaCadastro ({navigation}) {

  const [ flagInputFocus, setFlagInputFocus ] = useState("");

  const cadastrarConta = () => {
    setContaValidada(true);
    navigation.navigate('TelaInicio');
  };
  
  // const navigation = useNavigation()
  return (
    <View>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Bem vindo(a)!</Text>
      
        
        <View style={ estilos.inputBox }>
          <View style={estilos.linhaInput}>
            <TextInput style={estilos.inputNormal}
              placeholder="Nome"
              textAlign="center"
              keyboardType="email-adress"
              // onFocus={ () => }
            />
          </View>
          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Email"
              textAlign="left"
              // keyboardType="default"
              paddingLeft = {30}
              style = { flagInputFocus === "foco1" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco1")}
              onBlur = { () => setFlagInputFocus("") }
            />
          </View>
          <View style={estilos.linhaInput}>
            <TextInput style={estilos.inputNormal}
              placeholder="Idade"
              textAlign="center"
              keyboardType="email-adress"
              // onFocus={ () => }
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
          
        </View>
        

        <View style = { estilos.boxBotao }>
          <Button 
            title="Signup" 
            // onPress = { console.log("nada ainda") } 
            color="#00000000"
            onPress={cadastrarConta}
            />
        </View>

        <View>
          
            <Text
              style={estilos.titulo}
              onPress={() => navigation.navigate('TelaLogin')}>
              Voltar para login
            </Text>
          
        </View>


      </View>
    </View>
  )
}