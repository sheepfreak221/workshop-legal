# Es kotzt mich an xD

## Ein Workshop, der keiner war – ein persönlicher Erfahrungsbericht

Mein ursprüngliches Konzept war klar, durchdacht und praxisorientiert: Learning by Doing mit echten, begleitenden Hands-on-Übungen für alle Teilnehmer – praxisnah, nachvollziehbar, sinnvoll. Für die besonders Neugierigen hätte es zusätzlich vertiefende Challenges gegeben. All das auf einer datenschutzfreundlichen, vollständig vorkonfigurierten Open-Source-Umgebung, bereitgestellt in einer Virtual Machine (VM). Diese abgeschottete Umgebung hätte nicht nur Ablenkung verhindert, sondern auch einen geschützten Raum geboten, in dem die Jugendlichen ausprobieren, lernen und selbständig arbeiten hätten können – ohne Installation, ohne Accountpflicht, ohne Tracker.

Die Realität war eine andere.

Statt einer isolierten Lernumgebung gab es Windows-Notebooks mit Edge und Chrome – nicht aktiviert, instabil, überladen. Die Werkzeuge? Tracker-verseuchte Webapps, eingebettet in Big-Tech-Clouds. Ohne Google-Account ging fast gar nichts. Im gesamten Workshop, der angeblich Open Source und Datenschutz vermitteln sollte, wurde kein einziges Open-Source-Programm aktiv verwendet. Keine freie Software, keine Kommandozeile, kein Systemverständnis – nur Oberfläche. Nur Konsum.

Als einziger Lichtblick: Ich habe kurzerhand meine eigene Stable-Diffusion-Installation über das Internet zugänglich gemacht. Zwei Teilnehmer – Lukas und Paula – konnten damit zumindest für einen kurzen Moment erleben, was es bedeutet, eine freie, selbst gehostete KI ohne Accountzwang und mit voller Kontrolle zu nutzen. Es war der einzige Moment im Workshop, in dem der Funke wirklich übergesprungen ist.

Schon in der Vorbesprechung zur Lehrveranstaltung hieß es: Man solle offen und flexibel sein. Ich war es. Ich habe ein flexibles Konzept entwickelt, das sowohl Basiswissen als auch Raum für individuelle Interessen bot – angepasst an unterschiedliche Vorkenntnisse und mit viel Raum für Eigeninitiative. Offenheit zeigte ich auch bei der Infrastruktur: Mein Setup war modular, isoliert und datenschutzfreundlich.

Die LVA-Leitung? Eher nicht.

Die Haltung war von Anfang an entmutigend: Die Jugendlichen seien „zu dumm“, „leicht überfordert“, „werden eh nur Windows benutzen – wenn sie überhaupt je einen Job bekommen“. Man könne ihnen nicht zutrauen, mehr als ein paar Webtools zu bedienen, sie könnten „sowieso nicht so lange still sitzen“. Diese tief verankerte Geringschätzung zog sich wie ein roter Faden durch die gesamte Lehrveranstaltung.

So wurden die Workshops von Anfang an nicht als Lernräume, sondern als Beschäftigungstherapie konzipiert – mit minimalem Anspruch, ohne pädagogische Vision. Die LVA-Leitung selbst sprach offen von „billigen ECTS“. Eine echte Auseinandersetzung mit Datenschutz oder Open Source fand nicht statt – und am Ende wurde nicht einmal ein Bericht zur Evaluierung verlangt. Es interessierte schlichtweg niemanden.


Der Tiefpunkt war aber nicht die Theorie, sondern die Praxis. Oder besser gesagt: das, was davon übrig blieb.

Meine vorbereitete Arbeitsumgebung – eine datenschutzfreundliche, vorinstallierte VM mit allen notwendigen Programmen, ideal für konzentriertes und unterbrechungsfreies Arbeiten – wurde am 9. April in einem Zoom-Call genehmigt. Anfang Mai kam die Rückmeldung, dass Hyper-V und VT-x auf den Notebooks funktionieren. Ich bereitete alles vor.

Am 12. Mai – also exakt drei Tage vor dem Workshop – wurde die VM einseitig von der LVA-Leitung verworfen. Begründung? Siehe oben: „Zu komplex“, „die Jugendlichen können das nicht“, „wir bleiben bei Windows“. Wir mussten binnen eineinhalb Tagen ein komplett neues Konzept aus dem Boden stampfen.

Und was war die Alternative zur VM? Ein Blick auf die technische Ausstattung genügte, um zu wissen: Selbst die beste VM nützt nichts, wenn der Host ein Desaster ist. Die Realität sah so aus:

Die Notebooks:

   - Windows nicht aktiviert – inklusive der bekannten "Bitte aktivieren"-Wasserzeichen und ständigen Systemhinweisen

   - WLAN instabil – Verbindungsabbrüche und Treiberprobleme waren Alltag

   - Ständig poppen Meldungen auf, die zur Anmeldung bei Microsoft, Google & Co. auffordern

   - VS Code nicht für alle Benutzer installiert – je nach Nutzerkonto gar nicht auffindbar

   - GIMP ebenfalls nur auf einzelnen Accounts 
   
   - Zwischen GIMP und VS Code wechseln? Nur möglich, wenn man den Benutzer wechselt – ein Multitasking-Albtraum

   - Zwischen Benutzerkonten zu wechseln bedeutete: Setup schließen, Sitzung beenden, Programm neu suchen

   - Das System war zugemüllt, langsam, fehleranfällig – man hatte das Gefühl, das Gerät würde gleich um Hilfe rufen.

