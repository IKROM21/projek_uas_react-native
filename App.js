// App.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [npm, setNpm] = useState('');
  const [nama, setNama] = useState('');
  const [prodi, setProdi] = useState('');
  const [fakultas, setFakultas] = useState('');
  const [ttl, setTtl] = useState('');
  const [noHp, setNoHp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = () => {
    // Validasi minimal input NPM dan Nama
    if (npm === '' || nama === '') {
      Alert.alert('Error', 'Mohon lengkapi NPM dan Nama');
      return;
    }

    // Simpan bahwa form telah disubmit
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Pendaftaran Mahasiswa Baru</Text>
      <TextInput
        style={styles.input}
        placeholder="NPM"
        value={npm}
        onChangeText={setNpm}
        keyboardType="numeric"
        editable={!submitted} // Jangan izinkan edit setelah disubmit
      />
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={setNama}
        editable={!submitted} // Jangan izinkan edit setelah disubmit
      />
      <TextInput
        style={styles.input}
        placeholder="Program Studi"
        value={prodi}
        onChangeText={setProdi}
        editable={!submitted} // Jangan izinkan edit setelah disubmit
      />
      <TextInput
        style={styles.input}
        placeholder="Fakultas"
        value={fakultas}
        onChangeText={setFakultas}
        editable={!submitted} // Jangan izinkan edit setelah disubmit
      />
      <TextInput
        style={styles.input}
        placeholder="Tempat & Tanggal Lahir"
        value={ttl}
        onChangeText={setTtl}
        editable={!submitted} // Jangan izinkan edit setelah disubmit
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor HP"
        value={noHp}
        onChangeText={setNoHp}
        keyboardType="phone-pad"
        editable={!submitted} // Jangan izinkan edit setelah disubmit
      />
      {!submitted ? (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.submittedContainer}>
          <Text style={styles.submittedText}>selamat anda telah berhasil mendaftar sebagai mahasiswabarucls</Text>
          <Text>NPM: {npm}</Text>
          <Text>Nama: {nama}</Text>
          <Text>Program Studi: {prodi}</Text>
          <Text>Fakultas: {fakultas}</Text>
          <Text>Tempat & Tanggal Lahir: {ttl}</Text>
          <Text>Nomor HP: {noHp}</Text>
        </View>
      )}
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
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 16,
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
  submittedContainer: {
    marginTop: 20,
  },
  submittedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
