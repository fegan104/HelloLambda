console.log("in module")
const addButton = document.getElementById('addButton')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const resultText = document.getElementById('result')

addButton.addEventListener("click", e => {
  console.log("clicked")
  const arg1 = input1.value
  const arg2 = input2.value

  fetch(`https://8z9nsc22ga.execute-api.us-east-2.amazonaws.com/Alpha/calculator?arg1=${arg1}&arg2=${arg2}`)
  .then(res => res.text())
  .then(sum => resultText.innerHTML = `sum: ${sum}`)
})