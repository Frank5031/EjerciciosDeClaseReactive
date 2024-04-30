import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#FCA311',
  },
  item: {
    padding: 10,
    paddingStart: 30,
    fontSize: 18,
    height: 44,
    width: 340,
    left:20,
    borderBottomWidth: 1,
    borderRadius: 30,
    backgroundColor: '#13213C',
    margin: 5,
    marginTop: 15,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    border: "#13213C",

  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#13213C',
    backgroundColor: '#13213C',
    color: 'white',
    borderRadius: 5,
    padding: 5,
    paddingStart: 15,
    fontWeight: 'bold',
    borderRadius: 50,
  },
  addButton: {
    backgroundColor: '#13213C',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  Tittle:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 25,
    padding: 10,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  deleteButton: {
    backgroundColor: '#13213C',
    padding: 10,
    borderRadius: 5,
    width: 35,
    height: 40,
    left:320,
    
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});
 
const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
 
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, title: task }]);
      setTask('');
    }
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter(todo => todo.id !== id));
  };
 

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
<View style={styles.container}>
  <Text style={styles.Tittle}>Todo List Ejemplo</Text>
  <Image
        style={styles.tinyLogo}
        source={require('./assets/lista-de-verificacion.png')}
      />
  <View style={styles.inputContainer}>
    <TextInput
          style={styles.textInput}
          value={task}
          onChangeText={setTask}
          placeholderTextColor={'white'}
          placeholder="Agregar nueva tarea"
        />
    <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
    <Text style={styles.addButtonText}>  +  </Text>
    </TouchableOpacity>
  </View>
  <ScrollView>
        {tasks.map((task) => (
        <><Text key={task.id} style={styles.item}>{task.title}
          </Text><TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}> X </Text>
          </TouchableOpacity></>

        ))}
  </ScrollView>
  <Image
        source={require('./assets/fondo.png')}
      />
</View>
  );
};
 
export default TodoList;