import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons, } from '@expo/vector-icons';
import estilos from './estilos';

export default function TelaCadastro ({navigation}) {

  const [ flagInputFocus, setFlagInputFocus ] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const cadastrarConta = () => {
    // setContaValidada(true);
    navigation.navigate('TelaInicio');
  };

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={estilos.appButtonContainer}>
      <Text style={estilos.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
  // const navigation = useNavigation()
  return (
    <View>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Cadastro</Text>
          
        <View style={ estilos.inputBox }>
          
          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Nome"
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
              placeholder="Email"
              textAlign="left"
              keyboardType="email-address"
              paddingLeft = {30}
              style = { flagInputFocus === "foco2" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco2")}
              onBlur = { () => setFlagInputFocus("") }
            />
          </View>
          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Idade"
              textAlign="left"
              keyboardType="numeric"
              paddingLeft = {30}
              style = { flagInputFocus === "foco3" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco3")}
              onBlur = { () => setFlagInputFocus("") }
            />
          </View>

          <View style={estilos.linhaInput}>
            <TextInput
              placeholder="Password"
              textAlign="left"
              keyboardType="default"
              secureTextEntry={secureTextEntry}
              paddingLeft = {30}
              style = { flagInputFocus === "foco4" ?
              estilos.inputFocus : estilos.inputNormal }
              onFocus ={ () => setFlagInputFocus("foco4")}
              onBlur = { () => setFlagInputFocus("") }
            />
              <Ionicons onPress={() => toggleSecureTextEntry()} style={estilos.iconEye} name={secureTextEntry ? "md-eye-outline" : "md-eye-off"} size={24} color="black" />
          </View>
          
        </View>
        

        <View style = { estilos.boxBotao }>
          {/* <Button 
            title="Signup" 
            // onPress = { console.log("nada ainda") } 
            color="#00000000"
            onPress={cadastrarConta}
            /> */}
            
            <AppButton title="Signup" onPress={cadastrarConta} />
        </View>

        <View>
          
            <Text
              style={estilos.cadastroTexto}
              onPress={() => navigation.navigate('TelaLogin')}>
              Voltar para login
            </Text>
          
        </View>

      </View>
    </View>
  )
}