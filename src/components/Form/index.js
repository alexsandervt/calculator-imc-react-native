import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";

import styles from "./styles";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          value={height}
          onChangeText={setHeight}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          style={styles.formInput}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder="72kg"
          keyboardType="numeric"
          style={styles.formInput}
        />
        <TouchableOpacity
          style={styles.buttonCalc}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={styles.textButtonCalc}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
