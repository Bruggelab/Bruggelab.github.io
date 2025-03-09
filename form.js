/**
 * Google Form Popup Functionality
 * This script handles the opening and closing of the Google Form popup
 * when users interact with the contact button.
 */

// Wait for DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get elements from the DOM
    const contactButton = document.getElementById('contact-button');
    const formPopup = document.getElementById('form-popup');
    const popupClose = document.getElementById('popup-close');
    
    /**
     * Shows the popup and prevents scrolling of background content
     * @param {Event} e - The click event
     */
    function openPopup(e) {
        e.preventDefault(); // Prevent default anchor behavior
        formPopup.style.display = 'flex'; // Use flex to center the popup
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind popup
    }
    
    /**
     * Hides the popup and re-enables scrolling
     */
    function closePopup() {
        formPopup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    /**
     * Checks if the overlay was clicked (not the form itself)
     * and closes the popup if so
     * @param {Event} e - The click event
     */
    function handleOverlayClick(e) {
        // Only close if the clicked element is the overlay itself, not its children
        if (e.target === formPopup) {
            closePopup();
        }
    }
    
    /**
     * Closes the popup when the Escape key is pressed
     * @param {Event} e - The keydown event
     */
    function handleKeyPress(e) {
        if (e.key === 'Escape' && formPopup.style.display === 'flex') {
            closePopup();
        }
    }
    
    // Add event listeners
    contactButton.addEventListener('click', openPopup);
    popupClose.addEventListener('click', closePopup);
    formPopup.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleKeyPress);
});