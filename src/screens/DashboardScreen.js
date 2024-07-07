// src/DashboardScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = ({ route }) => {
    const { npm, nama } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text>NPM: {npm}</Text>
            <Text>Nama: {nama}</Text>
            {/* Tambahkan komponen lainnya di sini */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default DashboardScreen;
