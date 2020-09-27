import React, { useState } from "react";
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import skills from './../../../utils/skills.json';
import ItemSkill from '../../../components/ItemSkill';
import Ionicons from 'react-native-vector-icons/Ionicons';


export function SkillFragment({ navigation }) {
    const [aSkills, setSkills] = useState(skills)

    return (
        <View style={styles.root}>
            <View style={{
                flexDirection: "row",
            }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{
                    margin: 8
                }}>
                    <Ionicons name="menu-outline" size={32} color="black" />
                </TouchableOpacity>
                <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}>Skills</Text>
            </View>
            <FlatList style={styles.body}
                keyExtractor={(item) => item.id.toString()}
                data={aSkills}
                renderItem={({ item }) => (
                    <ItemSkill skill={item} />
                )}
            />
        </View>)
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
    },
    body: {
        marginHorizontal: 16
    }

})