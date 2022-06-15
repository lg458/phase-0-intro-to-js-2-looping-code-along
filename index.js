//returns an array of thank you messages for each name provided
const cards = [];

function writeCards(recipients, eventType) { 
  for (let i = 0; i < recipients.length; i++) { 
    cards.push(`Thank you, ${recipients[i]}, for the wonderful ${eventType} gift!`);
  } 
  return cards;
} 

//counts down from the number provided to zero by invoking console.log once for each number
function countDown(n) { 
  while (n >= 0) { 
    console.log(n);
    n--;
  }
}
