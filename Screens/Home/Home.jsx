import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bar from '../../Components/Bar';
import checkList from '../../checklist.png'

export default function Home() {
  const navigation = useNavigation();

  return (
    <View >
      <Bar/>
      <View style={styles.body}>
      <Image  source={checkList} style={{ width: 175, height: 175, marginBottom: 50, marginTop: 50  }}/>
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
      <View style={styles.bottom1}>
      <View style={styles.bottom}>
        <Text style={styles.buttonText1}>© Copyright 2023 | Grupo Polachini | All Rights Reserved</Text>
      </View>
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
    height: 'auto',
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

  buttonText1: {
    color: 'white',
    fontSize: 13,
    fontWeight: '900',
  },


  bottom:{
    backgroundColor: '#d42c26',
    width: '100%',
    height: 60,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottom1:{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
