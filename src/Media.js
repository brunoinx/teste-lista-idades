import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";

import AgeList from "./components/AgeList";

export default function Media() {
  const [ageInput, setAgeInput] = useState(null);
  const [listIdade, setListIdade] = useState([]);
  const [resultMedia, setResultMedia] = useState(null);

  function handleAddAgeOnList() {
    if (ageInput === null) {
      return Alert.alert("Campo idade vazio", 'Digite sua idade primeiro');
    }

    setListIdade([...listIdade, Number(ageInput)]);
    setAgeInput(null);
  }

  function handleAverageAge() {
    const sumAges = listIdade.reduce((acc, age) => acc + age, 0);

    const result = (sumAges / listIdade.length).toFixed(2);

    if (listIdade.length === 0) {
      Alert.alert('Erro', 'você precisa digitar sua idade');
      return;
    }

    setResultMedia(result);

    Alert.alert(
      "Sucesso", `Total de pessoas: ${listIdade.length}\nMédia: ${result}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Idades</Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Digite sua idade"
            value={ageInput}
            onChangeText={(value) => setAgeInput(value)}
          />

          <TouchableOpacity
            style={styles.buttonInput}
            onPress={handleAddAgeOnList}
          >
            <Text style={styles.textButtonInput}>Inserir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.ageList}
        keyExtractor={(item, index) => String(index)}
        data={listIdade}
        renderItem={({ item }) => {
          return <AgeList age={item} />;
        }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.buttonCalc} onPress={handleAverageAge}>
          <Text style={{ fontSize: 18, color: "#FFF" }}>Calcular Média</Text>
        </TouchableOpacity>

        <View style={styles.resultMedia}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
            {resultMedia}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 36,
  },
  containerInput: {
    marginBottom: 26,
  },
  title: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 28,
  },
  textInput: {
    backgroundColor: "#eee",
    height: 50,
    width: 200,
    marginRight: 10,
    fontSize: 20,
    padding: 4,
  },
  buttonInput: {
    backgroundColor: "#1ABC9C",
    height: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonInput: {
    fontSize: 18,
    color: "#fff",
  },
  ageList: {
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height * 0.6,
    paddingHorizontal: 14,
    paddingBottom: 12
  },
  buttonCalc: {
    width: "70%",
    height: 50,
    backgroundColor: "#3498DB",
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  resultMedia: {
    backgroundColor: "#FFF",
    height: 50,
    width: 80,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