Von reibungsloser digitaler Infrastruktur war nichts zu sehen. Stattdessen: Improvisation, Frust und ein Setup, das weder den Ansprüchen der Themen noch denen der Jugendlichen gerecht wurde. Und das alles bei einem Workshop zu Open Source und Datenschutz. Auf nicht aktivierten Windows-Geräten. Mit Chrome und Edge. Wenn es nicht so traurig wäre, müsste man fast darüber lachen.

Trotz aller Stolpersteine, technischen Hürden und inhaltlichen Rückschritte haben die Jugendlichen selbst gezeigt, woran es nicht lag: an ihnen. Viele der grundlegenden Inhalte kannten sie bereits – Passwortsicherheit, Datenlecks, Tracker. Die meisten Tools waren ihnen ein Begriff. Es war nicht ihr Wissen, das begrenzt war, sondern der Raum zur Vertiefung.

Und genau da wurde es interessant: Sobald ich improvisierte und tiefer ging – etwa bei Fake News, dem TikTok-Algorithmus oder dem Tor-Browser – wurde gefragt, zugehört und diskutiert. Beim zweiten Workshop-Tag verzichteten wir während der Theoriephase bewusst auf die Notebooks. Ergebnis: 90 Minuten aufmerksames Zuhören, kein Problem. Danach wurde programmiert – motiviert und konzentriert. Einer der Teilnehmer entwickelte sogar ein komplett eigenes Spielkonzept.

Fazit: Die Jugendlichen waren bereit. Lernwillig. Neugierig. Aber die LVA war es nicht.

Auch wenn der Workshop in vielerlei Hinsicht nicht so verlaufen ist, wie ich es mir gewünscht hätte, war er für mich persönlich enorm lehrreich. Ich habe gelernt, wie man ein pädagogisch durchdachtes, handlungsorientiertes Konzept entwickelt – mit Praxis, Tiefe und echten Lernzielen. Ich habe gesehen, wo das Bildungssystem scheitert: nicht an den Jugendlichen, sondern an jenen, die ihnen nicht zutrauen, mehr zu wollen und zu können.

Ich habe mein Wissen zu Datenschutz vertieft, meine Fähigkeiten in Webentwicklung massiv erweitert – endlich den Sprung von altem XHTML zu modernem HTML5 geschafft, JavaScript wirklich verstanden, mit aktuellen Frameworks gearbeitet. Ich habe mit KI-Modellen experimentiert, bin bei Stable Diffusion gelandet, habe meine eigene Instanz gehostet, diese Website und diesen Blog erstellt. Beide laufen auf einem Raspberry Pi 1 – meinem eigenen kleinen Server, den ich selbst konfiguriert habe. Dabei habe ich mich zum ersten Mal ernsthaft mit HTTPS beschäftigt: Sowohl die Website als auch der Blog verfügen über ein eigenes TLS-Zertifikat von Let’s Encrypt, das automatisch erneuert wird. 

Ich habe gelernt, wie man längst vergessene Open-Source-Projekte wiederbelebt und kompilierbar macht.

Ich habe zum ersten Mal aktiv GitHub verwendet, hoste dort mittlerweile den Workshop und weitere Projekte, dokumentiere alles ordentlich mit README-Dateien und arbeite mit Branches und Commits. Ich habe gelernt, wie man Markdown nutzt – nicht nur für GitHub, sondern auch für diesen Blog.

Und ich habe unterrichtet. Unter manchmal widrigen Bedingungen, aber trotzdem mit dem Gefühl, zumindest bei ein paar Jugendlichen Neugier geweckt und Spuren hinterlassen zu haben.

Das nehme ich mit. Auch wenn das System mich zurückgewiesen hat – die Jugendlichen haben es nicht.


Was aus meinem ursprünglich durchdachten, interaktiven Konzept wurde?

Ganz einfach: Mein Kollege hat die Pro-Version von ChatGPT geöffnet, ein paar grobe Stichworte eingegeben – „Open Source“, „Datenschutz“, „Social Media“ – und 20 Minuten später waren die Präsentationsfolien fertig. DALL·E hat noch ein paar generische, bedeutungsleere Bilder erzeugt, die dann zwischen die Bullet Points geklebt wurden. Fertig war der Workshop. Inhaltlich flach, ohne Tiefe, ohne Kontext. Kein pädagogisches Konzept, kein Raum zur Auseinandersetzung, keine Seele.

Aber: Die LVA-Leitung war zufrieden. Alles war „strukturiert“, „zeitlich effizient“ und „technisch sauber“. Keine Rückfragen, keine Diskussion – und vor allem keine Unannehmlichkeiten.

So wurde ein KI-generiertes Schnellschuss-Produkt zur offiziellen Blaupause. Mein Konzept, das auf Reflexion, Interaktion und echter Auseinandersetzung beruhte, blieb auf der Strecke.

Das frustriert mich – nicht, weil eine KI involviert war (ich liebe KI!), sondern weil sie hier als Ersatz für didaktische Überlegungen herhalten musste. Weil man glaubte, mit ein paar automatisch generierten Folien sei ein Workshop „durchdacht“. Und weil die Jugendlichen wieder mal unterschätzt wurden – obwohl sie so viel mehr könnten, wenn man sie nur ließe.