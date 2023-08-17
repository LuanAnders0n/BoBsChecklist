import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5,
    marginLeft: 10,

  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    width: 200,
  },
});

export default function App() {
  const [isYesChecked, setIsYesChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [noInput, setNoInput] = useState('');

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={[
          styles.checkBox,
          isYesChecked && { backgroundColor: '#4f9e1a' },
        ]}
        onPress={() => {
          setIsYesChecked(!isYesChecked);
          setIsNoChecked(false);
          setNoInput('');
        }}
      />
      <Text>Sim</Text>

      <TouchableOpacity
        style={[styles.checkBox, isNoChecked && { backgroundColor: '#bb1717' }]}
        onPress={() => {
          setIsNoChecked(!isNoChecked);
          setIsYesChecked(false);
        }}
      />
      <Text>Não</Text>

      {isNoChecked && (
        <TextInput
          style={styles.input}
          placeholder="Justificativa"
          value={noInput}
          onChangeText={value => setNoInput(value)}
        />
      )}
    </View>
  );
}
