// src/RegistrationForm.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationForm = ({ navigation }) => {
    const [npm, setNpm] = useState('');
    const [nama, setNama] = useState('');
    // Tambahkan state lainnya sesuai kebutuhan

    const handleRegister = () => {
        // Simpan data atau lakukan logika pendaftaran
        // Setelah berhasil, navigasikan ke halaman Dashboard
        navigation.navigate('Dashboard', {
            npm,
            nama,
            // Kirim data lainnya jika diperlukan
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Pendaftaran Mahasiswa Baru</Text>
            {/* Isi formulir */}
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>
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
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#6200ee',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RegistrationForm;
