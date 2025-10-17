async function loadNav() {
  const res = await fetch('./nav.json');
  const items = await res.json();
  const nav = document.getElementById('nav');

  const currentHash = window.location.hash;
  const currentPath = window.location.pathname;

  // 🔍 extrahiere Pfadteil z. B. /artikel1 → artikel1
  const pathParts = currentPath.split('/');
  const lastPart = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];

  let artikel = null;

  // 1. Hash prüfen
  if (currentHash) {
    artikel = items.find(i => i.hash === currentHash);
  }
  // 2. Pfad prüfen, wenn kein Hash
  else if (lastPart && lastPart !== '') {
    artikel = items.find(i => i.hash === `#${lastPart}`);
  }

  if (artikel) {
    document.getElementById('nav').style.display = 'none';
    await loadContent(artikel.file, artikel.hash);
    return;
  }

  // Standard: Navigation anzeigen
  items.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item.title;
    link.href = "#";
    link.onclick = (e) => {
      e.preventDefault();
      loadContent(item.file, item.hash);
    };
    nav.appendChild(link);
  });
}

async function loadContent(file, hash = null) {
  const content = document.getElementById('content');
  content.style.opacity = 0;

  const res = await fetch(file);
  const text = await res.text();

  let html = file.endsWith('.md') ? marked.parse(text) : text;

  // Footer hinzufügen mit RSS und Share-Link
  html += `
    <footer id="rss-footnote">
      <a href="/rss.xml" target="_blank">📰 RSS abonnieren</a>
      <span id="separator" style="margin: 0 1em;">|</span>
      <a href="#" id="share-link">🔗 Beitrag teilen</a>
      <span id="share-info" style="margin-left: 0.5em; color: #cba6f7; display: none;">Link kopiert 💜</span>
    </footer>
  `;

  return new Promise(resolve => {
    setTimeout(() => {
      content.innerHTML = html;
      content.style.opacity = 1;

      if (hash) {
        addShareHandler(hash);
      }

      resolve();
    }, 200);
  });
}


function addShareHandler(hash) {
  const link = document.getElementById('share-link');
  const info = document.getElementById('share-info');

  if (!link || !info) return;

  const fullUrl = window.location.origin + '/' + hash.slice(1);

  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(fullUrl).then(() => {
      info.style.display = 'inline';
      setTimeout(() => {
        info.style.display = 'none';
      }, 3000);
    });
  });
}

// 🔽 Starte alles
loadNav();
