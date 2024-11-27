import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import useQuiz from "@/hooks/useQuiz";
import { Colors } from "@/constant/color";
import Button from "@/components/Button";
import { router } from "expo-router";
import {
  GlobalContextState,
  useGlobalContext,
} from "@/context/useGlobalContext";
import BaseContainer from "@/components/BaseContainer";
import Loading from "@/components/Loading";

export default function Quiz() {
  const { setLeaderboard, name } = useGlobalContext() as GlobalContextState;
  const { quizData, isLoading } = useQuiz();
  const [number, setNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (number > quizData.length - 1) {
      setLeaderboard((prevState) => {
        prevState.push({ name, score });
        return prevState.sort((a, b) => b.score - a.score);
      });
    }
  }, [number]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BaseContainer>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          alignItems: "center",
          marginTop: 20,
          borderRadius: 16,
        }}
      >
        {number < quizData.length ? (
          <>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                {quizData[number]?.question?.replace(/&quot;/g, '"')}
              </Text>
            </View>
            <View
              style={{
                gap: 5,
                marginTop: 20,
              }}
            >
              {quizData[number]?.choises.map((item) => (
                <Button
                  title={item}
                  onPress={() => {
                    if (item === quizData[number].correct_answer) {
                      setScore(score + 10);
                    }
                    setNumber(number + 1);
                  }}
                  disabled={false}
                />
              ))}
            </View>
          </>
        ) : (
          <>
            <View style={[styles.questionContainer, { marginTop: 50 }]}>
              <Text style={styles.question}>
                Your Score {score} from {quizData.length * 10}
              </Text>
            </View>
            <Button
              title="See Leaderboard"
              style={{ marginTop: 50, backgroundColor: Colors.secondary[200] }}
              onPress={() => router.replace("/leaderboard")}
            />
          </>
        )}
      </ScrollView>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    width: "85%",
    height: 150,
    backgroundColor: Colors.secondary.DEFAULT,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    color: Colors.primary,
    fontFamily: "PixelifySans-Medium",
    fontSize: 24,
    textAlign: "center",
  },
});
