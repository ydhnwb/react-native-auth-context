import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ItemProfile from '../../../components/ItemProfile';
import { Context } from './../../../stores/Store';
import AsyncStorage from "@react-native-community/async-storage";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ProfileFragment({ navigation }) {
    const { state, dispatch } = useContext(Context);

    const personDatas = [
        {
            attr: "Alamat",
            content: "Jl. Raya Lorem Ipsum No. 28"
        },
        {
            attr: "Phone",
            content: "+62 822 123 123"
        },
        {
            attr: "Linkedin",
            content: "Prieyudha Akadita S"
        },
        {
            attr: "Lainnya",
            content: "Lorem ipsum dolor sit amets"
        }
    ]

    const doLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }

    const deleteToken = async () => {
        await AsyncStorage.removeItem('RN_TOKEN');
        doLogout()
    };

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
                <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}>Profile</Text>
            </View>
            <View style={styles.body}>
                <Image
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/26734262?s=460&u=dc04a2de272600df255cc10d886e21d0eaf2b5f3&v=4' }}
                    style={{ marginTop: 16, width: 64, height: 64, borderRadius: 400 / 2 }}
                />
                <Text style={styles.personName}>Prieyudha Akadita S</Text>
                <Text>akaditasustono@gmail.com</Text>
                <TouchableOpacity onPress={() => deleteToken()}>
                    <Text style={{
                        padding: 16,
                        fontWeight: "bold",
                        fontSize: 16,
                        alignSelf: "flex-end"
                    }}>Log out</Text>
                </TouchableOpacity>
                <FlatList
                    keyExtractor={(item) => item.attr}
                    data={personDatas}
                    renderItem={({ item }) => (
                        <ItemProfile personData={item} />
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
    },
    body: {
        margin: 16,
        flexDirection: "column",
        alignItems: "stretch",
    },
    personName: {
        fontSize: 18,
        fontWeight: "bold"
    }
})