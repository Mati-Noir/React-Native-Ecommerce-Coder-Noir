import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    header: {
        fontSize: 18
    },
    detail: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});

export default styles;