import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const DetailsScreen = () => {
  const bread = useSelector(state => state.products.selected);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: bread.img }} />
      <Text style={styles.titulo}>{bread.name}</Text>
      <Text style={styles.description}>{bread.description}</Text>
      <Text style={styles.precio}>${bread.price}</Text>
      <View style={styles.aceptar}>
        <Button title='Agregar al carrito'></Button>     
      </View>
    </View>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  container: {
    alignItems: "center",
  },
  description: {
    margin: 10,
    marginHorizontal: 20,
    lineHeight: 24,
    fontSize: 18,
    textAlign: "center",
  },
  precio: {
    fontSize: 30,
    fontWeight: "bold",
  },
  aceptar: {
    margin: 10,
  }
});