import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({label="Sign In", color='#3498db', colortext='#fff', onPress, radius=1, margintop=10, fontfamily='Roboto', fontsize=1, Width='100%'}) {
    return(
        <>
            <TouchableOpacity style={styles.button({color, radius, margintop, Width})} onPress={onPress}>
              <Text style={styles.buttonText({colortext, fontfamily, fontsize })}>{label}</Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
  button: ({color, radius, margintop, Width}) => ({
    width: Width,
    backgroundColor: color,
    paddingVertical: 14,
    borderRadius: radius,
    alignItems: 'center',
    marginTop: margintop,
  }),
  buttonText: ({colortext, fontfamily, fontsize}) => ({
    color: colortext,
    fontSize: fontsize,
    fontWeight: '600',
    fontFamily: fontfamily,
  })
})