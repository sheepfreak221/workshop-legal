function showSection(section) {
    console.log(`showSection wurde aufgerufen mit: ${section}`); // Debugging

    // Alle Sektionen verstecken
    document.querySelectorAll('.section').forEach(div => div.style.display = 'none');

    // Home ausblenden
    document.getElementById("home").style.display = "none";

    // Gewählte Sektion anzeigen
    let sectionDiv = document.getElementById(section);
    if (sectionDiv) {
        sectionDiv.style.display = "block";

        // Falls der Bereich extern geladen werden muss
        if (!sectionDiv.dataset.loaded && section !== "projekte" && section !== "listen" && section !== "hobbys") {
            console.log(`Lade pages/${section}.html...`);
            fetch(`pages/${section}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Seite nicht gefunden: ${section}`);
                    }
                    return response.text();
                })
                .then(html => {
                    console.log(`Geladener Inhalt für ${section}:`, html);
                    sectionDiv.innerHTML = html;
                    sectionDiv.dataset.loaded = "true"; // Markiere als geladen

                    // Wenn die geladenen Inhalte der ai-art-Seite gehören, lade die Bilder
                    if (section === "ai-art") {
                        loadPixelfedImages(); // Lade die Bilder nach dem Laden der Seite
                    }
                })
                .catch(error => {
                    console.error("Fehler beim Laden:", error);
                    sectionDiv.innerHTML = "<p>Fehler beim Laden der Seite.</p>";
                });
        }
    } else {
        console.error(`DIV mit ID "${section}" nicht gefunden!`);
    }
}
function showHome() {
    console.log("showHome wurde aufgerufen!"); // Debugging

    // Alle Sektionen verstecken
    document.querySelectorAll('.section').forEach(div => div.style.display = 'none');

    // Home anzeigen
    let homeDiv = document.getElementById("home");

    if (homeDiv) {
        console.log("Home wurde gefunden!"); // Debugging
        homeDiv.style.display = "block";  // Home sichtbar machen
    } else {
        console.error("Fehler: 'home' existiert nicht!");
    }
}

function loadProject(project) {
    console.log("Lade Projekt:", project); // Debugging

    // Den Container 'projekte' finden
    let projectContainer = document.getElementById("projekte");
    if (projectContainer) {
        // Projekt Container sichtbar machen (wenn nicht schon sichtbar)
        projectContainer.style.display = "block";

        // Den 'projekt-inhalt' Container finden, um den Inhalt zu ersetzen
        let projectContentContainer = document.getElementById("projekt-inhalt");
        if (projectContentContainer) {
            // Den Inhalt von 'projekt-inhalt' leeren, um Platz für das neue Projekt zu machen
            projectContentContainer.innerHTML = "<p>Lade Projekt...</p>";

            // Daten des Projekts nachladen
            fetch(`projects/${project}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Projekt nicht gefunden: ${project}`);
                    }
                    return response.text();
                })
                .then(html => {
                    console.log("Geladener Projektinhalt:", html); // Debugging
                    // Den geladenen HTML-Inhalt in 'projekt-inhalt' einfügen
                    projectContentContainer.innerHTML = html;
                })
                .catch(error => {
                    console.error("Fehler beim Laden:", error);
                    projectContentContainer.innerHTML = "<p>Fehler beim Laden des Projekts.</p>";
                });
        } else {
            console.error("Container 'projekt-inhalt' nicht gefunden!");
        }
    } else {
        console.error("Container 'projekte' nicht gefunden!");
    }
}

function loadHobby(hobby) {
    console.log("Lade Hobby:", hobby); // Debugging

    // Den Container 'projekte' finden
    let projectContainer = document.getElementById("hobbys");
    if (projectContainer) {
        // Projekt Container sichtbar machen (wenn nicht schon sichtbar)
        projectContainer.style.display = "block";

        // Den 'projekt-inhalt' Container finden, um den Inhalt zu ersetzen
        let projectContentContainer = document.getElementById("hobby-inhalt");
        if (projectContentContainer) {
            // Den Inhalt von 'projekt-inhalt' leeren, um Platz für das neue Projekt zu machen
            projectContentContainer.innerHTML = "<p>Lade Hobby...</p>";

            // Daten des Projekts nachladen
            fetch(`hobbys/${hobby}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Hobby nicht gefunden: ${hobby}`);
                    }
                    return response.text();
                })
                .then(html => {
                    console.log("Geladenes Hobby:", html); // Debugging
                    // Den geladenen HTML-Inhalt in 'projekt-inhalt' einfügen
                    projectContentContainer.innerHTML = html;

                       // Wenn die geladenen Inhalte der ai-art-Seite gehören, lade die Bilder
                       if (hobby === "ai-art") {
                        loadPixelfedImages(); // Lade die Bilder nach dem Laden der Seite
                       }
                       // Wenn die geladenen Inhalte der ai-art-Seite gehören, lade die Bilder
                       if (hobby === "fotografie") {
                        loadFotogalerie(); // Lade die Bilder nach dem Laden der Seite
                       }
                })
                .catch(error => {
                    console.error("Fehler beim Laden:", error);
                    projectContentContainer.innerHTML = "<p>Fehler beim Laden des Hobbys.</p>";
                });
        } else {
            console.error("Container 'hobby-inhalt' nicht gefunden!");
        }
    } else {
        console.error("Container 'hobby' nicht gefunden!");
    }
}


