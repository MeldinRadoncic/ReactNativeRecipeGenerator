import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        width: '100%',
        backgroundColor: '#2D3748',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 32, // Equivalent to 'h-8 w-8'
        height: 32,
        marginRight: 8,
    },
    logoText: {
        color: 'white',
        marginLeft: 2,
        fontSize: 12, // Equivalent to 'text-xl'
        fontWeight: 'bold', // Equivalent to 'text-extrabold'
    },
    rightContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 4,
    },
    newRecipeButton: {
        backgroundColor: '#38A169', // Equivalent to 'bg-green-500'
    },
    themeToggleButton: {
        backgroundColor: '#3182CE', // Equivalent to 'bg-blue-500'
    },
});