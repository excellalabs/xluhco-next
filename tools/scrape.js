// Use this in the console at (https://xluh.co/list)

const scrapeFromOriginalXhula = () => {
  let theTable = document.getElementsByClassName("list")[0].children;
  let formattedData = [];
  for (let i = 0; i < theTable.length; i += 1) {
    let row = theTable[i];
    formattedData.push({
      'shortUrl': row.children[0].innerText.trim(),
      'destinationUrl': row.children[1].innerText,
    })
  }
  return formattedData;
}

scrapeFromOriginalXhula();