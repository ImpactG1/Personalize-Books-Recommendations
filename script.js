// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the current page title
    const pageTitle = document.title.toLowerCase();

    // Map page titles to corresponding YouTube video embed codes
    const youtubeEmbedCodes = {
        "book 1": '<iframe width="560" height="315" src="https://youtu.be/TzqWpzIXj-s?si=1ugscQLJOvbxoH4V" frameborder="0" allowfullscreen></iframe>',
        // Add more embed codes for other books as needed
    };

    // Set the YouTube video embed code for the current page
    const embedCode = youtubeEmbedCodes[pageTitle];
    if (embedCode) {
        document.getElementById("youtube-video").innerHTML = embedCode;
    }
});
