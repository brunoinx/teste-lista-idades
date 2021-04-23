import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function AgeTextItem({ color, children }) {
  return (
    <Text style={[styles.age, { color: color }]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  age: {
    fontSize: 22,
    fontWeight: "bold",
  },
});