//1. impots: zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button , } from 'react-native';
import React,{useState} from 'react';

//2. impots: zona de componentes
export default function App() {

  const[contador,setcontador]=useState(0);

  return (
    <View style={styles.container}>
      <Text>contador:{contador}</Text>
      <Button title='incrementar' onPress={()=>setcontador(contador+1)}> </Button>
      <Button title='decrementar' onPress={()=>setcontador(contador-1)}> </Button>
      <Button title='reiniciar' onPress={()=>setcontador(0)}> </Button>
      <StatusBar style="auto" />
    </View>


  );
 }

//3. impots: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
