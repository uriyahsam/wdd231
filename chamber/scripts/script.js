document.addEventListener("DOMContentLoaded", function () {
    const directory = document.getElementById("directory");
    const toggleViewBtn = document.getElementById("toggleView");
    let membersData = []; // Global variable to store fetched members
    let isGridView = true; // Track current view mode

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            membersData = await response.json();
            displayMembers(membersData, isGridView ? "grid" : "list");
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members, view) {
        directory.innerHTML = ""; // Clear previous content
        directory.className = view === "grid" ? "grid-view" : "list-view";

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            directory.appendChild(card);
        });
    }

    // Toggle View on Button Click
    toggleViewBtn.addEventListener("click", function () {
        isGridView = !isGridView; // Toggle state
        displayMembers(membersData, isGridView ? "grid" : "list");
    });

    // Footer Year & Last Modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Fetch and display members on page load
    fetchMembers();
});
