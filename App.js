import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");

  const press = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const sqrt = () => {
    try {
      setInput(Math.sqrt(Number(input)).toString());
    } catch {}
  };

  const square = () => {
    try {
      setInput(Math.pow(Number(input), 2).toString());
    } catch {}
  };

  const sin = () => {
    setInput(Math.sin(Number(input) * Math.PI / 180).toString());
  };

  const cos = () => {
    setInput(Math.cos(Number(input) * Math.PI / 180).toString());
  };

  const tan = () => {
    setInput(Math.tan(Number(input) * Math.PI / 180).toString());
  };

  const log = () => {
    setInput(Math.log10(Number(input)).toString());
  };

  const ln = () => {
    setInput(Math.log(Number(input)).toString());
  };

  const Button = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.display}>{input || "0"}</Text>

      <View style={styles.row}>
        <Button title="7" onPress={() => press("7")} />
        <Button title="8" onPress={() => press("8")} />
        <Button title="9" onPress={() => press("9")} />
        <Button title="/" onPress={() => press("/")} />
      </View>

      <View style={styles.row}>
        <Button title="4" onPress={() => press("4")} />
        <Button title="5" onPress={() => press("5")} />
        <Button title="6" onPress={() => press("6")} />
        <Button title="*" onPress={() => press("*")} />
      </View>

      <View style={styles.row}>
        <Button title="1" onPress={() => press("1")} />
        <Button title="2" onPress={() => press("2")} />
        <Button title="3" onPress={() => press("3")} />
        <Button title="-" onPress={() => press("-")} />
      </View>

      <View style={styles.row}>
        <Button title="0" onPress={() => press("0")} />
        <Button title="." onPress={() => press(".")} />
        <Button title="=" onPress={calculate} />
        <Button title="+" onPress={() => press("+")} />
      </View>

      <View style={styles.row}>
        <Button title="C" onPress={clear} />
        <Button title="√" onPress={sqrt} />
        <Button title="x²" onPress={square} />
        <Button title="sin" onPress={sin} />
      </View>

      <View style={styles.row}>
        <Button title="cos" onPress={cos} />
        <Button title="tan" onPress={tan} />
        <Button title="log" onPress={log} />
        <Button title="ln" onPress={ln} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    padding: 15,
  },

  display: {
    color: "white",
    fontSize: 42,
    textAlign: "right",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  button: {
    backgroundColor: "#333",
    width: 75,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});