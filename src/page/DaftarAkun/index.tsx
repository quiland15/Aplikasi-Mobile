import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputText from "../../components/InputText";

export default function DaftarAkun() {
    return(
        <>
            <View style={Styles.container}>
                <Image source={require('../../assets/img/Logo1.png')}/>
                <Text style={Styles.title}>Selamat Datang</Text>
                <Text style={Styles.subtitle}>Masuk ke akun PupukKu Anda</Text>
                <InputText placeholder="Contoh: 081234567890" text="Nomor HP" MarginTop="47"/>
                <InputText placeholder="Masukkan Password" text="Password"/>
            </View>
        </>
    );
};

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: '80',
        marginHorizontal: '24'
    },
    title: {
        fontFamily: 'Inter_18pt-SemiBold',
        fontSize: 24,
        marginTop: '28',
    },
    subtitle: {
        fontFamily: 'Inter_18pt-Light',
        fontSize: 16,
        marginTop: '10',
    }
})