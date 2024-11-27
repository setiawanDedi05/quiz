import { StyleSheet, Text } from "react-native";
import React from "react";
import BaseContainer from "./BaseContainer";
import { Colors } from "@/constant/color";

export default function Loading() {
  return (
    <BaseContainer>
      <Text style={styles.text}>Loading...</Text>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.secondary.DEFAULT,
    fontFamily: "PixelifySans-Bold",
    fontSize: 24,
  },
});
