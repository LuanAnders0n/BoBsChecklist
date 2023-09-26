import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CheckBox from '../CheckBox';

const styles = StyleSheet.create({
  bodyFlex: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  table: {
    borderColor: '#000',
    borderBottomWidth: 1,
  },

  itemText: {
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 3,
  },
});

const DisplayItems = props => {
  const { items, changeItem } = props;

  const [justificative, setJustificative] = useState('');

  return (
    <View style={styles.bodyFlex}>
      {items.map((item, index) => (
        <View style={styles.table} key={index}>
          <Text style={styles.itemText}>
            {item.weight} {item.text}
          </Text>
          <CheckBox
            handleChecked={isChecked => {
              changeItem && changeItem(isChecked, justificative, item.id);
            }}
            setJustificative={setJustificative}
          />
        </View>
      ))}
    </View>
  );
};

export default DisplayItems;
