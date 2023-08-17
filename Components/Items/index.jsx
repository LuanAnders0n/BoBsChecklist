import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '../CheckBox';


const styles = StyleSheet.create({
  itemText: {
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 3,
  },
});

const DisplayItems = ({ items }) => {
  return (
    <View>
      {items.map((item, index) => (
        <Text key={index} style={styles.itemText}>
          {item.weight}
          {item.text}
          <CheckBox/>
        </Text>
      ))}
    </View>
  );
};

export default function Items() {
  const balcaoItems = [
    {
      text: 'LOJA ESTÁ ABERTA DURANTE SEU HORÁRIO DE FUNCIONAMENTO',
      weight: '2',
    },
    {
      text: 'OS PRODUTOS SÃO ENTREGUES COM PRECISÃO, CONFORME OS PEDIDOS SOLICITADOS / PRODUTOS PARA VIAGEM SERVIDOS DE ACORDO COM PADRÃO DE MONTAGEM',
      weight: '2',
    },
    {
      text: 'TEMPO DE ENTREGA NA LOJA É ≤ 4 MINUTOS',
      weight: '2',
    },
    {
      text: 'TEMPO TOTAL DE ATENDIMENTO NO BALCÃO É MENOR OU IGUAL A 2 MINUTOS',
      weight: '2',
    },
  ];

  const machineHouseItems = [
    {
      text: 'A CASA DE MÁQUINAS ESTÁ SEM NENHUM TIPO DE MATERIAL IMPRÓPRIO (MATERIAIS DE MKT ANTIGO, RESTO DE EQUIPAMENTOS, RESTO DE OBRAS E OUTROS).',
      weight: '2',
    },
  ];

  const cupItems = [
    {
      text: 'HÁ PRESENÇA DE INFESTAÇÃO / ATIVIDADE DE PRAGAS',
      weight: '3',
    },
    {
      text: 'PIA PARA A LAVAGEM DAS MÃOS ESTÁ ACESSÍVEL, LIMPA,FUNCIONANDO CORRETAMENTE, USADA SOMENTE PARA ALAVAGEM DAS MÃOS E COM O COM O PASSO A PASSO DELAVAGEM DAS MÃOS FIXADO E PRODUTOS ABASTECIDOS',
      weight: '3',
    },
    {
      text: 'RALOS FUNCIONANDO CORRETAMENTE SEM REFLUXO DO ESGOTO NOS RALOS E DRENOS DO RESTAURANTE/ COZINHAOU BANHEIROS',
      weight: '3',
    },
    {
      text: 'HÁ PRESENÇA DE POSSIVEIS ACESSOS/ABRIGOS DE PRAGAS',
      weight: '2',
    },
    {
      text: 'PIAS E ENCANAMENTOS ESTÃO LIMPOS E EM BOM ESTADO DE CONSERVAÇÃO: PIA DA COPA, AREA DO MOP, CAIXAS DE GORDURA E TODOS OS RALOS ESTÃO LIMPOS E -FUNCIONANDO CORRETAMENTE ENCANAMENTOS LIMPOS EEM BOM ESTADO DE CONSERVAÇÃO',
      weight: '2',
    },
    {
      text: 'PROCESSO E TEMPO DA LAVAGEM DAS MÃOS É REALIZADA CORRETAMENTE',
      weight: '2',
    },
  ];

  const estorageItems = [
    {
      text: 'ALIMENTOS ARMAZENADOS QUENTES SÃO MANTIDOS EM TEMPERATURA ≥60°C',
      weight: '3',
    },
    {
      text: 'CONTAMINAÇÃO CRUZADA OU RISCO PARA CONTAMINAÇÃO CRUZADA NÃO É OBSERVADO',
      weight: '3',
    },
    {
      text: 'INGREDIENTES E PRODUTOS ESTÃO DENTRO DO PRAZO DE VALIDADE PRIMARIA E ROTULADOS ADEQUADAMENTE',
      weight: '3',
    },
    {
      text: 'TODOS OS ALIMENTOS QUE PASSAM POR COCÇÃO SÃOPREPARADOS DE FORMAR A ATINGIR A TEMPERATURA INTERNA ADEQUADA',
      weight: '3',
    },
  ];

  const frieItems = [
    {
      text: 'A FRITADEIRA NUNCA É COMPLETADA COM ÁGUA',
      weight: '3',
    },
  ];

  const adminItems = [
    {
      text: 'RESTAURANTE TEM ENERGIA ELÉTRICA',
      weight: '3',
    },

    {
      text: 'TERMÔMETROS EM USO ESTÃO CALIBRADOS',
      weight: '3',
    },
  ];

  const peopleItems = [
    {
      text: 'NÃO HÁ MEMBROS DA EQUIPE TRABALHANDO COM SINTOMAS DE DOENÇA/INFECÇÃO E/OU CORTES COMCURATIVOS SEM UTILIZAR LUVAS',
      weight: '3',
    },
  ];

  const treashRoomItems = [
    {
      text: 'A SALA DE LIXO SE MANTÉM TRANCADA DURANTE A OPERAÇÃO DA LOJA ',
      weight: '2',
    },
  ];

  const greenItems = [
    {
      text: 'A SEÇÃO SALADEIRA ENCONTRASSE ABASTECIDA PARA O HORÁRIO DE MOVIMENTO ',
      weight: '2',
    },
  ];

  const roomItems = [
    {
      text: 'NO MÍNIMO UM BANHEIRO ESTÁ DISPONÍVEL E EM FUNCIONAMENTO',
      weight: '3',
    },
  ];



  return (
    <View>
      <DisplayItems items={balcaoItems} />       
      <DisplayItems items={machineHouseItems} />
      <DisplayItems items={cupItems} />
      <DisplayItems items={estorageItems} />
      <DisplayItems items={frieItems} />
      <DisplayItems items={adminItems} />
      <DisplayItems items={peopleItems} />
      <DisplayItems items={treashRoomItems} />
      <DisplayItems items={greenItems} />
      <DisplayItems items={roomItems} />

     
    </View>
  );
}
