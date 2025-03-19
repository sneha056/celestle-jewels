// Show loader on page start
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loader-container").style.display = "flex"; // Show loader
    document.getElementById("content").style.display = "none"; // Hide content
});

// Hide loader when page fully loads
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader-container").style.display = "none"; // Hide loader
        document.getElementById("content").style.display = "block"; // Show content
    }, 500); // Delay for smoother transition
};

// Show loader when clicking a link to another page
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("loader-container").style.display = "flex"; // Show loader
        document.getElementById("content").style.display = "none"; // Hide content
    });
});
