import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext, themes } from "../context/ThemeContext";

export default function ThemeToggler() {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={{ fontSize: 70, marginBottom: 30 }}>
                {theme === themes.dark ? "🌙" : "*"}
            </Text>

            <TouchableOpacity onPress={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <Text style={{ color: theme.foreground, backgroundColor: theme.background }}>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});