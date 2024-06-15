import React, { useState}
 from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Layout from "./app/Components/Layout/Layout";
import Home from "./app/Components/Home/Home";
import Navbar from "./app/Components/Navbar/Navbar";

export default function App() {
  const [receiveData, setReceiveData] = useState(true);

  const handleRestart = () => {
    setReceiveData(false);
    console.log("Restarting... APP.JS ");
  }

  return (
    <View style={styles.container}>
      <Navbar onRestart={handleRestart} />
      <Layout>
        <Home data={receiveData}/>
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily:
      "ShadowsIntoLight_400Regular",
  },
});
