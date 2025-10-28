import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React, { useState, useRef } from 'react'



export default function ScrollViewScreen() {

  const ScrollRef = useRef();  
  const irFinal=() => {
    ScrollRef.current.scrollToEnd({animated:true})
  }
  
    return (
     <ScrollView 
     ref={ScrollRef}
     
     style={styles.container}
     contentContainerStyle={styles.content}
     showsVerticalScrollIndicator={true}
     > 


        <Text style={styles.Titulo}>Practica : Scrollview</Text>
        <Text style={styles.Titulo2}>ejemplo de desplazamiento vertical</Text>

        <View>
          <Button
          color='#8b2354bb'
          title='Ir al final'
          onPress={irFinal}

          ></Button>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 1</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 2</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 3</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 4</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 5</Text>
          
        </View>

        <Text style={styles.Titulo2}>Ejemplo de desplazamiento horizontal</Text>

        <ScrollView
          horizontal
          nestedScrollEnabled={true}
          style={styles.scrollhorizontal}
          showsHorizontalScrollIndicator={true}
        
        
        >
          <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 1</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 2</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 3</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 4</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 5</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 6</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 7</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 8</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 9</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 10</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 11</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>cuadro 12</Text>
        </View>

        </ScrollView>

        
     </ScrollView>
    )
  }


const styles = StyleSheet.create({

container:{
   backgroundColor: '#b931e27e',
},
content:{
  padding:20,
  paddingBottom:40,
},

Titulo:{
  fontSize:30,
  fontWeight:'bold', 
  marginBottom:10,
  color:'#3520f1ff',
  textAlign:'center',
},
Titulo2:{
  fontSize:26,
  fontWeight:'bold',
  margintop:20,
  marginBottom:10,
  textAlign:'center',
},

elementos:{
  width:'100%',
  height:100,
  backgroundColor:'#7842f5a9',
  marginBottom:10,
  justifyContent:'center',
  alignItems:'center',
  marginVertical:10,
  borderRadius:10,
},

elementos2:{
  width:120,
  height:120,
  backgroundColor:'#e231c47e',
  marginBottom:10,
  justifyContent:'center',
  alignItems:'center',
  marginRight:10,
  borderRadius:10,
},

text:{
  fontSize:20,
  fontFamily:'courrier',
  color:'#ffffff',
  fontWeight: '900',
  textDecorationLine: 'underline'
},

scrollhorizontal:{
  marginVertical:10,
  width:'100%',

},

})
