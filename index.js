console.log("index.js is linked and working!");

document.addEventListener("DOMContentLoaded", () => {
    // Example: Change the header color on click
    const header = document.querySelector("header");
    header.addEventListener("click", () => {
        header.style.backgroundColor = "lightblue";
    });

    // Example: Log a message when a navigation link is clicked
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            console.log(`Navigating to ${event.target.textContent}`);
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Construct the mailto URL
        const mailtoLink = `mailto:dkopac96@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    });
});