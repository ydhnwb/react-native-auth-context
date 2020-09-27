import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import { ItemTodo } from '../../../components/ItemTodo';

export function TodoFragment({ navigation }) {
    const [todos, setTodos] = useState([])

    const fetchTodos = async () => {
        try {
            let status_code;
            const resp = await axios.get("https://btm-rn.herokuapp.com/api/v1/todo")
                .then((res) => {
                    status_code = res.status;
                    return res.data;
                })
                .catch(err => {
                    status_code = err.response.status;
                })

            if (status_code === 200) {
                setTodos(resp.results)
            } else {
                console.log("Error")
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        navigation.addListener("focus", () => {
            fetchTodos();
        })
    }, [])

    const deleteTodo = async (id) => {
        const response = await fetch(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .catch(err => console.log(err))

        if (response.success === true) {
            fetchTodos();
        } else {
            console.log("Tidak dapat menghapus")
        }
    }

    const createTwoButtonAlert = (todo) =>
        Alert.alert(
            "Hapus",
            "Anda yakin ingin mengapus todo ini?",
            [
                {
                    text: "Edit",
                    onPress: () => navigation.navigate("Detail", {
                        data: todo
                    })
                },
                {
                    text: "Batal",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Hapus", onPress: () => deleteTodo(todo._id) }
            ],
            { cancelable: true }
        );

    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{
                flexDirection: "row",
            }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{
                    margin: 8
                }}>
                    <Ionicons name="menu-outline" size={32} color="black" />
                </TouchableOpacity>
                <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}>All task</Text>
            </View>
            <View style={{ margin: 16 }}>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={todos}
                    renderItem={({ item }) => (
                        <ItemTodo todo={item} pressHandler={createTwoButtonAlert} />
                    )}
                />
            </View>
        </View>
    )
}