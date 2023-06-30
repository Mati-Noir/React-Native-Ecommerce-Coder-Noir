import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ImageSelector from "../components/ImageSelector/ImageSelector";
import LocationSelector from "../components/LocationSelector/LocationSelector";
import { addPlace } from "../store/actions/places.actions";
import { useDispatch } from "react-redux";

const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const handleTitleChange = text => setTitle(text);

  const handleSave = () => {
    dispatch(addPlace(title, image, location));
    navigation.navigate("Direcciones");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre del lugar:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />
        <LocationSelector onLocation={setLocation}/>
        <Button
          title="Guardar dirección"
          color="#FFA035"
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;
