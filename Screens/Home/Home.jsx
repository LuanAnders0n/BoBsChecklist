import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bar from '../../Components/Bar';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View >
      <Bar/>
      <View style={styles.body}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Loja')}
        >
          <Text style={styles.buttonText}>Loja</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiosque')}
        >
          <Text style={styles.buttonText}>Quiosque</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },

  button: {
    width: 300,
    backgroundColor: '#d42c26',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
});
