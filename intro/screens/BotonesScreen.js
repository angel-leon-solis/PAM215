import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';


export default function BotonesScreen() {
    const[esEncendido, cambiarEcendido] = useState(false)
    const[color, cambiarcolor]= useState('yellow')
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>control de luz</Text>
        
        <Text style={[styles.luz, {color: esEncendido ? color: 'black'}]}>
        {esEncendido ? 'luz encendida': 'luz apagada'}
        </Text>

        <Switch
        value ={esEncendido}
        onValueChange = {()=> cambiarEcendido(!esEncendido) }
        trackColor={{true: 'red', false: 'gray'}}
        
        ></Switch>
       
       <View style ={styles.cajaBotomes}>
            <Button 
            title='amarillo'
            onPress={()=> cambiarcolor('yellow') }
            color='yellow'
            ></Button>

            <Button 
            title='azul'
            onPress={()=> cambiarcolor('blue') }
            color='blue'
            ></Button>

            <Button 
            title='rojo'
            onPress={()=> cambiarcolor('red') }
            color='red'
            ></Button>
        </View>

      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#6805607c',
    alignItems: 'center',//alineacion horizontal eje x
    justifyContent: 'center',//laneacion vertical eje y
  },
  cajaBotomes: {
    flexDirection: 'row',
    gap:10,
    margin:15,
  },
  titulo:{
    fontSize:40,
    color:'white',
    marginBottom:20,
    fontWeight: 'bold',
  },
  luz:{
    fontSize:30,
    marginBottom:15,
  },
})