import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CheckBox from '../CheckBox';
import DynamicItems from '../DynamicItems';

const styles = StyleSheet.create({
  itemText: {
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 3,
  },

  bodyFlex: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  textItens: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#cfc8c8',
    marginTop: 10,
    marginBottom: 10,
  },

  btn: {
    margin: 10,
  },

  table: {
    borderColor: '#000',
    borderBottomWidth: 1,
  },
});

function ItemsQuiosque() {
  
  return <DynamicItems items={items} />;
}

export default ItemsQuiosque;
