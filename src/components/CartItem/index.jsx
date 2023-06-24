import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons"
import styles from './styles';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
        <View>
            <Text style={styles.header}>{item.name}</Text>
        </View>
        <View style={styles.detail}>
            <View>
                <Text style={styles.cantidad}>Cantidad: {item.quantity}</Text>
                <Text style={styles.precio}>${item.price}</Text>
                <Image style={styles.image} source={{ uri: item.img, }} />
            </View>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Ionicons name="trash" size={24} color={"red"}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartItem;