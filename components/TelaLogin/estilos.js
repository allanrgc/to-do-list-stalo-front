import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 35,
    textAlign: "center",
    margin: 120,
    padding: 20,
    height: 100,
    width: 300,
    color: '#2E3E5C',
    // backgroundColor: 'black',
    // borderWidth: 1
  },

  
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
    // padding: 15,
    margin: 15, 
    marginBottom: 30,
    height: 200,
    width: 300,
  },
  
  

  iconEye:{
    position: 'absolute',
    right: 15,
    color: '#9FA5C0'
  },
  linhaInput: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 15,

  },
  inputNormal: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    width: 327,
    height: 56,
    borderRadius: 45,
    
  },
  inputFocus: {
    borderWidth: 1,
    borderColor: '#1fcc79',
    borderRadius: 45,
    width: 327,
    height: 56,
    
  },
  forgotPass: {
    width:327,
    height:56,
    marginTop: 20,
    backgroundColor: '#00000000',
    
    justifyContent: 'center'
  },
  boxBotao: {
    width:327,
    height:56,
    marginTop: 20,
    backgroundColor: '#1fcc79',
    borderRadius: 45,
    justifyContent: 'center',
    marginBottom: 100

  },
  botaoLogin:{
    
  },
  cadastroTexto: {
    // fontSize: 15,
    //,
    color: '#400303',
    height: 200,
    width: 300,
    marginTop: 50

  },
});

export default estilos;