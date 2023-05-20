import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
        width: 350,
        justifyContent: "center",
        backgroundColor: "aliceblue",
    },
    imageContainer: {
        height: "55%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        height: "40%",
    },
    textStyle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
    },
    infoDescription: {
        textAlign: "center",
        fontSize: 16,
        marginHorizontal: 30,
        lineHeight: 22,
    },
    productPrice: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
    }
});

export default styles;