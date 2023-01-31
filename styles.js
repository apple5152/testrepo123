import { StatusBar, StyleSheet } from "react-native";

//This is the StyleSheet Creation for Frontend
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#458b00",
    alignItems: "left",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "grey",
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
});

//This is export default on what appears in this screen
export default styles;