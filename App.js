import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Maria");
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title="Change text" onPress={(e) => setName("Pitska Kari3")} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
