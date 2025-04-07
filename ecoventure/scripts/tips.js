// scripts/tips.js
const tips = [
  "Pack reusable essentials: water bottle, utensils, and shopping bag.",
  "Support local businesses and artisans.",
  "Travel off-season to reduce over-tourism.",
  "Offset your carbon footprint.",
  "Stay in certified eco-lodging.",
  "Respect wildlife and their habitats.",
  "Use public or human-powered transport.",
  "Limit water and electricity usage in accommodations.",
  "Avoid single-use plastics.",
  "Leave no trace – take your trash with you."
];

const tipsList = document.getElementById("tips-list");

tips.forEach(tip => {
  const li = document.createElement("li");
  li.textContent = tip;
  tipsList.appendChild(li);
});

// localStorage visit tracking
const visitBox = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  const daysAgo = Math.floor((Date.now() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
  visitBox.textContent = `Welcome back! You last visited ${daysAgo} day(s) ago.`;
} else {
  visitBox.textContent = "Welcome to your first visit to our eco tips!";
}

localStorage.setItem("lastVisit", new Date().toISOString());

// Mobile menu
document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector("#nav-menu").classList.toggle("open");
});
