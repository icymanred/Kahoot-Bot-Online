document.getElementById('naming').hidden = false

const checkbox = document.getElementById("bot")
checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById('naming').hidden = true
  } else {
        document.getElementById('naming').hidden = false

  }
});

let button = document.getElementById("button").addEventListener('click', () => {
  const url = "https://Kahoot-Bot-Online.icyicy1.repl.co/spam"
  let data ={
    "id": document.getElementById('kid').value.replace(/\s/g, ""),
    "amount": document.getElementById('amount').value,
    "antibot": document.getElementById('bot').value,
    "name": document.getElementById("name").value,
    "bypass": document.getElementById("bypass").value,
    "random": document.getElementById("rand")
  }
  if (parseInt(document.getElementById('amount').value) > 2000) {
    alert("You have too many bots")
  } else {
    let fetchData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
}
  fetch(url,fetchData)
  }
})

