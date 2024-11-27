import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ranking } from "@/context/useGlobalContext";
import { Colors } from "@/constant/color";

type Props = {
  key: number;
  rank: Ranking;
};

export default function RangkingCard({ key, rank }: Props) {
  return (
    <View key={key} style={styles.rangkingCard}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.rangkingText}>{key + 1}. </Text>
        <Text style={styles.rangkingText}>{rank.name}</Text>
      </View>
      <Text style={styles.rangkingText}>{rank.score} Pts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rangkingCard: {
    backgroundColor: Colors.secondary.DEFAULT,
    width: "85%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rangkingText: {
    fontFamily: "PixelifySans-Bold",
    fontSize: 24,
  },
});
