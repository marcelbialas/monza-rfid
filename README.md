**Repository-Beschreibung:**

# RFID Ticketing System

Dieses GitHub-Repository enthält den Quellcode für ein RFID-Ticketingsystem, das entwickelt wurde, um die Verwaltung von RFID-basierten Tickets für den Bahnbetrieb zu ermöglichen. Das System umfasst sowohl die Server- als auch die Client-Komponenten und bietet Funktionen zum Erfassen von RFID-Daten, Buchen von Tickets und zur Verwaltung der Ticketinformationen.

## Features:

- **RFID-Daten-Erfassung:** Das System verwendet einen RFID-Reader, um RFID-Daten von physischen Karten einzulesen. Die empfangenen Daten werden verarbeitet und zur Identifikation der Karten verwendet.

- **Ticket-Buchung:** Bistro- und Bahnpersonal können RFID-Karten scannen und Tickets für verschiedene Veranstaltungen oder Dienstleistungen buchen. Die gebuchten Tickets werden in Textdateien gespeichert und können am Rennleitungs Arbeitsplatz entwertet werden.

- **Protokollierung:** Das System führt Protokollierungsfunktionen durch, um wichtige Ereignisse und Fehler festzuhalten. Außerdem kann die Anzahl verkaufter Tickets mit der Anzahl gebuchter Tickets verglichen werden.

## Verzeichnisstruktur:

- **`server/`**: Enthält den Node.js-Server-Code, der die Kommunikation mit dem RFID-Reader und die Verarbeitung der Buchungsanfragen durchführt. Im Laufenden System wird der Server durch eine Batch-Datei automatisch gestartet.

## Technologien:

- **Node.js**: Der Server wird mit Node.js entwickelt und verwendet Express.js als Web-Framework.

- **SerialPort und Readline**: Die Bibliotheken SerialPort und Readline werden verwendet, um Daten vom RFID-Reader zu empfangen und zu verarbeiten.

- **Express und CORS**: Express wird für die Erstellung der REST-API verwendet, und CORS ermöglicht die Kommunikation mit dem Frontend-Client.

- **Winston**: Winston wird für die Protokollierung von Informationen und Fehlern verwendet.

- **Nut-Tree/Nut-JS**: Die Nut-Tree/Nut-JS-Bibliothek wird verwendet, um Tastaturereignisse auszulösen, wie z.B. das Drücken der 'Alt + H'-Tastenkombination.

## Anforderungen:

- Ein RFID-Reader oder RFID-Hardwaregerät.

- Node.js und npm (Node Package Manager) müssen auf dem Server installiert sein.
