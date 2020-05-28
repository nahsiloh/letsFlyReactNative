import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import AddButton from "../assets/add_circle-24px.svg";

export default function ItineraryScreen(props) {
  const dates = [
    { date: 24, month: "May", key: "1" },
    { date: 25, month: "May", key: "2" },
    { date: 26, month: "May", key: "3" },
    { date: 27, month: "May", key: "4" },
    { date: 28, month: "May", key: "5" },
    { date: 29, month: "May", key: "6" },
    { date: 30, month: "May", key: "7" },
    { date: 31, month: "May", key: "8" },
  ];

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View style={styles.itineraryTitle} />
      <View style={styles.itineraryDate} />
      <View
        style={{
          backgroundColor: "#F2FFFA",
          flexDirection: "row",
          flex: 6,
        }}
      >
        <View style={styles.dateContainer}>
          <ScrollView>
            {dates.map((item, index) => {
              return (
                <View
                  key={item.key}
                  style={[
                    styles.dates,
                    index === 0
                      ? { backgroundColor: "#4FC2B2" }
                      : { backgroundColor: "#CDD1D1" },
                  ]}
                >
                  <Text
                    style={{
                      paddingLeft: 3,
                      paddingTop: 3,
                    }}
                  >
                    {item.month.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      fontSize: 48,
                      textAlign: "center",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.itineraryContainer}>
          <ScrollView>
            {dates.map((item) => {
              return (
                <View key={item.key} style={styles.itineraryItem}>
                  <Text>{item.date}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={styles.navigation}>
        <View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="80"
            viewBox="0 0 24 24"
            width="80"
            onPress={() => console.log("button pressed")}
          >
            <Path
              fill="#4FC2B2"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: "#CDD1D1",
    flex: 1,
  },
  itineraryContainer: {
    backgroundColor: "#F2FFFA",
    flex: 4,
  },
  itineraryTitle: {
    backgroundColor: "#F3F3F3",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  itineraryDate: {
    backgroundColor: "#D5EBE3",
    flex: 0.4,
    borderColor: "black",
  },
  itineraryItem: {
    backgroundColor: "#F2FFFA",
    height: 80,
    borderColor: "black",
    borderBottomWidth: 0.5,
  },
  navigation: {
    backgroundColor: "#F3F3F3",
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dates: {
    backgroundColor: "#CDD1D1",
    height: 80,
    borderColor: "black",
    borderBottomWidth: 0.5,
  },
  addButton: {
    backgroundColor: "#4FC2B2",
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
