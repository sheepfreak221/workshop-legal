// Funktion, um Systemdaten von der Flask-App zu holen und die HTML-Elemente zu aktualisieren
function updateSystemInfo() {
    fetch('/system_info')  // Flask-Endpunkt für Systemdaten
    .then(response => response.json())  // Antwort als JSON parsen
    .then(data => {
        // CPU-Daten aktualisieren
        document.getElementById('cpu-model').textContent = "CPU Modell: " + data.cpu_model;
        document.getElementById('cpu-percentage').textContent = "CPU Auslastung: " + data.cpu_usage + '%';
                
        // RAM-Daten aktualisieren
        document.getElementById('ram-percentage').textContent = "RAM Auslastung: " + data.ram_usage + '%';
        document.getElementById('total-ram').textContent = "Gesamt-RAM: " + data.total_ram + " MB";

        // Maximaler CPU-Takt
        document.getElementById('cpu-max-freq').textContent = "Max. CPU-Takt: " + data.cpu_max_freq;

        // Betriebssystem und Uptime aktualisieren
        document.getElementById('os').textContent = data.os_info;
        document.getElementById('uptime').textContent = data.uptime;
    })
    .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
}

// Initiales Laden der Systeminformationen und dann alle 10 Sekunden aktualisieren
updateSystemInfo();
setInterval(updateSystemInfo, 10000); // Alle 10 Sekunden