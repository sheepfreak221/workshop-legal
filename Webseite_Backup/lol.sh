#!/bin/bash

IMG_DIR="webseite/grafiken/bsc-projekt"
MAX_WIDTH=1280

# Prüfe, ob convert installiert ist
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick (convert) ist nicht installiert!"
    exit 1
fi

# Unterstützte Bildformate
for file in "$IMG_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    [ -e "$file" ] || continue  # falls keine Dateien gefunden wurden
    echo "🔧 Skaliere: $file"
    convert "$file" -resize "${MAX_WIDTH}x>" "$file"
done

echo "✅ Alle Bilder auf max. $MAX_WIDTH px Breite skaliert (Originale überschrieben)."