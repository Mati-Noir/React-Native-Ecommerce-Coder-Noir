import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add_item } from '../store/actions/cart.action';

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const bread = useSelector(state => state.products.selected);

  const handleAddItem = () => {
    dispatch(add_item(bread));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: bread.img }} />
      <Text style={styles.titulo}>{bread.name}</Text>
      <Text style={styles.description}>{bread.description}</Text>
      <Text style={styles.precio}>${bread.price}</Text>
      <View style={styles.aceptar}>
        <Button title='Agregar al carrito' onPress={handleAddItem}/>     
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    marginTop: -100,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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