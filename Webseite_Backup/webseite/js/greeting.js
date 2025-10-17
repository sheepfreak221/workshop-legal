const greetings = [
    { text: "Hello", translation: "in Englisch" },               // Englisch
    { text: "Bienvenue", translation: "in Französisch" },          // Französisch
    { text: "Bienvenido", translation: "in Spanisch" },            // Spanisch
    { text: "Benvenuto", translation: "in Italienisch" },          // Italienisch
    { text: "Welkom", translation: "in Niederländisch" },          // Niederländisch
    { text: "Добро пожаловать", translation: "auf Russisch" },     // Russisch
    { text: "ようこそ", translation: "auf Japanisch" },             // Japanisch
    { text: "欢迎", translation: "in Chinesisch" },                 // Chinesisch
    { text: "Selamat datang", translation: "in Malaiisch" },       // Malaiisch
    { text: "Swaagat hai", translation: "in Hindi" },              // Hindi
    { text: "Tervetuloa", translation: "in Finnisch" },            // Finnisch
    { text: "Aloha", translation: "in Hawaiianisch" },             // Hawaiianisch
    { text: "Salam", translation: "in Arabisch" },                 // Arabisch
    { text: "Ciao", translation: "in Italienisch" },               // Italienisch
    { text: "Konnichiwa", translation: "auf Japanisch" },          // Japanisch
    { text: "Merhaba", translation: "in Türkisch" },               // Türkisch
    { text: "Bun venit", translation: "in Rumänisch" },            // Rumänisch
    { text: "Witam", translation: "in Polnisch" },                 // Polnisch
    { text: "Sveiki atvykę", translation: "in Litauisch" },        // Litauisch
    { text: "Bienvenida", translation: "in Spanisch" },            // Spanisch (Lateinamerika)
    { text: "Szia", translation: "in Ungarisch" },                 // Ungarisch
    { text: "Kumusta", translation: "in Filipino" },               // Filipino
    { text: "Saluton", translation: "in Esperanto" },              // Esperanto
    { text: "Tere tulemast", translation: "in Estnisch" },         // Estnisch
    { text: "Xin chào", translation: "in Vietnamesisch" },         // Vietnamesisch
    { text: "Hujambo", translation: "in Swahili" },                // Swahili
    { text: "Namaste", translation: "in Nepali" },                 // Nepali
    { text: "Wai", translation: "in Maori" },                      // Maori
    { text: "Habari", translation: "in Kiswahili" },     // Kiswahili (Swahili)
    { text: "Yassou", translation: "in Griechisch" },              // Griechisch
    { text: "Tena koutou", translation: "in Māori" },               // Maori (alternative)
    { text: "Shalom", translation: "in Hebräisch" },                // Hebräisch
    { text: "Sawubona", translation: "in Zulu" },                  // Zulu
    { text: "Sawasdee", translation: "in Thailändisch" },          // Thailändisch
    { text: "Cześć", translation: "in Polnisch" },                 // Polnisch
    { text: "Merhaba", translation: "in Albanisch" },               // Albanisch
    { text: "Kamusta", translation: "in Filipino" },               // Filipino (alternative)
    { text: "Ahoj", translation: "in Tschechisch" },               // Tschechisch
    { text: "Ahilan", translation: "in Tamil" },                   // Tamil
    { text: "Pryvit", translation: "in Ukrainisch" },              // Ukrainisch
    { text: "Bună ziua", translation: "in Rumänisch" },            // Rumänisch (standard)
];

function changeGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const greetingText = greetings[randomIndex].text;
    const translation = greetings[randomIndex].translation;
    const greetingWord = (greetingText === "Willkommen" || greetingText === "Bienvenida" || greetingText === "Selamat datang" || greetingText === "Bienvenido" || greetingText === "Добро пожаловать") ? "Willkommen" : "Hallo";
    
    // Umgedrehte Reihenfolge
    document.getElementById("greeting").innerText = `${greetingText}`;
    document.getElementById("translation").innerText = `So sagt man ${greetingWord} ${translation}`;
}

changeGreeting();
