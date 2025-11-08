import { Text, StyleSheet, View, ImageBackground,Animated, Easing, ScrollView } from 'react-native'
import Recat, { useState, useEffect, use} from 'react'
import { Button } from 'react-native-web';

export default function App() {
  const [cargando,setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);
 const[contador,setcontador]=useState(0);
  
  
  useEffect(()=>{
    const timer = setTimeout(() => {
      Animated.timing(desvanecido,{
        toValue:0,
        duration:800,
        useNativeDriver:true,

      }).start(()=> setCargando(false));

    },2000);
    return () => clearTimeout(timer);

  },[]);

   if(cargando){
    return(
      <Animated.View style={[styles.splashContainer,{opacity: desvanecido} ]}>
        <ImageBackground
          source = {require('../Examen2doP/assets/fondo.png')}
          resizeMode='contain'
          style={styles.splashImage}
          
        >
          <Text style={styles.splashText}>Culo si no...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }
    return (
      <ImageBackground
       source = {require('../Examen2doP/assets/mono.png')}
       resizeMode='cover'
       style={styles.background}

      

      >
       <View style={styles.textocontainer}>
        <Text style={styles.texto}>Biendenida a mi App</Text>
        <Text style={styles.titulo2}> mis deberes 07/11/25 </Text>
        
        <ScrollView 
        horizontal
          nestedScrollEnabled={true}
          style={styles.scrollhorizontal}
          showsHorizontalScrollIndicator={true}
        >
          <View style={styles.elementos}>
            <Text style={styles.text}>cuadro 1</Text>
            <Text>Descripcion:sacar al perrro 
              Prioridad:baja 
              Status:pendiente
            </Text>
          </View>
          <View style={styles.elementos1}>
            <Text style={styles.text}>cuadro 2</Text>
            <Text>limpiar la casa
              Prioridad:alta 
              Status:pendiente
            </Text>
          </View>
          <View style={styles.elementos2}>
            <Text style={styles.text}>cuadro 3</Text>
            <Text>Descripcion:hacer tarea mate 
              Prioridad:alta 
              Status:realizado
            </Text>
            
          </View>    

          <View style={styles.elementos2}>
            <Text style={styles.text}>reinicio </Text>
            <Button title=''>

            </Button>
            </View>

        </ScrollView>


        </View> 
        
       
      </ImageBackground>


    )
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',
  },
  texto:{
    color: 'black',
    fontSize:24,
    fontWeight: 'bold',
  },
  splashContainer:{
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:50,
  },
  splashImage:{
    flex: 1,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  splashText:{
    position:'absolute',
    fontSize:20,
    color:'#333',
  },
  textocontainer:{
    backgroundColor: 'white',
    padding:20,
  },
  titulo2: {
    background:' black',
    fontSize: 20,
    fontWeight: 'bold',


  },
  scrollhorizontal:{
  marginVertical:10,
  width:'100%',

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
elementos1:{
  width:'100%',
  height:100,
  backgroundColor:'#f54242a9',
  marginBottom:10,
  justifyContent:'center',
  alignItems:'center',
  marginVertical:10,
  borderRadius:10,
},
elementos2:{
  width:'100%',
  height:100,
  backgroundColor:'#42c2f5a9',
  marginBottom:10,
  justifyContent:'center',
  alignItems:'center',
  marginVertical:10,
  borderRadius:10,
},
tex:{
    color: 'black',
    fontSize:24,
    fontWeight: 'bold',
  },
  

})