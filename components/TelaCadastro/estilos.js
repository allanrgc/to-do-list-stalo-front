import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
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
  },
  textoRetorno: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 35,
    textAlign: "center",
    margin: 120,
    padding: 20,
    height: 100,
    width: 300,
    color: '#2E3E5C',
  },

  
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d5d5d5',
    borderRadius: 10,
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
  boxBotao: {
    justifyContent: 'center',
    width:327,
    height:56,
    marginTop: 20,
    // backgroundColor: '#1fcc79',
    borderRadius: 45,
    justifyContent: 'center',
    marginBottom: 100

  },
  cadastroTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#400303',
    height: 200,
    marginTop: 50,
  },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: '#1fcc79',
      borderRadius: 45,
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    appButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});

export default estilos;