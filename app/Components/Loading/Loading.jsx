import React from 'react';
import { styles } from './Loading.styles';
import { View, ActivityIndicator } from 'react-native';


const Loading = () => {
    return (
        <View>
        <ActivityIndicator size="large" color="#fff" />
        </View>
    );
    }

    export default Loading;