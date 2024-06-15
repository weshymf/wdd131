document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    lastModified.textContent += document.lastModified;
});
