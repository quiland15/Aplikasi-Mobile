import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import Teks from "../../components/atoms/Teks";
import InputText from "../../components/molecules/InputText";
import Button from "../../components/atoms/Button";

export default function DaftarAkun() {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../assets/img/Logo1.png')}/>
                <Teks label="Daftar Akun" fontfamily="Inter_18pt-SemiBold" fontsize={24} margintop={28}/>
                <Teks label="Bergabung dengan PupukKu" fontfamily="Inter_18pt-Light" fontsize={16} margintop={10}/>
                <InputText text="Nama Lengkap" placeholder="Masukkan Nama Lengkap"/>
                <InputText text="Nomor HP" placeholder="contoh: 081234567890"/>
                <InputText text="Alamat" placeholder="Masukkan Alamat Lengkap Anda" tinggi="132" multi={true}/>
                <Teks/>
                <Button/>
                <Button/>
                <InputText/>
                <InputText/>
                <Teks/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: '80',
        marginHorizontal: '24',
    }
})