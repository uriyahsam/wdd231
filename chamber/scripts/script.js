document.addEventListener("DOMContentLoaded", function () {
    const directory = document.getElementById("directory");
    const spotlightContainer = document.getElementById("spotlight-container");
    const toggleViewBtn = document.getElementById("toggleView");
    let membersData = []; // Store members data globally
    let isGridView = true;

    // Fetch Members Data
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            membersData = await response.json();

            if (directory) {
                displayMembers(membersData, isGridView ? "grid" : "list");
            }
            if (spotlightContainer) {
                displaySpotlights(membersData);
            }
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    // Display Directory Members (Grid or List)
    function displayMembers(members, view) {
        directory.innerHTML = "";
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

    // Display Spotlight Businesses (Gold & Silver Members)
    function displaySpotlights(members) {
        spotlightContainer.innerHTML = "";

        // Filter only Gold (3) and Silver (2) members
        const spotlightMembers = members.filter(m => m.membership >= 2);

        // Shuffle and pick two or three random spotlight members
        spotlightMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = spotlightMembers.slice(0, 3);

        selectedMembers.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Level:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            spotlightContainer.appendChild(card);
        });
    }

    // Toggle View on Button Click
    if (toggleViewBtn) {
        toggleViewBtn.addEventListener("click", function () {
            isGridView = !isGridView;
            displayMembers(membersData, isGridView ? "grid" : "list");
        });
    }

    // Fetch Weather Data
    async function fetchWeather() {
        const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key
        const city = "Accra";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Extract current weather
            const currentTemp = Math.round(data.list[0].main.temp);
            const weatherDesc = data.list[0].weather.map(w => w.description).join(", ");
            
            document.getElementById("current-temp").textContent = `${currentTemp}`;
            document.getElementById("weather-desc").textContent = weatherDesc.replace(/\b\w/g, l => l.toUpperCase()); // Capitalize words

            // Extract 3-day forecast
            const forecastEl = document.getElementById("forecast");
            forecastEl.innerHTML = "";

            for (let i = 0; i < 3; i++) {
                const forecastItem = data.list[i * 8]; // Every 24 hours (8 data points per day)
                const temp = Math.round(forecastItem.main.temp);
                const day = new Date(forecastItem.dt_txt).toLocaleDateString("en-US", { weekday: "long" });

                const li = document.createElement("li");
                li.textContent = `${day}: ${temp}°C`;
                forecastEl.appendChild(li);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    // Update Footer
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Load Data
    fetchMembers();
    fetchWeather();
});
