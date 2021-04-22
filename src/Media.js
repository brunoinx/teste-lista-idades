import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import AgeList from './AgeList';

export default function Media() {
  const [ageInput, setAgeInput] = useState(null);
  const [listIdade, setListIdade] = useState([]);
  const [resultMedia, setResultMedia] = useState(0);
  const inputRef = useRef(null);

  function handleAddAgeOnList() {
    setListIdade([...listIdade, Number(ageInput)]);
    inputRef.current.clear();
  }

  function CalcMedia() {
    const sumAges = listIdade.reduce((acc, age) => acc + age, 0);

    const result = sumAges / listIdade.length;

    setResultMedia(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Idades</Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              backgroundColor: "#eee",
              height: 50,
              width: 200,
              marginRight: 10,
              fontSize: 20,
              padding: 4,
            }}
            keyboardType="numeric"
            ref={inputRef}
            value={ageInput}
            onChangeText={(value) => setAgeInput(value)}
          />

          <TouchableOpacity
            style={styles.buttonInput}
            onPress={handleAddAgeOnList}
          >
            <Text style={styles.textInput}>Inserir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.ageList}
        keyExtractor={(item) => item.id}
        data={listIdade}
        renderItem={({ item }) => {
          return <AgeList age={item} />;
        }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.buttonCalc} onPress={CalcMedia}>
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
  title: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 28,
  },
  buttonInput: {
    backgroundColor: "#1ABC9C",
    height: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    fontSize: 18,
  },
  containerInput: {
    marginBottom: 26,
  },
  ageList: {
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height * 0.6,
    padding: 14
  },
  buttonCalc: {
    width: "70%",
    height: 50,
    backgroundColor: "#3498DB",
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultMedia: {
   backgroundColor: '#FFF',
   height: 50,
   width: 80,
   marginTop: 16 ,
   justifyContent: 'center',
   alignItems: 'center'
  }
});