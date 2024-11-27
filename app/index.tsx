import Button from "@/components/Button";
import FormField from "@/components/FormField";
import { Colors } from "@/constant/color";
import {
  GlobalContextState,
  useGlobalContext,
} from "@/context/useGlobalContext";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { name, setName } = useGlobalContext() as GlobalContextState;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizify</Text>
      <View style={styles.formContainer}>
        <FormField
          title="Name"
          value={name}
          onChangeValue={(e) => setName(e)}
        />
        <Button
          title="Continue"
          onPress={() => {
            router.replace("/home");
          }}
          style={{ marginLeft: "auto" }}
          disabled={!name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "PixelifySans-Bold",
    fontSize: 42,
    color: Colors.secondary.DEFAULT,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    backgroundColor: Colors.primary,
  },
  formContainer: {
    width: "85%",
    gap: 10,
  },
});
