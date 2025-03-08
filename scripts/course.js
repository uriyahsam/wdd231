const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 3, category: "WDD", completed: true },
    { code: "CSE110", name: "Intro to Programming", credits: 4, category: "CSE", completed: false },
    { code: "WDD231", name: "Advanced Web Dev", credits: 3, category: "WDD", completed: false }
];

function displayCourses(filtered = "all") {
    let courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";
    let totalCredits = 0;

    courses
        .filter(course => filtered === "all" || course.category === filtered)
        .forEach(course => {
            let courseDiv = document.createElement("div");
            courseDiv.classList.add("course");
            if (course.completed) courseDiv.style.background = "#c8e6c9"; // Green for completed courses

            courseDiv.innerHTML = `
                <h3>${course.code}: ${course.name}</h3>
                <p>Credits: ${course.credits}</p>
            `;
            courseContainer.appendChild(courseDiv);
            totalCredits += course.credits;
        });

    document.getElementById("totalCredits").textContent = totalCredits;
}

function filterCourses(category) {
    displayCourses(category);
}

document.addEventListener("DOMContentLoaded", () => displayCourses());
