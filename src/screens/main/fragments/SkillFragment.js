import React, { useState } from "react";
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import skills from './../../../utils/skills.json';
import ItemSkill from '../../../components/ItemSkill';



export function SkillFragment() {
    const [aSkills, setSkills] = useState(skills)

    return (
        <View style={styles.root}>
            <FlatList
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
        margin: 16,
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
    }
})