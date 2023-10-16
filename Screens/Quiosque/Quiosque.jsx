import { View, ScrollView } from 'react-native';
import Bar from '../../Components/Bar';
import DynamicItems from '../../Components/DynamicItems';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function Quiosque() {
  let itemsQuiosque = [
    {
      type: 'BALCÃO',
      text: 'LOJA ESTÁ ABERTA DURANTE SEU HORÁRIO DE FUNCIONAMENTO',
      weight: '2',
      id: 1,
      bool: false,
      justificative: '',
    },
    {
      type: 'BALCÃO',
      text: 'OS PRODUTOS SÃO ENTREGUES COM PRECISÃO, CONFORME OS PEDIDOS SOLICITADOS / PRODUTOS PARA VIAGEM SERVIDOS DE ACORDO COM PADRÃO DE MONTAGEM',
      weight: '2',
      id: 2,
      bool: false,
      justificative: '',
    },
    {
      type: 'BALCÃO',
      text: 'TEMPO DE ENTREGA NA LOJA É ≤ 4 MINUTOS',
      weight: '2',
      id: 3,
      bool: false,
      justificative: '',
    },
    {
      type: 'BALCÃO',
      text: 'TEMPO TOTAL DE ATENDIMENTO NO BALCÃO É MENOR OU IGUAL A 2 MINUTOS',
      weight: '2',
      id: 4,
      bool: false,
      justificative: '',
    },
    {
      type: 'COPA',
      text: 'HÁ PRESENÇA DE INFESTAÇÃO / ATIVIDADE DE PRAGAS',
      weight: '3',
      id: 5,
      bool: false,
      justificative: '',
    },
    {
      type: 'COPA',
      text: 'PIA PARA A LAVAGEM DAS MÃOS ESTÁ ACESSÍVEL, LIMPA,FUNCIONANDO CORRETAMENTE, USADA SOMENTE PARA ALAVAGEM DAS MÃOS E COM O COM O PASSO A PASSO DELAVAGEM DAS MÃOS FIXADO E PRODUTOS ABASTECIDOS',
      weight: '3',
      id: 6,
      bool: false,
      justificative: '',
    },
    {
      type: 'COPA',
      text: 'RALOS FUNCIONANDO CORRETAMENTE SEM REFLUXO DO ESGOTO NOS RALOS E DRENOS DO RESTAURANTE/ COZINHAOU BANHEIROS',
      weight: '3',
      id: 7,
      bool: false,
      justificative: '',
    },
    {
      type: 'COPA',
      text: 'HÁ PRESENÇA DE POSSIVEIS ACESSOS/ABRIGOS DE PRAGAS',
      weight: '2',
      id: 8,
      bool: false,
      justificative: '',
    },
    {
      type: 'COPA',
      text: 'PIAS E ENCANAMENTOS ESTÃO LIMPOS E EM BOM ESTADO DE CONSERVAÇÃO: PIA DA COPA, AREA DO MOP, CAIXAS DE GORDURA E TODOS OS RALOS ESTÃO LIMPOS E -FUNCIONANDO CORRETAMENTE ENCANAMENTOS LIMPOS EEM BOM ESTADO DE CONSERVAÇÃO',
      weight: '2',
      id: 9,
      bool: false,
      justificative: '',
    },
    {
      type: 'COPA',
      text: 'PROCESSO E TEMPO DA LAVAGEM DAS MÃOS É REALIZADA CORRETAMENTE',
      weight: '2',
      id: 10,
      bool: false,
      justificative: '',
    },
    {
      type: 'ESTOQUE',
      text: 'ALIMENTOS ARMAZENADOS QUENTES SÃO MANTIDOS EM TEMPERATURA ≥60°C',
      weight: '3',
      id: 11,
      bool: false,
      justificative: '',
    },
    {
      type: 'ESTOQUE',
      text: 'CONTAMINAÇÃO CRUZADA OU RISCO PARA CONTAMINAÇÃO CRUZADA NÃO É OBSERVADO',
      weight: '3',
      id: 12,
      bool: false,
      justificative: '',
    },
    {
      type: 'ESTOQUE',
      text: 'INGREDIENTES E PRODUTOS ESTÃO DENTRO DO PRAZO DE VALIDADE PRIMARIA E ROTULADOS ADEQUADAMENTE',
      weight: '3',
      id: 13,
      bool: false,
      justificative: '',
    },
    {
      type: 'GERENCIA',
      text: 'RESTAURANTE TEM ENERGIA ELÉTRICA',
      weight: '3',
      id: 14,
      bool: false,
      justificative: '',
    },
    {
      type: 'GERENCIA',
      text: 'TERMÔMETROS EM USO ESTÃO CALIBRADOS',
      weight: '3',
      id: 15,
      bool: false,
      justificative: '',
    },
    {
      type: 'GESTÃO DE PESSOAS',
      text: 'NÃO HÁ MEMBROS DA EQUIPE TRABALHANDO COM SINTOMAS DE DOENÇA/INFECÇÃO E/OU CORTES COMCURATIVOS SEM UTILIZAR LUVAS',
      weight: '3',
      id: 16,
      bool: false,
      justificative: '',
    },
  ];

  const changeItem = (isChecked, justificative, itemId) => {
    let objIndex = itemsQuiosque.findIndex(obj => obj.id === itemId);

    itemsQuiosque[objIndex].bool = isChecked;
    itemsQuiosque[objIndex].justificative = justificative || '';
  };

  return (
    <ScrollView>
      <View>
        <Bar />
        <DynamicItems items={itemsQuiosque} changeItem={changeItem} />
      </View>
    </ScrollView>
  );
}
