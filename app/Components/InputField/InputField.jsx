import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './InputField.styles';


const InputField = ({ label, id, name, type, placeholder, onChange, value, options }) => {
    const handleChange = (text) => {
        onChange(text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {options ? (
                <Picker
                    selectedValue={value}
                    onValueChange={handleChange}
                    style={styles.input}
                >
                    {options.map((option) => (
                        <Picker.Item key={option} label={option} value={option} />
                    ))}
                </Picker>
            ) : (
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                    keyboardType={type}
                />
            )}
        </View>
    );
};



export default InputField;