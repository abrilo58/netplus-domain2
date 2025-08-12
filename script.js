
document.addEventListener('DOMContentLoaded', function() {
    // This script adds simple interactivity to the page.
    // It does not use or manipulate any canvas elements.

    // Create a button element for the dark mode toggle
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    
    // Style the button using TailwindCSS classes for a modern look
    toggleButton.className = 'fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50';
    
    // Add the button to the page
    document.body.appendChild(toggleButton);

    // Add an event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the 'dark' class on the root <html> element
        document.documentElement.classList.toggle('dark');
    });
});
