import React from 'react';
import { Text, StyleSheet } from 'react-native';


const AgeList = ({ age }) => {
  return <Text style={{ fontSize: 22, color: "#2BB1DB", fontWeight: 'bold' }}>{age}</Text>;
}

const styles = StyleSheet.create({
  age: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2BB1DB",
  },
});


export default AgeList;