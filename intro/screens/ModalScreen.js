import { Text, StyleSheet, View, Modal, Pressable, TextInput} from 'react-native'
import React, { useState } from 'react';



export default function ModalScreen() {

  const[mostrar, setmostrar]=useState(null);

  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Proximamente por leonardo</Text>

      <Pressable style={styles.boton} onPress={()=> setmostrar('login')}>
        <Text style={styles.text}> iniciar sesion</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={()=> setmostrar('registro')}>
        <Text style={styles.text}> registrarse</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={()=> setmostrar('alerta')}>
        <Text style={styles.text}> alerta</Text>
      </Pressable>
      
      <Modal
      
      animationType='slide'
      trasparent={false}
      visible={mostrar==='login'}
      onRequestClose={()=> setmostrar(null)}

      > 
      <View style={styles.container2}>
        <Text style={styles.titulo}>formulario de inicio ssion</Text>

        <TextInput placeholder='Ingrese usuario' style={styles.input}/>
        <TextInput placeholder='Ingrese contraseña' secureTextEntry={true} style={styles.input}/>
        <Pressable style={styles.boton} onPress={()=> setmostrar('alerta')}>
          <Text style={styles.text}>iniciar sesion</Text>
        </Pressable>
        
      </View>
      </Modal>

      <Modal
      
      animationType='slide'
      trasparent={false}
      visible={mostrar==='login'}
      onRequestClose={()=> setmostrar(null)}

      > 
      <View style={styles.container2}>
        <Text style={styles.titulo}>formulario de inicio ssion</Text>

        <TextInput placeholder='Ingrese usuario' style={styles.input}/>
        <TextInput placeholder='Ingrese contraseña' secureTextEntry={true} style={styles.input}/>
        <Pressable style={styles.boton} onPress={()=> setmostrar('alerta')}>
          <Text style={styles.text}>iniciar sesion</Text>
        </Pressable>
        
      </View>
      </Modal>
      
      <Modal
      
      animationType='slide'
      trasparent={false}
      visible={mostrar==='rergistro'}
      onRequestClose={()=> setmostrar(null)}

      > 
      <View style={styles.container2}>
        <Text style={styles.titulo}>formulario de registro</Text>

        <TextInput placeholder='Ingrese usuario' style={styles.input}/>
        <TextInput placeholder='Ingrese email' keyboardType={'email-addres'} style={styles.input}/>
        <TextInput placeholder='Ingrese contraseña' secureTextEntry={true} style={styles.input}/>
        <Pressable style={styles.boton} onPress={()=> setmostrar('alerta')}>
          <Text style={styles.text}>registrarse</Text>
        </Pressable>
        
      </View>
      </Modal>

      <Modal
      animationType='fade'
      trasparent={false}
      visible={mostrar==='alerta'}
      onRequestClose={()=> setmostrar(null)}
      > 
      <View style={styles.container3}>

      <View style={styles.containerAlerta}>
        <Text style={styles.textAlerta}>esto es una alerta</Text>
        <View style={styles.container.boton}>
          <Pressable style={styles.boton1} onPress={()=> setmostrar('alerta')}>
            <Text style={styles.text}>ok</Text>
          </Pressable>

          <Pressable style={styles.boton2} onPress={()=> setmostrar('alerta')}>
            <Text style={styles.text}>cerrar</Text>
          </Pressable>

        </View>
      </View>

      </View>
      </Modal>

      </View>
    )
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'

  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'


  },
   container3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'
  },
  boton:{
    backgroundColor:'#002aff',
    padding:15,
    borderRadius:20,
    marginBottom:15,
    width:'70%',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontSize18,
    fontWeight:'500'
  },
  titulo:{
    fontSize:25,
    marginBottom:20
  },
  input:{
    width:'100% ',
    borderWidth:1,
    borderColor:'000',
    borderRadius:10,
    padding:15,
    backgroundColor:'#531e1eff'
  },
  containerAlerta:{
    width: 300,
    height:200,
    backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  textAlerta:{
    fontSize:20,
    color:'black',

  },
  boton1:{
    backgroundColor:'#000',
    padding:15,
    borderRadius:20,
    marginRight:10,
    width:100,
    alignItems:'center'
  },
   boton2:{
    backgroundColor:'#ff0000ff',
    padding:15,
    borderRadius:20,
    marginRight:10,
    width:100,
    alignItems:'center'
  },
  containerboton:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25,
    width:'80',
  },
  




})