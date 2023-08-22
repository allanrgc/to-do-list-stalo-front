import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

import estilos from './estilos';


const FilterTask = ({ tasks, setFilteredTasks }) => {
  const [activeFilter, setActiveFilter] = useState("all");

//   const [activeFilter, setActiveFilter] = useState("all");

  // const handleFilterPress = (type) => {
  //   setActiveFilter(type);
  // };

  // useEffect(() => {
  //   if (activeFilter === "toDo") {
  //     const filteredTasks = tasks.filter((task) => task.status === "toDo");
  //     setFilteredTasks(filteredTasks);
  //   } else if (activeFilter === "done") {
  //     const filteredTasks = tasks.filter((task) => task.status === "done");
  //     setFilteredTasks(filteredTasks);
  //   } else {
  //     setFilteredTasks(tasks);
  //   }
  // }, [activeFilter, tasks]);

  return (
    // <View style={styles.container}>
    //   <Button title="Todas" onPress={() => handleFilterPress(null)} />
    //   <Button title="A fazer" onPress={() => handleFilterPress("toDo")} />
    //   <Button title="Feitas" onPress={() => handleFilterPress("done")} />
    // </View>
    <View style={ estilos.topBottomsContainer }>
    <TouchableOpacity 
      style={[
        estilos.topBottoms,
        activeFilter === "all" && estilos.activeButton,
      ]} 
      onPress={() => handleFilterPress("all")}>
      <Text style={[
        estilos.topButtonsText,
        activeFilter === "all" && estilos.activeButtonText,
      ]} >Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[
        estilos.topBottoms,
        activeFilter === "toDo" && estilos.activeButton,
      ]} 
      onPress={() => handleFilterPress("toDo")}>
      <Text style={[
        estilos.topButtonsText,
        activeFilter === "toDo" && estilos.activeButtonText,
      ]}>A fazer</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[
        estilos.topBottoms,
        activeFilter === "done" && estilos.activeButton,
      ]} 
      onPress={() => handleFilterPress("done")}>
      <Text style={[
        estilos.topButtonsText,
        activeFilter === "done" && estilos.activeButtonText,
      ]}>Feitas</Text>
    </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default FilterTask;
