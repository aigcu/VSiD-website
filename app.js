function toggleMenu() {
    const navbarLinks = document.getElementById('navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
}

window.addEventListener('resize', function() {
    const navbarLinks = document.getElementById('navbar-links');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    if (window.innerWidth > 1000) {
        navbarLinks.style.display = 'flex';
        hamburgerIcon.style.display = 'none';
    } else {
        navbarLinks.style.display = 'none';
        hamburgerIcon.style.display = 'block';
    }
});

function toggleText() {
    const missionText = document.querySelector("#mission-section h4");
    const button = document.getElementById("toggle-button");
    missionText.classList.toggle("expanded");
    button.textContent = missionText.classList.contains("expanded") ? "Read Less" : "Read More";
}
