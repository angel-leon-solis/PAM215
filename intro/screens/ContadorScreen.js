//1. impots: zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button , } from 'react-native';
import React,{useState} from 'react';

//2. impots: zona de componentes
export default function App() {

  const[contador,setcontador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>
      
      <View style={styles.contenedorBotones}>

      <Button color="#680505d0" title='incrementar' onPress={()=>setcontador(contador+1)}> </Button>
      <Button color="#680505d0" title='decrementar' onPress={()=>setcontador(contador-1)}> </Button>
      <Button color="#680505d0" title='reiniciar' onPress={()=>setcontador(0)}> </Button>
      </View>
      <StatusBar style="auto" />

    </View>


  );
 }

//3. impots: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051c687c',
    alignItems: 'center',//alineacion horizontal eje x
    justifyContent: 'center',//laneacion vertical eje y
  },
  texto:{
    fontFamily:"Times New Roman",
    fontSize:30,
    color:'#680505d0',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  texto2:{
    fontFamily:"courier",
    fontSize:40,
    color:'#680505f5',
    fontWeight:'900',
    textDecorationLine:'underline',
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:20,
  },
});
