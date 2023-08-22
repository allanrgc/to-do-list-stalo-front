import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Task from "./Task";
import estilos from './estilos';
import getMeses, {dias_semana} from './mesesArray'
import { Popup } from "./popup";
import {  Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TaskModal } from "./taskModal";
import FilterTask from "./filterTask";
import axios from 'axios';


export default function TelaInicio ({isTrue, onLogout}) {
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1; 
  let year = new Date().getFullYear();
  let data = new Date().getDay();

  

  // const removeToken = async () => {
  //   try {
  //     await AsyncStorage.removeItem('authToken');
  //   } catch (error) {
  //     console.error('Erro ao remover o token:', error);
  //   }
  // };

  const [selectedTask, setSelectedTask] = useState(null);
  const openModal = (task) => {
    setSelectedTask(task);
  };
  const [tasks, setTasks] = useState([])
  const [taskItems, setTaskItems] = useState([]);
  const [task, setTask] = useState();
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/task')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
      });
  }, []);

  // const addTask = (newTask) => {
  //   if (newTask.trim() !== '') {
  //     setTaskItems([...taskItems, newTask]);
  //     console.log(taskItems)
  //   }
  // };
  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      axios.post('http://127.0.0.1:8000/api/task', { description: newTask })
        .then(response => {
          setTasks([...tasks, response.data]);
        })
        .catch(error => {
          console.error('Erro ao adicionar tarefa:', error);
        });
    }
  };

  const editTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  // const deleteTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy)
  //   setSelectedTask(null);
  // }
  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    axios.delete(`http://127.0.0.1:8000/api/task/${taskToDelete.id}`)
      .then(response => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.error('Erro ao excluir tarefa:', error);
      });
  };
  

  
    // let popupRef = React.createRef()

    const showPopup = () => {
      popupRef.showModal()
    }
    const onClosePopup = () => {
      popupRef.closeModal()
    }
    const logout = () => {
      axios.post('http://127.0.0.1:8000/api/logout')
        .then(response => {
          onLogout();
        })
        .catch(error => {
          console.error('Erro ao fazer logout:', error);
        });
    };
    

  return (
    <View style={ estilos.mainContainer }>
      <View style={estilos.topHeader}>
        <Text style={ estilos.tituloFiltrar }>Filtrar</Text> 
        <FilterTask tasks={tasks} setFilteredTasks={setTasks} />
      </View>    


      <ScrollView style={estilos.tasks} contentContainerStyle={{
          flexGrow: 1
        }}keyboardShouldPersistTaps='handled'>
        <View style={estilos.dateSection}>
          <Text style={estilos.sectionTitle}>{dias_semana[data]} {day} de {getMeses(month)} de {year}</Text>
        </View>
        <View style={{marginTop: 2}}>
          <View style={estilos.items}>

            {taskItems.map((item, index) => (
          <TouchableOpacity key={index} 
          onLongPress={() => {openModal(item); setSelectedTaskIndex(index)}} >
            <Task text={item} 
              onEdit={() => editTask(index)}
              onComplete={() => completeTask(index)}
              onDelete={() => deleteTask(index)} />
          </TouchableOpacity>
        ))}
        
          </View>
          
        </View>
      
      </ScrollView>
      


      <View style={ estilos.totalTasks }>
        <Text style={ estilos.totalTasksText } >Total de tarefas: 1/3</Text>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilos.writeTaskWrapper}
      > 
      <TouchableOpacity style={ estilos.tabBottom } onPress={showPopup}>
        <View style={estilos.addWrapper}>
          <Feather name="home" size={24} color="#1FCC79" />
          <Text style={estilos.addText}>Home</Text>

        </View>
        
        
      </TouchableOpacity>
      <TouchableOpacity style={ estilos.adcionarTask } onPress={showPopup}>
        <View style={estilos.addWrapperCircle}>
        <Ionicons name="add" size={42} color="white" />
        </View>
        
        <Popup 
          title='Criar nova tarefa'
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
          onAddTask={addTask}
          />
      </TouchableOpacity>

      <TouchableOpacity style={ estilos.tabBottom } onPress={logout}>
        <View style={estilos.addWrapper}>
          <MaterialIcons name="logout" size={24} color="#1FCC79" />
          <Text style={estilos.addText}>Logout</Text>
        </View>


        <TaskModal
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
          visible={selectedTask !== null}
          onClose={() => setSelectedTask(null)}
          onDelete={() => {deleteTask(setSelectedTask(null))
          }}
        />
        
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  )
}


