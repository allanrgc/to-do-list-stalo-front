import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard } from "react-native";
import Task from "./Task";
import estilos from './estilos';
import getMeses from './mesesArray'
import { Popup } from "./popup";

const popuplist = [
  {
    id: 1,
    name: 'Task'
  },
  {
    id: 2,
    name: 'Task222'
  },
  {
    id: 3,
    name: '333Task'
  },
]

export default function TelaInicio () {
  let day = new Date().getDate(); //Para obter o dia
  let month = new Date().getMonth() + 1; //Para obter o mês
  let year = new Date().getFullYear(); //Para obter o ano

  
  const [taskItems, setTaskItems] = useState([]);
  const [task, setTask] = useState();
  const buttonAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  
    let popupRef = React.createRef()

    const showPopup = () => {
      popupRef.show()
    }
    const onClosePopup = () => {
      popupRef.close()
    }

  return (
    <View style={ estilos.mainContainer }>
      <View style={estilos.topHeader}>
        <Text style={ estilos.tituloFiltrar }>Filtrar</Text> 
        <View style={ estilos.topBottomsContainer }>
          <TouchableOpacity 
            style={estilos.topBottoms} onPress={() => handleFilterPress("all")}>
            <Text>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={estilos.topBottoms} onPress={() => handleFilterPress("toDo")}>
            <Text>A fazerrr</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={estilos.topBottoms} onPress={() => handleFilterPress("done")}>
            <Text>Feitas</Text>
          </TouchableOpacity>

        </View>
      </View>
      
      


      <ScrollView style={estilos.tasks} contentContainerStyle={{
          flexGrow: 1
        }}keyboardShouldPersistTaps='handled'>
        <View style={estilos.tasksWrapper}>
        <Text style={estilos.sectionTitle}>Today's tasks</Text>
        <Text>{day} de {getMeses(month)} de {year}</Text>
        <View style={estilos.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>

      {/* <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilos.writeTaskWrapper}
      >
        <TextInput style={estilos.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => buttonAddTask()}>
          <View style={estilos.addWrapper}>
            <Text style={estilos.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> */}

      <View style={ estilos.totalTasks }>
        <Text style={ estilos.totalTasksText } >1/3</Text>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilos.writeTaskWrapper}
      > 
      <TouchableOpacity style={ estilos.adcionarTask } onPress={showPopup}>
        <View style={estilos.addWrapper}>
          <Text style={estilos.addText}>+</Text>
        </View>
        {/* <Button 
          title='Adcionar'
          style={{color: '#1fcc79', borderRadius: 100}}
        /> */}
        <Popup 
          title='Demon popup'
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
          data={popuplist}
          />
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  )
}
