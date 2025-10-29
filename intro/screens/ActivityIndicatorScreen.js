import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'



export default function ActivityIndicatorScreen() {

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(()=> setLoading(false),3000);
  };

  if(loading){
    return(

    <View style={styles.container}>

      <View style={styles.loaderContainer}>
        <ActivityIndicator

          size="large"
          color="#5a8ee9ff"
          animating={true}
          hidesWhenStopped={true}
        
        />
        <Text style={styles.title}>Cargando...</Text>
      </View>

    </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ActivityIndicator</Text>
      <Button title="carga de datos" onPress={startLoading}></Button>
    </View>
    

  );

  
    
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5245a5ff',
  },
  title:{
    fontSize:20,
    alignItems:'center',
    marginBottom:20,
  },
  loaderContainer:{
    alignItems:'center',
  },
})