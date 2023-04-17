async function getCards() {
  console.log('ok');
    return await (await fetch('/logements.json ')).json()
}


async function getCard(id) {
  const cards = await (await fetch('/logements.json')).json()
  return cards.find(function (card) {
      return card.id === id
  })

}

async function getDatas() {
  console.log('ok2');
    return await (await fetch('/data.json ')).json()
}



// const getCard = fetch("/logements.json")
//     .then((response) => response.json())
//     .then((logement) => logement)
//     console.log(getCard);
    
  
    
  // const logements = fetch("/logements.json")
  //   .then((response) => response.json())
  //   .then((logement) => {
  //     const eltest = document.getElementById("test");
  //     let s = "";
  //     logement.forEach((element) => {
  //       s += `
  //       <a href="./location.html?id=${element.id}"
  //             <h2>${element.title}</h2>
  //       </a>
  //       `;
  //     });
  //     eltest.innerHTML = s;
  //   });

    export {
        getCards,
       getCard,
       getDatas
    }