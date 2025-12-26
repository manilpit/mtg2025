// maps.js - Leaflet map for location

document.addEventListener('DOMContentLoaded', function() {
    // Only initialize map if element exists
    if (document.getElementById('map')) {
        // Initialize map centered on Studenthuset
        const map = L.map('map').setView([59.9139, 10.7522], 15);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);

        // Add marker for Studenthuset
        const marker = L.marker([59.9139, 10.7522], {
            title: 'Studenthuset, OsloMet'
        }).addTo(map);

        marker.bindPopup(
            '<div style="text-align: center;">' +
            '<strong>Studenthuset, OsloMet</strong><br>' +
            'Pilestredet 52<br>' +
            '0169 Oslo<br>' +
            '<small>NM Magic 2025</small>' +
            '</div>'
        );

        // Add circle around location
        L.circle([59.9139, 10.7522], {
            color: '#64b5f6',
            fillColor: 'rgba(100, 181, 246, 0.1)',
            fillOpacity: 0.2,
            radius: 500
        }).addTo(map);
    }
});