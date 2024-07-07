// src/screens/RegistrationScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
    const [npm, setNpm] = useState('');
    const [nama, setNama] = useState('');
    const [prodi, setProdi] = useState('');
    const [fakultas, setFakultas] = useState('');
    const [ttl, setTtl] = useState('');
    const [noHp, setNoHp] = useState('');

    const handleRegister = () => {
        // Implementasi logika pendaftaran mahasiswa baru
        console.log('NPM:', npm);
        console.log('Nama:', nama);
        console.log('Prodi:', prodi);
        console.log('Fakultas:', fakultas);
        console.log('Tempat & Tanggal Lahir:', ttl);
        console.log('No HP:', noHp);
        // Navigasi ke layar lain jika diperlukan
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pendaftaran Mahasiswa Baru</Text>
            <TextInput
                style={styles.input}
                placeholder="NPM"
                value={npm}
                onChangeText={setNpm}
            />
            <TextInput
                style={styles.input}
                placeholder="Nama"
                value={nama}
                onChangeText={setNama}
            />
            <TextInput
                style={styles.input}
                placeholder="Prodi"
                value={prodi}
                onChangeText={setProdi}
            />
            <TextInput
                style={styles.input}
                placeholder="Fakultas"
                value={fakultas}
                onChangeText={setFakultas}
            />
            <TextInput
                style={styles.input}
                placeholder="Tempat & Tanggal Lahir"
                value={ttl}
                onChangeText={setTtl}
            />
            <TextInput
                style={styles.input}
                placeholder="No HP"
                value={noHp}
                onChangeText={setNoHp}
            />
            <Button title="Daftar" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default RegistrationScreen;
