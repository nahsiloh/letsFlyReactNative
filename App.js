import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ItineraryScreen from "./app/screens/itineraryScreen";
// import { SvgXml } from "react-native-svg";
// import testSvg from "./test.svg";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#B5CEC5",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ItineraryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
