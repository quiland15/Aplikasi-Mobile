import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Teks({label="Default Teks", margintop=10, fontfamily="Roboto", fontsize=10}) {
    return(
        <Text style={styles.teks({margintop, fontfamily, fontsize})}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    teks: ({margintop, fontfamily, fontsize}) => ({    
        marginTop: margintop,
        fontFamily: fontfamily,
        fontSize: fontsize,
    }),
})