import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function InputText({placeholder='default', text='default', MarginTop='28'}) {
    return(
        <>
        <View style={styles.container(MarginTop)}>
            <Text style={styles.teks}>{text}</Text>
            <TextInput style={styles.input} placeholder={placeholder}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: MarginTop => ({
        width: '100%',
        marginTop: MarginTop,
    }),
    input: {
        borderRadius: 10,
        borderColor: '#ACACAE',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: '17',
    },
    teks: {
        fontFamily: 'Inter_18pt-Regular',
        fontSize: 15,
        alignSelf: 'flex-start',
        color: '#000000',
        marginBottom: '2',
    }
})