import React from "react";

import {View, Text, StyleSheet} from 'react-native';

export default function Points() {
    return (
        <View style={styles.container}>
            <Text>Tela de Points</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
})