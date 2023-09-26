import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import Bar from '../../Components/Bar';
import { ScrollView } from 'react-native-gesture-handler';
import DynamicItems from '../../Components/DynamicItems';

function Loja() {
  const itemsStore = [
    {
      type: 'BALCÃO',
      text: 'LOJA ESTÁ ABERTA DURANTE SEU HORÁRIO DE FUNCIONAMENTO',
      weight: '2',
    },
    {
      type: 'BALCÃO',
      text: 'OS PRODUTOS SÃO ENTREGUES COM PRECISÃO, CONFORME OS PEDIDOS SOLICITADOS / PRODUTOS PARA VIAGEM SERVIDOS DE ACORDO COM PADRÃO DE MONTAGEM',
      weight: '2',
    },
    {
      type: 'BALCÃO',
      text: 'TEMPO DE ENTREGA NA LOJA É ≤ 4 MINUTOS',
      weight: '2',
    },
    {
      type: 'BALCÃO',
      text: 'TEMPO TOTAL DE ATENDIMENTO NO BALCÃO É MENOR OU IGUAL A 2 MINUTOS',
      weight: '2',
    },

    {
      type: 'CASA DE MAQUINAS',
      text: 'A CASA DE MÁQUINAS ESTÁ SEM NENHUM TIPO DE MATERIAL IMPRÓPRIO (MATERIAIS DE MKT ANTIGO, RESTO DE EQUIPAMENTOS, RESTO DE OBRAS E OUTROS).',
      weight: '2',
    },

    {
      type: 'COPA',
      text: 'HÁ PRESENÇA DE INFESTAÇÃO / ATIVIDADE DE PRAGAS',
      weight: '3',
    },
    {
      type: 'COPA',
      text: 'PIA PARA A LAVAGEM DAS MÃOS ESTÁ ACESSÍVEL, LIMPA,FUNCIONANDO CORRETAMENTE, USADA SOMENTE PARA ALAVAGEM DAS MÃOS E COM O COM O PASSO A PASSO DELAVAGEM DAS MÃOS FIXADO E PRODUTOS ABASTECIDOS',
      weight: '3',
    },
    {
      type: 'COPA',
      text: 'RALOS FUNCIONANDO CORRETAMENTE SEM REFLUXO DO ESGOTO NOS RALOS E DRENOS DO RESTAURANTE/ COZINHAOU BANHEIROS',
      weight: '3',
    },
    {
      type: 'COPA',
      text: 'HÁ PRESENÇA DE POSSIVEIS ACESSOS/ABRIGOS DE PRAGAS',
      weight: '2',
    },
    {
      type: 'COPA',
      text: 'PIAS E ENCANAMENTOS ESTÃO LIMPOS E EM BOM ESTADO DE CONSERVAÇÃO: PIA DA COPA, AREA DO MOP, CAIXAS DE GORDURA E TODOS OS RALOS ESTÃO LIMPOS E -FUNCIONANDO CORRETAMENTE ENCANAMENTOS LIMPOS EEM BOM ESTADO DE CONSERVAÇÃO',
      weight: '2',
    },
    {
      type: 'COPA',
      text: 'PROCESSO E TEMPO DA LAVAGEM DAS MÃOS É REALIZADA CORRETAMENTE',
      weight: '2',
    },
    {
      type: 'ESTOQUE',
      text: 'ALIMENTOS ARMAZENADOS QUENTES SÃO MANTIDOS EM TEMPERATURA ≥60°C',
      weight: '3',
    },
    {
      type: 'ESTOQUE',
      text: 'CONTAMINAÇÃO CRUZADA OU RISCO PARA CONTAMINAÇÃO CRUZADA NÃO É OBSERVADO',
      weight: '3',
    },
    {
      type: 'ESTOQUE',
      text: 'INGREDIENTES E PRODUTOS ESTÃO DENTRO DO PRAZO DE VALIDADE PRIMARIA E ROTULADOS ADEQUADAMENTE',
      weight: '3',
    },
    {
      type: 'ESTOQUE',
      text: 'TODOS OS ALIMENTOS QUE PASSAM POR COCÇÃO SÃO PREPARADOS DE FORMAR A ATINGIR A TEMPERATURA INTERNA ADEQUADA',
      weight: '3',
    },
    {
      type: 'FRITADEIRA',
      text: 'A FRITADEIRA NUNCA É COMPLETADA COM ÁGUA',
      weight: '3',
    },
    {
      type: 'GERENCIA',
      text: 'RESTAURANTE TEM ENERGIA ELÉTRICA',
      weight: '3',
    },
    {
      type: 'GERENCIA',
      text: 'TERMÔMETROS EM USO ESTÃO CALIBRADOS',
      weight: '3',
    },
    {
      type: 'GESTÃO DE PESSOAS',
      text: 'NÃO HÁ MEMBROS DA EQUIPE TRABALHANDO COM SINTOMAS DE DOENÇA/INFECÇÃO E/OU CORTES COMCURATIVOS SEM UTILIZAR LUVAS',
      weight: '3',
      bool: 'Não',
      justificative: ''
    },
    {
      type: 'SALA DE LIXO',
      text: 'A SALA DE LIXO SE MANTÉM TRANCADA DURANTE A OPERAÇÃO DA LOJA ',
      weight: '2',
    },
    {
      type: 'SALADEIRA',
      text: 'A SEÇÃO SALADEIRA ENCONTRASSE ABASTECIDA PARA O HORÁRIO DE MOVIMENTO ',
      weight: '2',
    },
    {
      type: 'SALÃO',
      text: 'NO MÍNIMO UM BANHEIRO ESTÁ DISPONÍVEL E EM FUNCIONAMENTO',
      weight: '3',
    },
    
  ];

  return (
    <ScrollView>
      <View>
        <Bar />
        <DynamicItems items={itemsStore} />
      </View>
    </ScrollView>
  );
}

export default Loja;
