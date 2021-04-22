import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/screens/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
}
