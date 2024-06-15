import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginTop: 32,
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#ff4500', // Equivalent to 'bg-red-600' 
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 50,
      marginTop: 16,
      width: '100%',
    },
    disabledButton: {
      backgroundColor: '#ccc',
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    error: {
      color: '#ff0000',
      marginTop: 8,
      textAlign: 'center',
    },
  });