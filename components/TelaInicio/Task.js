import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons, Feather } from '@expo/vector-icons';
import { TaskModal } from "./taskModal";
import axios from 'axios'


export class Task extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          show: false,
          isSelected: false,
          
      };
  }
  // const [selectedTask, setSelectedTask] = useState(null);

  showModal = () => {
      this.setState({ show: true });
  }

  closeModal = () => {
      this.setState({ show: false });
  }

  deleteTask = () => {
    const { onDelete, text } = this.props;
    const taskToDelete = tasks.find(task => task.description === text);

    if (taskToDelete) {
      axios.delete(`http://127.0.0.1:8000/api/task/${taskToDelete.id}`)
        .then(response => {
          onDelete();
        })
        .catch(error => {
          console.error('Erro ao excluir tarefa:', error);
        });
    }
  }

  render() {
      const { text, onEdit, onComplete, onDelete } = this.props;
      const { show, isSelected } = this.state;

      return (
          <TouchableOpacity style={styles.item} onLongPress={this.showModal}>
              <View style={styles.itemLeft}>
                <BouncyCheckbox
                value={isSelected}
                onValueChange={value => this.setState({ isSelected: value })}
                // onValueChange={setSelection}
                fillColor="#39C4A5"
                
                />
                <Text style={styles.itemText}>{text}</Text>
                
                <TaskModal
                ref={(target) => popupRef = target}
                onTouchOutside={this.closeModal}
                visible={show}
                onClose={this.closeModal}
                onDelete={onDelete}
              />
              </View>
              <View>
                <Feather name="more-vertical" size={24} color="#9FA5C0" />
              </View>
          </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 2,
      width: 400
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginLeft: 12
    },
    itemText: {
      maxWidth: '80%',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
  
  export default Task;