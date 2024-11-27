import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constant/color";

type Props = {
  title: string;
  value: string;
  placeholder?: string;
  onChangeValue: (e: string) => void;
  style?: TextStyle;
};

export default function FormField({
  title,
  value,
  placeholder,
  onChangeValue,
  style,
}: Props) {
  const [borderColor, setBorderColor] = useState(Colors.secondary.DEFAULT);

  const onFocus = () => {
    setBorderColor(Colors.secondary[200]);
  };

  const onBlur = () => {
    setBorderColor(Colors.secondary.DEFAULT);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label]}>{title}</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderBottomColor: borderColor,
            borderBottomWidth: 2,
            borderStyle: "dotted",
            outline: "none",
          },
        ]}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChangeValue}
        selectionColor={Colors.secondary.DEFAULT}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  label: {
    color: Colors.secondary.DEFAULT,
    fontFamily: "PixelifySans-Bold",
  },
  input: {
    padding: 10,
    width: "100%",
    color: Colors.secondary.DEFAULT,
    fontFamily: "PixelifySans-Bold",
  },
});
