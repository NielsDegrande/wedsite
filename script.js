/**
 * Toggles the visibility of language sections based on the selected language.
 *
 * @param {string} lang - The language code to display (e.g. "en", "nl", or "hi").
 */
function showLanguage(lang) {
  // Hide all language sections.
  document.getElementById("content-en").style.display = "none";
  document.getElementById("content-nl").style.display = "none";
  document.getElementById("content-hi").style.display = "none";

  // Show the selected language.
  if (lang === "en") {
    document.getElementById("content-en").style.display = "block";
  } else if (lang === "nl") {
    document.getElementById("content-nl").style.display = "block";
  } else if (lang === "hi") {
    document.getElementById("content-hi").style.display = "block";
  }
}

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
