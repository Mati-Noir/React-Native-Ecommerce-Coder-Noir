import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.img,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.infoDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;