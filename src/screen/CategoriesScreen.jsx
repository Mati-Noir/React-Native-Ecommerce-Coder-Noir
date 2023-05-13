import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const CategoriesScreen = ({ navigation }) => {
  return (

      <View style={styles.fondoMainMenu}>

        <Text style={styles.subtitulo}>Que sale hoy?</Text>

        <Button title="Navegar a Bread" onPress={() => navigation.navigate("Bread")} />

        <TouchableOpacity onPress={() => navigation.navigate("Bread")}>
          <View style={styles.button}>
          {/*  <Image style={styles.logo} source={{uri:"https://img.freepik.com/vector-premium/burger-vintage-style-logo-restaurante-comida-rapida_605910-262.jpg"}}></Image> */}
            <Image style={styles.logo} source={{uri:"https://manofmany.com/wp-content/uploads/2021/02/20-Spots-for-the-Best-Burgers-in-Perth.jpeg"}}></Image>
            <Text style={styles.buttonText}>Hamburguesas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Bread")}>
          <View style={styles.button}>
            <Image style={styles.logo} source={{uri:"https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/IW5XKsL9u44uWlkjn3idnmZL1MQ=/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/WV3OJNLFRJD65IIWSSUHRC2NHA.jpg"}}></Image>
            <Text style={styles.buttonText}>Pizzas</Text>
          </View>
        </TouchableOpacity>

      </View>
    
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#E8BC33",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 80,
    marginVertical: 20,
    elevation: 10,
    shadowColor: "#fcf9f9",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  fondoMainMenu: {
    backgroundColor: "#43423D",
    backgroungImage: ""
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
    elevation: 100,
    borderWidth: 4,
    borderColor: "black",
  },
  estructuraButtons: {
    maxWidth: 300,
    maxHeight: 300,
  },
  subtitulo: {
    fontSize: 26,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
})