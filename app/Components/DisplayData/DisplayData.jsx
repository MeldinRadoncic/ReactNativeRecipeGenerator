import React from 'react';
import { styles } from './DisplayData.styles';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { formatRecipe, downloadPDF } from '../utils/recipeUtils';
import { FontAwesome } from '@expo/vector-icons';

const DisplayData = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>RECIPE</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          <Text style={styles.bold}>Ingredients:</Text> {data?.food}
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.bold}>Calories:</Text> {data?.calories}
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.bold}>Language:</Text> {data?.language}
        </Text>
      </View>
      <Text style={styles.paragraph}>{formatRecipe(data?.recipe)}</Text>
      <Image
        source={{ uri: data?.image_url }}
        style={styles.image}
        resizeMode="contain"
      />
      {/* <TouchableOpacity
        style={styles.downloadButton}
        onPress={() => downloadPDF(data)}
      >
        <FontAwesome name="file-pdf-o" size={16} color="#fff" />
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity> */}
    </View>
  );
};



export default DisplayData;