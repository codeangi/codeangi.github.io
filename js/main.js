// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Function to load header and footer
function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id "${id}" not found.`);
        return;
    }

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for ${file}`);
            }
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
            console.log(`${file} loaded successfully.`);
        })
        .catch(error => console.error(`Error loading ${file}: `, error));
}

// Load header and footer when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '../public/header.html');
    loadComponent('footer', '../public/footer.html');
});