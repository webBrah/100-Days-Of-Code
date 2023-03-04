const btn = document.querySelector('.get-quotes');
btn.addEventListener('click', getQuotes);
const number = document.getElementById('number');

function getQuotes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    return alert('Please enter a number.');
  } else {
    const https = new XMLHttpRequest();
    https.open('GET', 'https://type.fit/api/quotes', true);

    https.onload = function () {
      if (this.status === 200) {
        const response = shuffle(JSON.parse(this.responseText));
        let output = '';

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
                <li>Quotes: ${response[i].text}</li>
                <li>Author: ${response[i].author}</li>
                <hr>
            `;
        }

        document.querySelector('.quotes').innerHTML = output;
      }
    };
    https.send();
  }
}

// FUNCTION TO SHUFFLE QUOTES
function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  // While element exist in the array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    // DECREASE CI by 1
    CI--;
    // SWAP THE LAST ELEMENT WITH CI
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
