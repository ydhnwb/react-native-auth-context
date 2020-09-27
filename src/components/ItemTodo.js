import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ItemTodo = ({ todo, pressHandler }) => {
  return (
    <TouchableOpacity style={styles.todo_root} onPress={() => pressHandler(todo)}>
      <Text style={styles.todo_item}>{todo.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo_root: {
      elevation: 2
  },
  todo_item: {
      color: "#464646",
      padding: 16,
      marginTop: 8,
      marginBottom: 8
  }
})