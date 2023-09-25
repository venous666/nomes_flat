import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const nomes = [
  'Ana Maria',
  'Bruno Alves',
  'Carlos José',
  'Daniel Martins',
  'Efraim Gomes',
  'Francisco Junior',
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeItem}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  nomeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
