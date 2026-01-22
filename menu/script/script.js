console.log("Swiggy Clone Loaded");

//opens the popup and 15 secs timer
const container = document.getElementById("restaurantList");

// Render cards
cardsData.forEach(card => {
  container.innerHTML += `
    <div class="card">
      <img src="${card.img}">
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
      <button class="buy-btn" onclick="openPopup()">Buy Now</button>
    </div>
  `;
});

// Popup logic
let timeLeft = 15;
let timerId;

function openPopup() {
  clearInterval(timerId); // reset timer
  timeLeft = 15;

  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  document.getElementById("timer").innerText = timeLeft;

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerId);
      alert("Time's up! Grab Your Order Soon.");
      closePopup();
    }
  }, 1000);
}

function closePopup() {
  clearInterval(timerId);
  document.getElementById("popup").classList.add("hidden");
}
