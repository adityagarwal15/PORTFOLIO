const greetings = [
    "Hello",       // English
    "Bonjour",     // French
    "こんにちは",   // Japanese (Konnichiwa)
    "Hallo",       // German
    "Ciao",        // Italian
    "Hola",        // Spanish
    "안녕하세요",    // Korean (Annyeonghaseyo)
    "नमस्ते",      // Hindi
];

const greetingElement = document.getElementById("greeting");
let index = 0;

// Function to update the greeting instantly
function updateGreeting() {
    greetingElement.textContent = greetings[index];  // Change greeting text without animation

    index++;

    if (index >= greetings.length) {
        // After cycling through all greetings, add final slide-up and fade-out animation
        clearInterval(greetingInterval);
        document.getElementById("animation-container").classList.add("final");

        setTimeout(() => {
            window.location.href = "http://127.0.0.1:3000/portfolio.html"; 
        }, 1000);  // Allow time for the final animation to complete before redirecting
    }
}

// Start the greeting cycle with quicker changes
const greetingInterval = setInterval(updateGreeting, 350);  // Reduced interval for faster language change

// Initialize with the first greeting
updateGreeting();


