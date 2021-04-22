import React from "react";
import { Text } from "react-native";

import { StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: Platform.OS === "android" ? 18 : 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
