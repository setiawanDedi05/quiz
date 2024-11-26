import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity style={styles.button}>
        Quiz
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  button: {
    padding: 15,
    textAlign: 'center',
    width: '85%',
    borderRadius: '12px',
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: '#e3e323'
  }
})
