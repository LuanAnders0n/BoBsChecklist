import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CheckBox from '../Components/CheckBox';

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

export const DisplayItems = ({ items, changeItem }) => {
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
              changeItem(isChecked, justificative, item.id);
            }}
            setJustificative={setJustificative}
          />
        </View>
      ))}
    </View>
  );
};

export default function Items() {
  let balcaoItems = [
    {
      id: 1,
      text: 'LOJA ESTÁ ABERTA DURANTE SEU HORÁRIO DE FUNCIONAMENTO',
      weight: '2',
      bool: false,
      justificative: '',
    },
    {
      id: 2,
      text: 'OS PRODUTOS SÃO ENTREGUES COM PRECISÃO, CONFORME OS PEDIDOS SOLICITADOS / PRODUTOS PARA VIAGEM SERVIDOS DE ACORDO COM PADRÃO DE MONTAGEM',
      weight: '2',
      bool: false,
      justificative: '',
    },
    {
      id: 3,
      text: 'TEMPO DE ENTREGA NA LOJA É ≤ 4 MINUTOS',
      weight: '2',
      bool: false,
      justificative: '',
    },
    {
      id: 4,
      text: 'TEMPO TOTAL DE ATENDIMENTO NO BALCÃO É MENOR OU IGUAL A 2 MINUTOS',
      weight: '2',
      bool: false,
      justificative: '',
    },
  ];

  let cupItems = [
    {
      id: 5,
      text: 'HÁ PRESENÇA DE INFESTAÇÃO / ATIVIDADE DE PRAGAS',
      weight: '3',
      bool: false,
      justificative: '',
    },
    {
      id: 6,
      text: 'PIA PARA A LAVAGEM DAS MÃOS ESTÁ ACESSÍVEL, LIMPA,FUNCIONANDO CORRETAMENTE, USADA SOMENTE PARA ALAVAGEM DAS MÃOS E COM O COM O PASSO A PASSO DELAVAGEM DAS MÃOS FIXADO E PRODUTOS ABASTECIDOS',
      weight: '3',
      bool: false,
      justificative: '',
    },
    {
      id: 7,
      text: 'RALOS FUNCIONANDO CORRETAMENTE SEM REFLUXO DO ESGOTO NOS RALOS E DRENOS DO RESTAURANTE/ COZINHAOU BANHEIROS',
      weight: '3',
      bool: false,
      justificative: '',
    },
    {
      id: 8,
      text: 'HÁ PRESENÇA DE POSSIVEIS ACESSOS/ABRIGOS DE PRAGAS',
      weight: '2',
      bool: false,
      justificative: '',
    },
    {
      id: 9,
      text: 'PIAS E ENCANAMENTOS ESTÃO LIMPOS E EM BOM ESTADO DE CONSERVAÇÃO: PIA DA COPA, AREA DO MOP, CAIXAS DE GORDURA E TODOS OS RALOS ESTÃO LIMPOS E -FUNCIONANDO CORRETAMENTE ENCANAMENTOS LIMPOS EEM BOM ESTADO DE CONSERVAÇÃO',
      weight: '2',
      bool: false,
      justificative: '',
    },
    {
      id: 10,
      text: 'PROCESSO E TEMPO DA LAVAGEM DAS MÃOS É REALIZADA CORRETAMENTE',
      weight: '2',
      bool: false,
      justificative: '',
    },
  ];

  let estorageItems = [
    {
      id: 11,
      text: 'ALIMENTOS ARMAZENADOS QUENTES SÃO MANTIDOS EM TEMPERATURA ≥60°C',
      weight: '3',
      bool: false,
      justificative: '',
    },
    {
      id: 12,
      text: 'CONTAMINAÇÃO CRUZADA OU RISCO PARA CONTAMINAÇÃO CRUZADA NÃO É OBSERVADO',
      weight: '3',
      bool: false,
      justificative: '',
    },
    {
      id: 13,
      text: 'INGREDIENTES E PRODUTOS ESTÃO DENTRO DO PRAZO DE VALIDADE PRIMARIA E ROTULADOS ADEQUADAMENTE',
      weight: '3',
      bool: false,
      justificative: '',
    },
  ];

  let adminItems = [
    {
      id: 14,
      text: 'RESTAURANTE TEM ENERGIA ELÉTRICA',
      weight: '3',
      bool: false,
      justificative: '',
    },

    {
      id: 15,
      text: 'TERMÔMETROS EM USO ESTÃO CALIBRADOS',
      weight: '3',
      bool: false,
      justificative: '',
    },
  ];

  let peopleItems = [
    {
      text: 'NÃO HÁ MEMBROS DA EQUIPE TRABALHANDO COM SINTOMAS DE DOENÇA/INFECÇÃO E/OU CORTES COMCURATIVOS SEM UTILIZAR LUVAS',
      weight: '3',
      id: 16,
      bool: false,
      justificative: '',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.body}>
        <Text style={styles.textItens}>BALCÃO</Text>
        <DisplayItems items={balcaoItems} />
        <Text style={styles.textItens}>COPA</Text>
        <DisplayItems items={cupItems} />
        <Text style={styles.textItens}>ESTOQUE</Text>
        <DisplayItems items={estorageItems} />
        <Text style={styles.textItens}>GERENCIA</Text>
        <DisplayItems items={adminItems} />
        <Text style={styles.textItens}>GESTÃO DE PESSOAS</Text>
        <DisplayItems items={peopleItems} />
        <Button style={styles.btn} title="Generate PDF" />
      </View>
    </ScrollView>
  );
}
