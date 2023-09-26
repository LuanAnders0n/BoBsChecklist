export const Distinct = (arr, prop) => {
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

const html = `
<html>
    <body>
    ${createHtmlPart(items)}
    </body>
    
    <!-- CSS -->
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

      body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
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
        width: 70%;
      }

      .item p:nth-child(2) {
        width: 5%;
      }

      .item p:nth-child(3) {
        width: 25%;
      }

      h5 {
        margin: 0;
      }
    </style>
</html>
`;

function createHtmlPart(itemsToTransform) {
  const htmlFormatted = Distinct(itemsToTransform, 'type').map(typeItem => {
    const title = String(typeItem);
    const itemsFiltered = itemsToTransform.filter(x => x.type === title);

    // Transform items in list of tags
    const newList = itemsFiltered.map(item => {
      return `
          <div>
            <p>${item.weight} ${item.text}</p>
            <p>${item.bool || 'NÃO'}<p>
            <p>${item.justicative || ' --- '}<p>
          </div>
      `;
    });
    const newItemsHTML = newList.join('');

    return `
        <h1>${title}</h1>
        <h5>
          ${newItemsHTML}
        </h5>
      `;
  });

  return htmlFormatted;
}

const generatePdf = async () => {
  const fileName = `Check-List`;
  /* 
  const file = await printToFileAsync({
    html: html,
    name: `${fileName}.pdf`,
    base64: false,
  });
  await shareAsync(file.uri); */
};
