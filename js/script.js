document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("header-placeholder").innerHTML = html;
        });

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer-placeholder").innerHTML = html;
        });
});
