import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
    borderRadius: 40,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  itemName: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  }
});

export default styles;