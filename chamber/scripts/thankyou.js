document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById("firstName").textContent = urlParams.get("firstName") || "Not Provided";
    document.getElementById("lastName").textContent = urlParams.get("lastName") || "Not Provided";
    document.getElementById("email").textContent = urlParams.get("email") || "Not Provided";
    document.getElementById("phone").textContent = urlParams.get("phone") || "Not Provided";
    document.getElementById("businessName").textContent = urlParams.get("businessName") || "Not Provided";
    document.getElementById("timestamp").textContent = urlParams.get("timestamp") || "Not Available";
});
