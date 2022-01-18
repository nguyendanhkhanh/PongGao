import { StyleSheet } from "react-native";
import { color } from "../assets/color";
import { fontSize, height } from "../assets/size";

export const mainStyle = StyleSheet.create({
    buttonTitle: {
        color: color.pinkStrong,
        fontSize: fontSize.content,
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        height: height.button,
        backgroundColor: color.pinkStrong,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
    },
})