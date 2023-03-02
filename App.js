import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");

  const clickHandler = () => {
    setTodo("abhishek");
  };
  return (
    <View style={styles.container}>
      <Text>My Todo</Text>
      <Text></Text>
      <Text>{todo}</Text>
      <Text></Text>
      <View>
        <Text style={styles.text}>Add Todo :-</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g : John Doe "
          onChangeText={(val) => setTodo(val)}
        />
      </View>
      <View>
        <Button title="Add Todo" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#777",
    borderWidth: 1,
    padding: 5,
    margin: 10,
    width: 200,
  },
  text: {
    margin: "auto",
    textAlign: "center",
  },
});
