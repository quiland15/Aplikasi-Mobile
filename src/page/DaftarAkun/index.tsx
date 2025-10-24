import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import Teks from "../../components/atoms/Teks";
import InputText from "../../components/molecules/InputText";
import Button from "../../components/atoms/Button";
import CardButton from "../../components/atoms/CardButton";

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
                <Teks label="Jenis Akun" fontfamily="Inter_18pt-Regular" fontsize={15} alignself="flex-start"/>
                <View style={styles.CardRow}>
                    <CardButton gambar="farmer" fontfamily="Inter_18pt-SemiBold" label="Petani"/>
                    <CardButton gambar="shop" margintop={10} fontfamily="Inter_18pt-SemiBold" label="Shop"/>
                </View>
                <InputText text="Password" placeholder="Password Anda" />
                <InputText text="Konfirmasi Password" placeholder="Konfirmasi Password Anda"/>
                <Button color="#4CAF50" radius={10} margintop={15} fontfamily="Inter_18pt-SemiBold" label="Daftar" fontsize={17}/>
                <View style={styles.CardRow}>
                    <Teks label="Sudah Punya Akun?" fontfamily="Inter_18pt-Medium" fontsize={13}/>
                    <Button color="white" label="Masuk" colortext="black" fontsize={13} Width="15%"/>
                </View>
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
    },
    CardRow: {
        flexDirection: 'row',
    }
})