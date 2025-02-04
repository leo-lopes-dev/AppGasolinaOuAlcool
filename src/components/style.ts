import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "f3f3f3"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
        backgroundColor: "fff",
        borderRadius: 8
    },

    resultado: {
        fontSize: 15,
        fontWeight: "bold",
        padding: 10,
    }
});

export default styles;