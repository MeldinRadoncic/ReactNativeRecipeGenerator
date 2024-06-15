import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Navbar.styles";
import { FontAwesome } from "@expo/vector-icons";

const Navbar = ({ onRestart }) => {
  return (
    <View style={styles.navbar}>
      <View
        style={styles.leftContainer}>
        <Image
          source={require("../../../assets/icon.png")} // Adjust the path to your logo
          style={styles.logo}
        />
        <Text style={styles.logoText}>
          Recipe Generator
        </Text>
      </View>
      <View
        style={styles.rightContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.newRecipeButton,
          ]}
          onPress={onRestart}>
          <FontAwesome
            name='plus'
            size={24}
            color='white'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
