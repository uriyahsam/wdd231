const courses = [
    { code: "CSE 110", category: "CSE" },
    { code: "WDD 130", category: "WDD" },
    { code: "CSE 111", category: "CSE" },
    { code: "CSE 210", category: "CSE" },
    { code: "WDD 131", category: "WDD" },
    { code: "WDD 231", category: "WDD" }
];

function displayCourses(filter) {
    const coursesContainer = document.getElementById("courses");
    coursesContainer.innerHTML = "";

    const filteredCourses = courses.filter(course => filter === "all" || course.category === filter);

    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.className = "course";
        div.textContent = course.code;
        coursesContainer.appendChild(div);
    });
}

function filterCourses(category) {
    displayCourses(category);
}

document.addEventListener("DOMContentLoaded", function () {
    displayCourses("all");
});
