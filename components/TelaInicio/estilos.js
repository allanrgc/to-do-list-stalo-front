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
    color: '#2E3E5C',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 15
  },
  topBottomsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  topBottoms:{
    flexDirection: 'row',
    width:89,
    height:48,
    // marginTop: 100,
    backgroundColor: '#F4F5F7',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: 'black'
  },
  topButtonsText:{
    // alignItems: 'center',
    // justifyContent: 'center',
    color: '#9FA5C0'
  },
  activeButton: {
    backgroundColor: '#1fcc79',
    tintColor: 'white'
  },
  activeButtonText: {
    color: 'white'
  },
  tasks:{
    width: '100%',
    backgroundColor: '#F4F5F7',
  },
  totalTasks:{
    justifyContent: 'flex-start'
  },
  totalTasksText:{
    textAlign: 'left'
  },
  adcionarTask:{
    zIndex: 1
  },


  dateSection: {
    backgroundColor: '#fff',
    marginTop: 8,
    height: 60,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 30, 
    color: '#2E3E5C'
  },
  items: {
    // marginLeft: 30,
  },


  writeTaskWrapper: {
    position: 'sticky',
    zIndex: 1,
    // bottom: -10,
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
    // backgroundColor: '#1fcc79',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
  },
  addWrapperCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#1fcc79',
    borderRadius: 60,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
  },
  addText: {
    color: '#1FCC79',
    fontSize: 12
  },

});

export default estilos;