import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        width: 200,
    },
    detail: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 75,
    },
    image: {
        width: "120%",
        height: "120%",
        position: "absolute",
        marginLeft: 210,
        borderRadius: 10,
        marginTop: -20,
    },
    cantidad: {
        fontSize: 18,
        paddingTop: 5,
    },
    precio: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
    }
});

export default styles;