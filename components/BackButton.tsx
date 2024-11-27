import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton() {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Ionicons name="arrow-back" style={styles.label} size={32} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
  },
});
