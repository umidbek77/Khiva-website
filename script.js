// Header kodi
// Smooth scroll effect for all navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Carousel automatic sliding
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item"); // Select all carousel items
const totalItems = items.length;

function showNextImage() {
  items[currentIndex].classList.remove("active"); // Hide the current item
  currentIndex = (currentIndex + 1) % totalItems; // Move to the next item
  items[currentIndex].classList.add("active"); // Show the next item
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Initially display the first image
items[currentIndex].classList.add("active");

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Initially display the first image
images[currentIndex].classList.add("visible");

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const showMoreButton = document.getElementById("show-more");

  // Boshlang'ich holat: Faqat 5 ta kartani ko'rsatamiz
  const initialVisibleCards = 5;

  function updateCardVisibility() {
    cards.forEach((card, index) => {
      if (index < initialVisibleCards) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Kartalar sonini oshirish
  let visibleCards = initialVisibleCards;

  showMoreButton.addEventListener("click", function () {
    visibleCards += 10; // Har safar 10 ta kartani ochamiz

    cards.forEach((card, index) => {
      if (index < visibleCards) {
        card.style.display = "block";
      }
    });

    // Agar barcha kartalar ko'rsatilgan bo'lsa, tugmani yashiramiz
    if (visibleCards >= cards.length) {
      showMoreButton.style.display = "none";
    }
  });

  // Boshlang'ich holatda kartalarni yangilash
  updateCardVisibility();
});

// Kalkulyator
document.getElementById("calculate-btn").addEventListener("click"),
  () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;

    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").textContent =
        "Iltimos, to'g'ri summani kiriting.";
      return;
    }
  };

// Valyuta kalkulyatori funksiyasi
function calculate() {
  const amount = document.getElementById("amount").value;
  const rate = 0.000087; // USDga kurs (misol uchun)
  const result = (amount * rate).toFixed(2);
  document.getElementById("currency-result").textContent = `${result} USD`;
}

// Vaqt kalkulyatori funksiyasi
function getTime() {
  const timezone = document.getElementById("timezone").value;
  const now = new Date();
  let hours = now.getUTCHours();

  if (timezone === "Tashkent") hours += 5; // Toshkent UTC+5
  else if (timezone === "London") hours += 0; // London UTC+0
  else if (timezone === "New_York") hours -= 5; // Nyu-York UTC-5

  const adjustedTime = new Date(now.setHours(hours));
  document.getElementById(
    "time-result"
  ).textContent = `Hozirgi vaqt: ${adjustedTime.toLocaleTimeString()}`;
}

// Buyurma Form kodi
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const carType = document.getElementById("car-type").value;
  const location = document.getElementById("location").value;

  if (name && phone && carType && location) {
    alert(
      `Buyurtmangiz qabul qilindi:\nIsm: ${name}\nTelefon: ${phone}\nMashina turi: ${carType}\nManzil: ${location}`
    );
  } else {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
  }
});
