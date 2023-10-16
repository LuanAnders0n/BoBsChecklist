import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import DisplayItems from '../DisplayItems';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  textItems: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#cfc8c8',
    marginTop: 10,
    marginBottom: 10,
  },

  btnBody:{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
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
});

function DynamicItems(props) {
  const { items, changeItem } = props;

  const Distinct = (arr, prop) => {
    // a = novo array
    return arr.reduce((a, d) => {
      // d = valor dentro do array passado ("arr")
      if (!a.includes(d[prop])) {
        // d[prop] = valor buscado na "prop" do valor do arr ex: type: "prop"
        // envio do valor para o novo arr a
        a.push(d[prop]);
      }
      return a;
    }, []);
  };

  const getTitle = type => {
    switch (key) {
      case 'balcon':
        break;
      default:
        break;
    }
  };

  function createHtmlPart(itemsToTransform) {
    const htmlFormatted = Distinct(itemsToTransform, 'type').map(typeItem => {
      const title = String(typeItem);
      const itemsFiltered = itemsToTransform.filter(x => x.type === title);

      // Transform items in list of tags
      const newList = itemsFiltered.map(item => {
        console.log({ item });
        return `
          <div class="item" >
            <p>${item.weight} ${item.text}</p>
            <p>${item.bool ? 'SIM' : 'NÃO'}<p>
            <p>${item.justificative || '   '}<p>
          </div>
      `;
      });
      const newItemsHTML = newList.join('');

      const date = new Date();
      const formattedDate = date.toLocaleDateString('pt-BR');

      return `
      <h2>${formattedDate}</h2>
        <h1>${title}</h1>
        <div>
          ${newItemsHTML}
        </div>
      `;
    });

    return htmlFormatted.join('');
  }

  const generatePdf = async () => {
    const fileName = `Check-List`;
    const html = `
      <html>
          <body>
          ${createHtmlPart(items)}
          </body>
      <!-- CSS -->
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        body {
          margin: 10px;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        h1 {
          text-decoration-line: underline;
        }

        .item {
          display: flex;
          align-items: center;
          border: 1px solid black;
          font-weight: 500;
        }

        .item p {
          display: flex;
          align-items: center;
          border-right: 1px solid black;
          padding: 0 5px; 
          margin: 0;
          min-height: 48px;
        }

        .item p:first-child {
          width: 60%;
        }

        .item p:nth-child(2) {
          width: 5%;
        }

        .item p:nth-child(3) {
          min-width: 30%;
        }
      </style>
      </html>
      `;

    const file = await printToFileAsync({
      html: html,
      name: `${fileName}.pdf`,
      base64: false,
    });
    await shareAsync(file.uri);
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        {Distinct(items, 'type').map(typeItem => {
          const typeName = String(typeItem);
          const itemsFiltered = items.filter(x => x.type === typeName);

          return (
            <>
              <Text style={styles.textItems}>{typeName}</Text>
              <DisplayItems items={itemsFiltered} changeItem={changeItem} />
            </>
          );
        })}
        <View style={styles.btnBody}>
         <TouchableOpacity
          style={styles.button}
          onPress={generatePdf}
        >
          <Text style={styles.buttonText}>Gerar relatorio</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default DynamicItems;
