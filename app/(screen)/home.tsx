import Button from "@/components/Button";
import { Colors } from "@/constant/color";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import image from "@/constant/image";
import BaseContainer from "@/components/BaseContainer";

export default function Index() {
  return (
    <BaseContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={image.icon}
          resizeMode="contain"
          style={{ height: 150, width: 150 }}
        />
        <Text style={styles.title}>Quizify</Text>
        <Button
          title="Quiz"
          onPress={() => router.push("/quiz")}
          disabled={false}
        />
        <Button
          title="Leaderboard"
          onPress={() => router.push("/leaderboard")}
          disabled={false}
          style={{ backgroundColor: "#7738c7" }}
        />
        <Button
          title="Exit"
          onPress={() => router.push("/")}
          disabled={false}
          style={{ backgroundColor: "#FF4B3D" }}
        />
      </ScrollView>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "PixelifySans-Bold",
    fontSize: 72,
    marginBottom: 20,
    color: Colors.secondary.DEFAULT,
  },
  container: {
    flex: 1,
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    textAlign: "center",
    width: "85%",
    borderRadius: "12px",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: Colors.primary,
    color: Colors.primary,
    backgroundColor: Colors.secondary.DEFAULT,
  },
});
