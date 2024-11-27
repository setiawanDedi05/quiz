import {
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constant/color";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export default function Button({ title, onPress, disabled, style }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[disabled ? styles.buttonDisabled : styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    padding: 20,
    backgroundColor: Colors.secondary.DEFAULT,
    borderCurve: "continuous",
    borderStyle: "dashed",
    justifyContent: "center",
  },
  buttonDisabled: {
    width: 300,
    height: 50,
    padding: 20,
    backgroundColor: Colors.gray[100],
    borderCurve: "continuous",
    borderStyle: "dashed",
    justifyContent: "center",
  },
  label: {
    fontFamily: "PixelifySans-Bold",
    color: Colors.primary,
    textAlign: "center",
    margin: "auto",
  },
});
