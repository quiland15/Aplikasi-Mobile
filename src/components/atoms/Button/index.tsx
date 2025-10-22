import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({label="Sign In", color='#3498db', colortext='#fff', onPress, radius=1, margintop=10, fontfamily='Roboto'}) {
    return(
        <>
            <TouchableOpacity style={styles.button({color, radius, margintop})} onPress={onPress}>
              <Text style={styles.buttonText({colortext, fontfamily})}>{label}</Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
  button: ({color, radius, margintop}) => ({
    width: '100%',
    backgroundColor: color,
    paddingVertical: 14,
    borderRadius: radius,
    alignItems: 'center',
    marginTop: margintop,
  }),
  buttonText: ({colortext, fontfamily}) => ({
    color: colortext,
    fontSize: 17,
    fontWeight: '600',
    fontFamily: fontfamily,
  })
})