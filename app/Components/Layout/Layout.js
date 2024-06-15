import React
 from "react";
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <SafeAreaView
      style={styles.container}>
      <ScrollView>
        <StatusBar style='auto' />
        <View style={styles.container}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
