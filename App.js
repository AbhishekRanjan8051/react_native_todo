import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState([
    {
      name: "Vinte",
      key: 1,
    },
    {
      name: "Oloo",
      key: 2,
    },
    {
      name: "Thoughtblab",
      key: 3,
    },
  ]);

  const clickHandler = () => {
    console.log("hello");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View>
        <Text>Header</Text>
      </View>
      {/* add todo */}
      <View>
        <Text style={{ textAlign: "center" }}>Add Todo :-</Text>
        <View style={styles.addtodo}>
          <TextInput style={styles.input} />

          <Button title="Add" onPress={clickHandler} />
        </View>
      </View>
      {/* todo List */}
      <View style={styles.todolist}>
        <FlatList
          data={todo}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    width: 170,
    marginTop: 10,
  },
  addtodo: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  todolist: {
    marginTop: 15,
  },
});
