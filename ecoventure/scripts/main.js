import { destinations } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('destination-cards');
  destinations.slice(0, 3).forEach(dest => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" loading="lazy">
      <div class="card-content">
        <h4>${dest.name}</h4>
        <p>${dest.description}</p>
        <p><strong>Location:</strong> ${dest.location}</p>
      </div>`;
    cardContainer.appendChild(card);
  });

  const navToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
