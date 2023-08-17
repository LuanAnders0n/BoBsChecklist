import { Image, Text, View, StyleSheet } from 'react-native';
import bobs from '../../bobs-logo.png';

export default function Bar() {
  return (
    <View style={styles.container}>
      <Image source={bobs} style={{ width: 200, height: 100 }} />
      <Text style={styles.text}>Check-List</Text>
    </View>
  );
}
const styles = StyleSheet.create({  
  container: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  backgroundColor: '#e72929',
  width: '100%',
  height: 110,
},

text: {
  fontSize: 35,
  color: '#fff',
  fontWeight: '900',
  marginLeft: 10,

},})

