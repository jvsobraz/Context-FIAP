import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { ThemeContext, themes } from "../context/ThemeContext";

export default function Header() {
    const theme = useContext(ThemeContext)[0];

    return (
        <View style={StyleSheet.container}>
            <Text style={[styles.text, { backgroundColor: theme.background, color: theme.foreground }]}>
                {theme === themes.light ? "Light Mode" : "Dark Mode"}
            </Text>
            <StatusBar barStyle="default" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        height: 80,
        fontSize: 30,
        alignSelf: "stretch",
        textAlign: "center",
        textAlignVertical: "center",
    }
});