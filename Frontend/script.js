let balance = 1000000000000;

const items = {
  building: 300000000,
  mansion: 3000000,
  car: 200000,
  phone: 1000,
  chicken: 20,
};

const ownedItems = {
  building: 0,
  mansion: 0,
  car: 0,
  phone: 0,
  chicken: 0,
};

function updateBalance() {
  document.getElementById("balance").innerText = `Balance: $${balance.toLocaleString()}`;
}

function buyItem(item) {
  if (balance >= items[item]) {
    balance -= items[item];
    ownedItems[item]++;
    updateBalance();
    updateOwnedItems();
  } else {
    alert("Not Enough Balance!");
  }
}

function resetGame() {
  balance = 1000000000000;
  for (let key in ownedItems) {
    ownedItems[key] = 0;
  }
  updateBalance();
  updateOwnedItems();
}

function updateOwnedItems() {
  const ownedItemsList = document.getElementById("owned-items");
  ownedItemsList.innerHTML = "";
  for (let key in ownedItems) {
    if (ownedItems[key] > 0) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} x${ownedItems[key]}`;
      ownedItemsList.appendChild(listItem);
    }
  }
}

// 초기 상태 설정
updateBalance();
updateOwnedItems();
