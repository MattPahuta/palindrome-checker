const form = document.getElementById('form');
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultMessage = document.getElementById('result-message');

function handleSubmit(e) {
  e.preventDefault();
  const inputVal = textInput.value;

  console.log(inputVal)

  if (!inputVal) {
    alert('Please enter a value.');
  }

}

form.addEventListener('submit', handleSubmit);