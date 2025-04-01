document.addEventListener("DOMContentLoaded", () => {
    loadDiscoverItems();
    displayVisitorMessage();
});

// Function to load and display discover items
async function loadDiscoverItems() {
    const response = await fetch("data/discover.json");
    const items = await response.json();

    const gridContainer = document.getElementById("discover-grid");
    gridContainer.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("discover-card");

        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button onclick="alert('More details coming soon!')">Learn More</button>
        `;

        gridContainer.appendChild(card);
    });
}

// Function to display visitor message
function displayVisitorMessage() {
    const messageBox = document.getElementById("visitor-info");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    
    let message = "Welcome! Let us know if you have any questions.";
    
    if (lastVisit) {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
        }
    }

    messageBox.textContent = message;
    messageBox.classList.remove("hide");

    // Store the current visit
    localStorage.setItem("lastVisit", now);
}
