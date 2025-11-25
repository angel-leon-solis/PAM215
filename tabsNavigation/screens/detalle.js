import { View, Text, StyleSheet } from 'react-native';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de usuario</Text>
      <Text style={styles.title2}>usando Navegation Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#240d88ff'
  },
});
