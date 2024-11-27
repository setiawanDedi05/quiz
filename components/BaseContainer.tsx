import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constant/color";

export default function BaseContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SafeAreaView style={styles.base}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  base: { backgroundColor: Colors.primary, height: "100%", padding: 10 },
});
