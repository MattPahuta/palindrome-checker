const form = document.getElementById('form');
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// palindrome checking function
function isPalindrome(str) {
  const re = /[\W_]/g;
  const lowerCaseRegStr = str.toLowerCase().replace(re, '');
  const reversedStr = lowerCaseRegStr.split('').reverse().join('');
  const isPal = reversedStr === lowerCaseRegStr; // true or false
  generateMessage(isPal, str); // call generate message 
}

// generate html messaging
function generateMessage(isPal, originalStr) {
  const palState = isPal ? ' is a palindrome.' : ' is not a palindrome';
  const inputStrHtml = `<strong>${originalStr}</strong>`;
  const resultP = document.createElement('p');
  resultP.innerHTML = `${inputStrHtml}${palState}`;
  resultDiv.appendChild(resultP);
}


function handleSubmit(e) {
  e.preventDefault();
  const inputVal = textInput.value;
  if (!inputVal) {
    alert('Please enter a value.');
    return;
  }
  // clear previous result html
  resultDiv.replaceChildren();
  // clear input
  textInput.value = "";
  // call generate message, pass in 
  isPalindrome(inputVal);

}

form.addEventListener('submit', handleSubmit);