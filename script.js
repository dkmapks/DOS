const shippingCost = 9.99;
let wallet = 0;

const warehouseProducts = [
  { id: 1, name: "Suplement B12 1g", buyPrice: 10 },
  { id: 2, name: "Kreatyna 500g", buyPrice: 30 },
  { id: 3, name: "Witamina C 100g", buyPrice: 15 },
  { id: 4, name: "Omega 3 60 kaps.", buyPrice: 25 },
  { id: 5, name: "Kawa ziarnista 250g", buyPrice: 20 },
  { id: 6, name: "Zioła relaksujące", buyPrice: 12 },
  { id: 7, name: "Ashwagandha 100g", buyPrice: 18 },
  { id: 8, name: "Pre-workout", buyPrice: 28 },
  { id: 9, name: "Shaker sportowy", buyPrice: 14 },
];

let shopInventory = [];

function updateWallet() {
  document.getElementById("wallet").innerText = `💰 Portfel: ${wallet.toFixed(2)} zł`;
}

function createCard(product, action, buttonText) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <strong>${product.name}</strong><br>
    ${action === "buy" ? `Cena hurtowa: ${product.buyPrice} zł` : ""}
    ${action === "set" ? `Cena zakupu: ${product.buyPrice} zł<br>` : ""}
  `;

  if (action === "buy") {
    const btn = document.createElement("button");
    btn.innerText = buttonText;
    btn.onclick = () => {
      shopInventory.push({ ...product, sellPrice: null });
      renderShop();
    };
    card.appendChild(btn);
  }

  if (action === "set") {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Cena sprzedaży";
    input.min = 0;
    const btn = document.createElement("button");
    btn.innerText = "Dodaj do sklepu";
    btn.onclick = () => {
      const price = parseFloat(input.value);
      if (!isNaN(price)) {
        product.sellPrice = price;
        renderStorefront();
      }
    };
    card.appendChild(input);
    card.appendChild(btn);
  }

  if (action === "sell") {
    card.innerHTML += `<br>Cena: ${product.sellPrice} zł + wysyłka ${shippingCost} zł`;
    const btn = document.createElement("button");
    btn.innerText = buttonText;
    btn.onclick = () => {
      wallet += product.sellPrice - product.buyPrice;
      updateWallet();
    };
    card.appendChild(btn);
  }

  return card;
}

function renderWarehouse() {
  const container = document.getElementById("warehouse");
  container.innerHTML = "";
  warehouseProducts.forEach(p => {
    container.appendChild(createCard(p, "buy", "Kup do sklepu"));
  });
}

function renderShop() {
  const container = document.getElementById("shop");
  container.innerHTML = "";
  shopInventory.forEach((p, i) => {
    if (p.sellPrice === null) {
      container.appendChild(createCard(p, "set"));
    }
  });
}

function renderStorefront() {
  const container = document.getElementById("storefront");
  container.innerHTML = "";
  shopInventory.forEach(p => {
    if (p.sellPrice !== null) {
      container.appendChild(createCard(p, "sell", "Kup jako klient"));
    }
  });
}

renderWarehouse();
updateWallet();
