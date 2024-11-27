import {
  GlobalContextState,
  useGlobalContext,
} from "@/context/useGlobalContext";
import { Redirect, Stack } from "expo-router";

export default function ScreenLayout() {
  const { name } = useGlobalContext() as GlobalContextState;
  if (!name) {
    return Redirect({ href: "/" });
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="quiz" />
      <Stack.Screen name="leaderboard" />
    </Stack>
  );
}
