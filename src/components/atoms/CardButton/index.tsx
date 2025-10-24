import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Farmer from '../../../assets/img/svg/Farmer.svg';
import Box from '../../../assets/img/svg/Box.svg';
import Shop from '../../../assets/img/svg/Shop.svg';
import ShoppingCartBlack from '../../../assets/img/svg/Shopping_CartBlack.svg';
import ShoppingCart from '../../../assets/img/svg/Shopping_Cart.svg';
import TimeMachine from '../../../assets/img/svg/Time_Machine.svg';

const icon = {
    farmer: Farmer,
    box: Box,
    shop: Shop,
    shoppingcartblck: ShoppingCartBlack,
    shoppingcart: ShoppingCart,
    timemachine: TimeMachine,
};


export default function CardButton({label="default", gambar="Default", margintop=0, fontfamily="Roboto"}) {
    const Icon = icon[gambar]
    return(
        <TouchableOpacity style={styles.Button}>
            <Icon/>
            <Text style={styles.teks({margintop, fontfamily})}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    Button: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        width: '162',
        margin: '20',
        height: '114',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    teks: ({margintop, fontfamily}) => ({
        fontSize: 18,
        marginTop: margintop,
        fontFamily: fontfamily
    })
})