import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  mainContainer:{
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 60,
    // paddingRight: 20,
    // paddingLeft: 20,
    backgroundColor: '#fff'
  },
  topHeader:{
    // backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    paddingTop: 50
  },
  tituloFiltrar:{
    color: '#000',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topBottomsContainer:{
    flexDirection: 'row',
    // ,
    // width: 380,
    // height: 48,
    // backgroundColor: 'green', MUDA O FUNDO TODO
    justifyContent: 'space-evenly',
    // borderRadius: 32,
    // backgroundColor: '#fff'
    
  },
  topBottoms:{
    flexDirection: 'row',
    width:89,
    height:48,
    // marginTop: 100,
    backgroundColor: '#1fcc79',
    color:'green',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: 'white'
  },
  tasks:{
    width: '100%',
    backgroundColor: '#F4F5F7'
  },
  totalTasks:{
    textAlign: 'left'
  },
  totalTasksText:{
    textAlign: 'left'
  },
  adcionarTask:{

  },


  tasksWrapper: {
    // paddingTop: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },


  writeTaskWrapper: {
    //position: 'absolute',
    // zIndex: 1,
    bottom: -10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#1fcc79',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    // borderWidth: 1,
  },
  addText: {},

});

export default estilos;