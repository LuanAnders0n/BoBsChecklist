import React, { useState, useEffect } from 'react';
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
    margin: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    width: 200,
  },
});

const Checked = props => {
  const { handleChecked } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    handleChecked && handleChecked(isChecked);
  }, [isChecked]);

  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={[styles.checkBox, isChecked && { backgroundColor: '#4f9e1a' }]}
        onPress={() => {
          setIsChecked(true);
          setInputValue('');
        }}
      />
      <Text>Sim</Text>

      <TouchableOpacity
        style={[styles.checkBox, !isChecked && { backgroundColor: '#bb1717' }]}
        onPress={() => {
          setIsChecked(false);
        }}
      />
      <Text>Não</Text>

      {!isChecked && (
        <TextInput
          style={styles.input}
          placeholder="Justificativa"
          value={inputValue}
          onChangeText={value => setInputValue(value)}
        />
      )}
    </View>
  );
};

export default Checked;
