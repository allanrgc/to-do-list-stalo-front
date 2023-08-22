import {Modal, Dimensions, TouchableOpacity, StyleSheet, View, Text, TouchableWithoutFeedback, FlatList, TextInput, Button} from 'react-native';
import React from 'react'
import axios from 'axios'

const deviceHeight = Dimensions.get("window").height

export class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            newTask: ''
        }
    }


    addTask = () => {
        const { newTask } = this.state;
        
        if (newTask.trim() !== '') {
          axios.post('http://127.0.0.1:8000/api/task', { description: newTask })
            .then(response => {
              onAddTask(response.data);
              this.closeModal();
            })
            .catch(error => {
              console.error('Erro ao adicionar tarefa:', error);
            });
        }
      }

    showModal = () => {
        this.setState({show: true})
    }
    closeModal = () => {
        this.setState({show:false})
    }
    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex:1, width:'100%'}}/>
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }
    renderTitle = () => {
        const {title} = this.props
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{
                    color: '#182E48',
                    fontSize: 21,
                    fontWeight: '500',
                    marginTop: 21,
                    marginBottom: 10
                }}>
                    {title}
                </Text>
            </View>
        )
    }

    renderContent = () => {
        const {data} = this.props
        const {newTask}=this.state
        return(
            <View style={{borderRadius: 30}}>
                <FlatList
                style={{marginBottom: 20}}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={this.renderItem}
                extraData={data}
                keyExtractor={(item,index) => index.toString()}
                ItemSeparatorComponent={this.renderSeparator}
                contentContainerStyle={{
                    paddingBottom: 40
                }}/>
                <TextInput
                    style={{ borderWidth: 1, borderRadius:30, height:60, borderColor: '#ccccccaa', margin: 24, padding: 21 }}
                    placeholder="Descrição"
                    value={newTask}
                    onChangeText={(text) => this.setState({ newTask: text })}
                />
                <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <TouchableOpacity
                        title="Cancelar"
                        onPress={() => {
                            // this.props.onAddTask(newTask);
                            this.closeModal();
                        }}
                    >
                        <View style={{
                            width:160,
                            height:57,
                            backgroundColor: '#f4f5f7aa',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 90
                        }}>
                            <Text style={{fontWeight:'bold'}}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Adicionar Tarefa"
                        onPress={() => {
                            this.props.onAddTask(newTask);
                            // this.closeModal();
                        }}
                    >
                        <View style={{
                            width:150,
                            height:57,
                            backgroundColor: '#1fcc79',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 90

                        }}>
                            <Text style={{
                                fontWeight:'bold', color:'white'}} 
                                >Criar</Text>
                        </View>
                    </TouchableOpacity>    
                </View>
                

            </View>
        )
    }
    renderItem = ({item}) => {
        return(
            <View style={{height: 50, flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: '20'}}>
                <Text style={{fontSize: 18, fontWeight: 'normal', color:'#182E44'}}>{item.name}</Text>
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

        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
                style={{ }}
                >

                <View style={{flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'}}
                >
                        {this.renderOutsideTouchable(onTouchOutside)}
                        <View style={{
                            backgroundColor:'#FFFFFF',
                            width: '100%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            paddingHorizontal: 10,
                            maxHeight: deviceHeight * 0.4,
                        }}>
                        {this.renderTitle()}
                        {this.renderContent()}
                        </View>
                </View>

            </Modal>
        )
    }
}