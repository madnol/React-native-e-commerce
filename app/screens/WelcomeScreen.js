import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/backgroundjpg.jpg")}
    >
      <View style={styles.overlay}></View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Homy.png")} />
        <Text style={styles.brandName}>Homy</Text>
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  brandName: {
    color: colors.primary,
    fontSize: 40,
    fontWeight: "bold",
  },
  tagLine: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },

  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});

export default WelcomeScreen;
