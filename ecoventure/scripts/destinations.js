// scripts/destinations.js
const grid = document.querySelector("#destinations-grid");
const modal = document.querySelector("#destination-modal");
const modalContent = document.querySelector("#modal-details");
const closeModalBtn = document.querySelector("#modal-close");

async function loadDestinations() {
  try {
    const res = await fetch("data/destinations.json");
    const data = await res.json();

    data.forEach(destination => {
      const card = document.createElement("div");
      card.classList.add("destination-card");

      card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" loading="lazy">
        <h3>${destination.name}</h3>
        <p><strong>Country:</strong> ${destination.country}</p>
        <button class="details-btn">More Info</button>
      `;

      card.querySelector(".details-btn").addEventListener("click", () => {
        openModal(destination);
      });

      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load destinations:", error);
    grid.innerHTML = "<p>Error loading destinations. Please try again later.</p>";
  }
}

function openModal(destination) {
  modalContent.innerHTML = `
    <h2>${destination.name}</h2>
    <p><strong>Country:</strong> ${destination.country}</p>
    <p>${destination.description}</p>
    <img src="${destination.image}" alt="${destination.name}" loading="lazy">
  `;
  modal.showModal();
}

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector("#nav-menu").classList.toggle("open");
});

loadDestinations();
