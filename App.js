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
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [people, setPeople] = useState([
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
    {
      name: "Dabfeed",
      key: 4,
    },
    {
      name: "Yotz",
      key: 5,
    },
    {
      name: "Meejo",
      key: 6,
    },
    {
      name: "Skilith",
      key: 7,
    },
    {
      name: "Skippad",
      key: 8,
    },
    {
      name: "Devpoint",
      key: 9,
    },
    {
      name: "Ozu",
      key: 10,
    },
  ]);
  const clickHandler = () => {
    setTodo("abhishek");
  };
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prev) => {
      return prev.filter((person) => person.key != id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View>
            <Text></Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.input}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* <Text>My Todo</Text>
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
      <StatusBar style="auto" /> */}
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
    borderColor: "green",
    borderWidth: 1,
    padding: 5,
    margin: 10,
    width: 150,
    marginTop: 30,
    backgroundColor: "pink",
  },
  text: {
    margin: "auto",
    textAlign: "center",
  },
});
