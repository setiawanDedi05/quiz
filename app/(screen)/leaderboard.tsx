import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  GlobalContextState,
  useGlobalContext,
} from "@/context/useGlobalContext";
import image from "@/constant/image";
import { Colors } from "@/constant/color";
import BaseContainer from "@/components/BaseContainer";
import BackButton from "@/components/BackButton";
import RangkingCard from "@/components/RangkingCard";

export default function leaderboard() {
  const { leaderboard } = useGlobalContext() as GlobalContextState;
  return (
    <BaseContainer>
      <BackButton />
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Image
          source={image.leaderboard}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text style={styles.title}>Leaderboard</Text>
      </View>
      <ScrollView contentContainerStyle={styles.rangkingContainer}>
        {leaderboard.map((rank, index) => {
          return <RangkingCard key={index} rank={rank} />;
        })}
      </ScrollView>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.secondary.DEFAULT,
    fontFamily: "PixelifySans-Bold",
    fontSize: 64,
    textAlign: "center",
  },
  rangkingContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
