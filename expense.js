let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function render() {
  const list = document.getElementById("list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  expenses.forEach((e, i) => {
    sum += e.amount;
    list.innerHTML += `<li>${e.item} - $${e.amount} <button onclick="del(${i})">❌</button></li>`;
  });
  total.textContent = sum;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
  const item = document.getElementById("item").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if(item && amount>0) {
    expenses.push({item, amount});
    render();
    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
  }
}

function del(i) {
  expenses.splice(i,1);
  render();
}

render();
