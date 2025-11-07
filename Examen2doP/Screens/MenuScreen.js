import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ExamScreen from './ExamScreen';


export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'examen':
        return <ExamScreen />;

    case 'menu':
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de examen</Text>
          <Button title="Ir a Examen" onPress={() => setScreen('examen')} />
        
        </View>
      );
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centra verticalmente
    alignItems: 'center',      // Centra horizontalmente
    backgroundColor: '#8073f8e7', // Color de fondo suave
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff',
  },
  button: {
    marginTop:20,//separacion margen superior
    flexDirection:"column",//direccion de los elementos(row,column)
    gap:30,//separacion entre los elementos
  },
});