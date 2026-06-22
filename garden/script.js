let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  const item = cart.find(p => p.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart() {
  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.innerHTML = `
      <span>${item.name} (₹${item.price} x ${item.qty})</span>
      <div>
        <button onclick="changeQty(${index}, -1)">➖</button>
        <button onclick="changeQty(${index}, 1)">➕</button>
        <button onclick="removeItem(${index})">🗑️ Remove</button>
      </div> 
    `;
    container.appendChild(div);
  });

  totalBox.innerText = `Total: ₹${total}`;
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

document.addEventListener("DOMContentLoaded", () => {
  displayCart();
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      document.getElementById("billing-section").classList.remove("hidden");
    });
  }
});
function addToCart(name, price) {
  // Get image dynamically
  const product = document.querySelector(`.product[data-name="${name}"] img`);
  const image = product ? product.src : "image/placeholder.png";

  // Load existing cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add new item
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart!`);
}

