document.addEventListener("DOMContentLoaded", () => {
    console.log("Cyberpunk Portfolio Loaded");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Glowing effect on hover
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.boxShadow = "0px 0px 20px #00eaff";
        });
        project.addEventListener("mouseleave", () => {
            project.style.boxShadow = "0px 0px 10px #ff007f";
        });
    });

    // Contact form validation
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }
        
        alert("Message sent successfully! I'll get back to you soon.");
        document.getElementById("contact-form").reset();
    });
});
