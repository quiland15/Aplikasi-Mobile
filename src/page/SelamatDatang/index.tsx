import React from "react";
import { View, StyleSheet, Image } from "react-native";
import InputText from "../../components/molecules/InputText";
import Button from "../../components/atoms/Button";
import Teks from "../../components/atoms/Teks";

export default function SelamatDatang() {
    return(
        <>
            <View style={Styles.container}>
                <Image source={require('../../assets/img/Logo1.png')}/>
                <Teks label="Selamat Datang" fontfamily="Inter_18pt-SemiBold" fontsize={24} margintop={28}/>
                <Teks label="Masuk ke akun PupukKu anda" fontfamily="Inter_18pt-Light" fontsize={16} margintop={10}/>
                <InputText placeholder="Contoh: 081234567890" text="Nomor HP" MarginTop="47"/>
                <InputText placeholder="Masukkan Password" text="Password"/>
                <Button radius={10} margintop={17} color="#4CAF50" label="Masuk"/>
                <Teks label="Belum Punya Akun ?" fontfamily="Inter_18pt-Medium" fontsize={12} margintop={38}/>
                <Button radius={10} margintop={17} color="#D68D33" label="Daftar Sekarang" fontfamily="Inter_18pt-Bold"/>
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
        marginHorizontal: '24',
    }
})