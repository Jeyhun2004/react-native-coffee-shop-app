import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navegation from './components/Navegation';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegation />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
