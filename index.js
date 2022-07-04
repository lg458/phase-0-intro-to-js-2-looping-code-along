function writeCards(recipients, ocassion) { 
  let cards = [];
  for (let i = 0; i < recipients.length; i++) { 
    cards.push(`Thank you, ${recipients[i]}, for the wonderful ${ocassion} gift!`);
  }
  return cards;
} 

function countDown(n) { 
  while (n >= 0) { 
    console.log(n--);
  }
} 
