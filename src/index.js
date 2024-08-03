// Track the current section (0 for intro, 1 for signup/login)
let currentSection = 0;

// Function to handle the transition between sections
function transitionToSection(sectionIndex) {
    if (sectionIndex === 1) {
        // Transition from intro to signup/login section
        document.getElementById('intro-section').style.animation = 'slideUp 0.7s forwards'; // Slide up intro section
        document.getElementById('signup-login-section').style.transform = 'translateY(0)'; // Move signup/login section into view
        document.getElementById('subtitle').style.opacity = '0'; // Hide subtitle
        document.getElementById('navbar').style.visibility = 'visible'; // Show navbar
        document.getElementById('navbar').style.opacity = '1'; // Fade-in navbar
        document.getElementById('navbar').style.transform = 'translateY(0)'; // Move navbar into view
        document.getElementById('navbar').classList.add('navbar-stationary'); // Make navbar stationary
        document.getElementById('intro-title').style.transform = 'scale(0.5) translateY(-50px)'; // Shrink and move title
        document.getElementById('intro-title').style.opacity = '0'; // Fade-out intro title
    } else if (sectionIndex === 0) {
        // Transition from signup/login back to intro section
        document.getElementById('intro-section').style.animation = 'none'; // Reset animation
        document.getElementById('intro-section').style.transform = 'translateY(0)'; // Reset position
        document.getElementById('signup-login-section').style.transform = 'translateY(100%)'; // Move signup/login section out of view
        document.getElementById('subtitle').style.opacity = '1'; // Show subtitle
        document.getElementById('navbar').classList.remove('navbar-stationary'); // Allow transitions on next scroll
        document.getElementById('navbar').style.opacity = '0'; // Fade-out navbar
        document.getElementById('navbar').style.transform = 'translateY(-100%)'; // Move navbar out of view
        document.getElementById('navbar').style.visibility = 'hidden'; // Hide navbar
        document.getElementById('intro-title').style.transform = 'scale(1)'; // Reset title scale
        document.getElementById('intro-title').style.opacity = '1'; // Show intro title
    }
    currentSection = sectionIndex; // Update current section
}

// Event listener for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && currentSection === 0) {
        transitionToSection(1); // Move to signup/login section
    } else if (e.key === 'ArrowUp' && currentSection === 1) {
        transitionToSection(0); // Move back to intro section
    }
});

// Event listener for mouse wheel navigation
document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && currentSection === 0) {
        transitionToSection(1); // Move to signup/login section
    } else if (e.deltaY < 0 && currentSection === 1) {
        transitionToSection(0); // Move back to intro section
    }
});
