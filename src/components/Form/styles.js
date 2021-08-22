import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    backgroundColor: "#f6f6f6",
    width: "90%",
    height: 40,
    margin: 12,
    borderRadius: 50,
    paddingLeft: 20,
  },
  buttonCalc: {
    backgroundColor: "#ff0043",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalc: {
    fontSize: 20,
    color: "#fff",
  },
});

export default styles;
