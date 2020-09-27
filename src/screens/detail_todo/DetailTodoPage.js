import React, { useEffect, useState } from 'react';
import {
    View,
    Button,
    StyleSheet,
    ScrollView,
    TextInput,
    StatusBar
} from 'react-native';

export function DetailTodoPage({ route, navigation }) {
    const [currentTodo, setCurrentTodo] = useState(route.params.data)

    const onTodosNameChange = (e) => {
        const item = {
            _id: route.params.data._id,
            title: e
        }
        setCurrentTodo(item);
    }

    const markAsCompleted = async (shouldMarkAsCompleted) => {
        const obj = currentTodo
        obj.title = currentTodo.title
        if (shouldMarkAsCompleted != null) {
            obj.isComplete = shouldMarkAsCompleted
        }
        console.log(JSON.stringify(obj))
        const response = await fetch(`https://btm-rn.herokuapp.com/api/v1/todo/${currentTodo._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .catch(err => console.log(err))

        console.log(response)

        if (response.success == true) {
            navigation.goBack()
        } else {
            console.log("failed update as complete")
        }
    }


    return (
        <View>
            <ScrollView style={styles.root}>
                <TextInput
                    value={currentTodo.title}
                    style={styles.input}
                    onChangeText={onTodosNameChange}
                    placeholder="Todo's title" />
                <Button
                    onPress={() => markAsCompleted(true)}
                    title="Mark as completed"
                    color="#008040"
                />
                <Button
                    onPress={() => markAsCompleted(null)}
                    title="Update"
                    color="#ff5500"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 16
    },
    input: {
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",

    }
})