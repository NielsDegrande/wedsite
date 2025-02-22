/**
 * Scrolls to the section with the specified ID.
 *
 * @param {string} sectionId - The ID of the section to scroll to.
 */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Loads translations for the specified language code and updates page elements.
 *
 * @param {string} lang - The language code to load translations for (e.g. "en", "nl", "hi").
 */
function loadLanguage(lang) {
  fetch(`languages/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-trans-key]').forEach(elem => {
        const key = elem.getAttribute('data-trans-key');
        const value = key.split('.').reduce((obj, key) => obj?.[key], translations);
        if (value) {
          elem.innerHTML = value;
        }
      });
    });
}

// Add window.onload handler to load default language
window.onload = function() {
  loadLanguage('en');
};

