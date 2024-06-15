import React, { useState } from 'react';
import {ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Form.styles';
import InputField from '../InputField/InputField';
import Loading from '../Loading/Loading';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    food: '',
    calories: 1000,
    language: 'English',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http:localhost:5000/api/generate_recipe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      onSubmit(data); // Pass the received data to the onSubmit function provided by the App component
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <InputField
        label="Food"
        type="default"
        id="food"
        name="food"
        placeholder="Enter your ingredients"
        onChange={(value) => handleInputChange('food', value)}
        value={formData.food}
      />

      <InputField
        label="How many Calories?"
        type="numeric"
        id="calories"
        name="calories"
        placeholder="How many calories do you want?"
        onChange={(value) => handleInputChange('calories', value)}
        value={formData.calories.toString()}
      />

      <InputField
        label="Language"
        id="language"
        name="language"
        type="select"
        onChange={(value) => handleInputChange('language', value)}
        value={formData.language}
        options={['English', 'French', 'Spanish', 'Bosnian']}
      />

      <TouchableOpacity
        style={[
          styles.button,
          loading && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? <Loading /> : <Text style={styles.buttonText}>Let's Cook!</Text>}
      </TouchableOpacity>

      {error && (
        <Text style={styles.error}>{error} Error</Text>
      )}
    </View>
    </ScrollView>
  );
};



export default Form;