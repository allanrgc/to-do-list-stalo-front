import React from 'react';
import { View, Modal, Text, TouchableOpacity, Dimensions, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import axios from 'axios'

const deviceHeight = Dimensions.get("window").height

export class TaskModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            editTask: ''
        }
    }

      
// visible, onClose, onDelete
showModal = () => {
    this.setState({show: true})
}
closeModal = () => {
    this.setState({show:false})
}
editTask = () => {
    const { editTask, onClose } = this.props;
    const { editTask: taskToEdit } = this.state;
    editTask(taskToEdit);
    onClose();
}

completeTask = () => {
    const { onAddTask, onClose } = this.props;
    const { editTask } = this.state;
    onAddTask(editTask);
    onClose();
}

// deleteTask = () => {
//     const {onDelete} = this.props;
//     onDelete();
//     this.closeModal();
// }


deleteTask = () => {
    const { onDelete } = this.props;
    const { editTask } = this.state;

    if (editTask) {
      const taskToDelete = tasks.find(task => task.description === editTask);
      
      if (taskToDelete) {
        // Fazer uma requisição DELETE para excluir a tarefa na API
        axios.delete(`http://127.0.0.1:8000/api/task/${taskToDelete.id}`)
          .then(response => {
            onDelete();
            this.closeModal();
          })
          .catch(error => {
            console.error('Erro ao excluir tarefa:', error);
          });
      }
    }
  }

renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: 400}}/>
    if (!onTouch) return view
    return (
        
        <TouchableWithoutFeedback onPress={this.closeModal} style={{flex: 1}}>
            {view} 
        </TouchableWithoutFeedback>
    )
}

renderContent = () => {
    const {data} = this.props
    const {editTask}=this.state
    return(
        <View style={estilos.modalContainer}>
            <View style={estilos.modalContent}>
                <TouchableOpacity
                    title="Editar"
                    onPress={this.editTask}
                    style={estilos.modalButton}
                >
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Feather name="edit" size={21} color="#9FA5C0" />
                        <Text style={{color: '#9FA5C0', fontSize: 16}}> Editar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    title="Concluir"
                    onPress={this.completeTask}
                    style={estilos.modalButton}
                >
                    <View style={{
                        flexDirection: 'row'

                    }}>
                        <AntDesign name="checkcircle" size={24} color="#39C4A5" />
                        <Text style={{color: '#39C4A5', fontSize: 16}}> Concluir</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    title="Exluir"
                    onPress={this.deleteTask}
                    style={estilos.modalButton}
                >
                    <View style={{
                        flexDirection: 'row'

                    }}>
                        <Feather name="trash-2" size={24} color="#FF6464" />
                        <Text style={{color: '#FF6464', fontSize: 16}}> Excluir</Text>
                    </View>
                </TouchableOpacity>    
            </View>
        </View>
    )
}
renderItem = ({item}) => {
    return(
        <View style={{height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: '20'}}>
            <Text style={{ fontSize: 18, fontWeight: 'normal', color:'#182E44'}}>{item.name}</Text>
        </View>
    )
}

renderSeparator = () => {
    return(
        <View
        style={{
            opacity: 0.1,
            backgroundColor: '#182E44',
            height: 1
        }}/>
    )
    
}

render() {
    let {show} = this.state
    const {onTouchOutside, title} = this.props

    const { selectedTaskIndex } = this.props;
    const modalTop = selectedTaskIndex * 10;
    return (
        <Modal
        visible={show}
        transparent={true}
        animationType={'fade'}
        onRequestClose={this.closeModal}
        >
        <View style={{ justifyContent: 'center', alignItems: 'flex-end'  }}>
            <View style={{ 
                // padding: 120,
                // marginVertical: 90,
                }}>
                    {/* {this.renderOutsideTouchable(onTouchOutside)} */}
                <View style={{
                    backgroundColor:'#FFFFFF',
                    alignItems: 'center', 
                    flexDirection: 'column'
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    {this.renderContent()}
                    {this.renderOutsideTouchable(onTouchOutside)}

                </View>
            
            </View>
        </View>
        </Modal>

    );
    };
}

const estilos = StyleSheet.create({
    modalContainer: {
    
    },
    modalContent: {
        flexDirection: 'column',
        
    },
    modalButton: {
      width: 90,
      height: 30,
      marginVertical: 9
    },
    modalButtonText: {
    //   fontWeight: "bold",
      color: "white",
    },
  });