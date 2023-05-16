import React from 'react'
import { TouchableOpacity, Image, Text, View } from 'react-native'
import styles from "./styles"

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={[styles.categoriesItem, { backgroundColor: item.color }]}>
      <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
        <View style={styles.textContainer}>
          <Text style={styles.titleCategories}>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={{uri: item.img}}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CategoriesItem