function loadList(category) {
    console.log("Lade Liste:", category); // Debugging

    let listContainer = document.getElementById("listen");
    if (listContainer) {
        listContainer.style.display = "block";

        let listContentContainer = document.getElementById("listen-inhalt");
        if (listContentContainer) {
            listContentContainer.innerHTML = "<p>Lade Liste...</p>";

            fetch(`lists/${category}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Liste nicht gefunden: ${category}`);
                    }
                    return response.text();
                })
                .then(html => {
                    console.log("Geladener Listeninhalt:", html); // Debugging
                    listContentContainer.innerHTML = html;

                    // !!! Toggle-Skript starten !!!
                    initCollapse();
                })
                .catch(error => {
                    console.error("Fehler beim Laden:", error);
                    listContentContainer.innerHTML = "<p>Fehler beim Laden der Liste.</p>";
                });
        } else {
            console.error("Container 'listen-inhalt' nicht gefunden!");
        }
    } else {
        console.error("Container 'listen' nicht gefunden!");
    }
}

// !!! Toggle-Funktion für nachgeladenen Inhalt !!!
function initCollapse() {
    const osList = document.querySelector("#listen-inhalt #os-linkliste");
    if (!osList) return;

    osList.querySelectorAll("h2").forEach(h2 => {
        h2.addEventListener("click", () => {
            const content = h2.nextElementSibling;
            if (content && content.classList.contains("content")) {
                content.classList.toggle("hidden");
            }
        });
    });
}

/* Funktion zum Laden der Bilder für die galerien (FLASK-APPS) */

async function loadPixelfedImages() {
    try {
        let response = await fetch("/api/images");
        let images = await response.json();

        if (images.error) {
            console.error("API Fehler:", images.error);
        } else {
            // Die Galerie mit den Bildern füllen
            const galleryContainer = document.getElementById("pixelfed-gallery");
            if (!galleryContainer) {
                console.error('Container #pixelfed-gallery wurde nicht gefunden!');
                return;
            }

            // Fülle den Container mit den Bildern
            galleryContainer.innerHTML = images.map(img => `
                <div class="image-container">
                    <img src="${img}" alt="Pixelfed Image" onclick="zeigeLightbox('${img}')">
                </div>
            `).join("");
        }
    } catch (error) {
        console.error("Fehler beim Laden der Bilder:", error);
    }
}

  async function loadFotogalerie() {
    try {
        const res = await fetch("/api/galerie");
        const bilder = await res.json();
        const container = document.getElementById("fotogalerie");
        container.innerHTML = ""; // Leeren, falls reload

        // Fülle den Container mit den Bildern
        container.innerHTML = bilder.map(pfad => `
            <div class="image-container">
                <img src="${pfad}" alt="Bild aus Galerie" class="galerie-bild" onclick="zeigeLightbox('${pfad}')">
            </div>
        `).join("");
    } catch (error) {
        console.error("Fehler beim Laden der Galerie:", error);
    }
}


/* Die Lightbox für Bilder und Videos inkl EventListener */


  function zeigeLightbox(mediaURL) {
    // Bestehende Lightbox entfernen
    const alte = document.getElementById("lightbox");
    if (alte) alte.remove();

    const overlay = document.createElement("div");
    overlay.id = "lightbox";

    // Überprüfen, ob es sich um ein Bild oder ein Video handelt
    const isVideo = mediaURL.endsWith('.mp4') || mediaURL.endsWith('.webm') || mediaURL.endsWith('.ogg');
    if (isVideo) {
        overlay.innerHTML = `
            <div class="lightbox-content">
                <video controls autoplay>
                    <source src="${mediaURL}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    } else {
        overlay.innerHTML = `
            <div class="lightbox-content">
                <img src="${mediaURL}" alt="Großansicht">
            </div>
        `;
    }

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());

    document.addEventListener("keydown", function escListener(e) {
        if (e.key === "Escape") {
            overlay.remove();
            document.removeEventListener("keydown", escListener);
        }
    });
}
  document.addEventListener("click", function (e) {
    const v = e.target.closest("video[data-src]");
    if (v) {
      e.preventDefault();
      zeigeLightbox(v.getAttribute("data-src"));
    }
  });
