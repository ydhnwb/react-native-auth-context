import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text, View
} from 'react-native';


export default function ItemProfile({ personData }) {

    return (
        <TouchableOpacity styles={styles.todo_item} onPress={() => console.log()}>
            <View style={styles.todo_item}>
                <Text>{personData.attr}</Text>
                <Text>{personData.content}</Text>
            </View>
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
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 8
    }
})