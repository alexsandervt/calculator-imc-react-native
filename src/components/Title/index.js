import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Calcule seu IMC</Text>
    </View>
  );
}
