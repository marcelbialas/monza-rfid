**Repository-Beschreibung:**

# RFID Ticketing System

Dieses GitHub-Repository enthält den Quellcode für ein RFID-Ticketingsystem, das entwickelt wurde, um die Registrierung und Verwaltung von RFID-basierten Tickets zu ermöglichen. Das System umfasst sowohl die Server- als auch die Client-Komponenten und bietet Funktionen zum Erfassen von RFID-Daten, Buchen von Tickets und zur Verwaltung der Ticketinformationen.

## Features:

- **RFID-Daten-Erfassung:** Das System verwendet einen RFID-Reader, um RFID-Daten von physischen Karten einzulesen. Die empfangenen Daten werden verarbeitet und zur Identifikation der Karten verwendet.

- **Ticket-Buchung:** Benutzer können RFID-Karten scannen und Tickets für verschiedene Veranstaltungen oder Dienstleistungen buchen. Die gebuchten Tickets werden in Textdateien gespeichert.

- **Webbasierte Benutzeroberfläche:** Ein Frontend-Client (nicht in diesem Repository enthalten) ermöglicht es Benutzern, Tickets zu scannen, zu buchen und Informationen zu vorhandenen Tickets anzuzeigen.

- **Protokollierung:** Das System führt Protokollierungsfunktionen durch, um wichtige Ereignisse und Fehler festzuhalten.

## Verzeichnisstruktur:

- **`server/`**: Enthält den Node.js-Server-Code, der die Kommunikation mit dem RFID-Reader und die Verarbeitung der Buchungsanfragen durchführt.

- **`client/`**: Enthält den Code für das Frontend-Client-Interface (nicht in diesem Repository enthalten).

## Technologien:

- **Node.js**: Der Server wird mit Node.js entwickelt und verwendet Express.js als Web-Framework.

- **SerialPort und Readline**: Die Bibliotheken SerialPort und Readline werden verwendet, um Daten vom RFID-Reader zu empfangen und zu verarbeiten.

- **Express und CORS**: Express wird für die Erstellung der REST-API verwendet, und CORS ermöglicht die Kommunikation mit dem Frontend-Client.

- **Winston**: Winston wird für die Protokollierung von Informationen und Fehlern verwendet.

- **Nut-Tree/Nut-JS**: Die Nut-Tree/Nut-JS-Bibliothek wird verwendet, um Tastaturereignisse auszulösen, wie z.B. das Drücken der 'Alt + H'-Tastenkombination.

## Anforderungen:

- Ein RFID-Reader oder RFID-Hardwaregerät.

- Node.js und npm (Node Package Manager) müssen auf dem Server installiert sein.

## Installation und Verwendung:

1. Klone das Repository auf deinen lokalen Rechner.

2. Installiere die erforderlichen Node.js-Module, indem du `npm install` im `server/`-Verzeichnis ausführst.

3. Konfiguriere die COM-Port-Einstellungen und den Pfad für die Ticket-Dateien in der `server/app.js`-Datei.

4. Starte den Server mit `npm start` im `server/`-Verzeichnis.

5. Entwickle oder konfiguriere den Frontend-Client, um die Server-API zu nutzen.

## Beitrag und Lizenz:

Dieses Repository ist unter der MIT-Lizenz veröffentlicht, was bedeutet, dass du den Code frei verwenden und modifizieren kannst. Wir freuen uns über Beiträge und Verbesserungsvorschläge durch Pull-Anfragen. Bitte beachte unsere Beitragshinweise und den Lizenztext in diesem Repository.

Wir hoffen, dass dieses RFID-Ticketingsystem eine nützliche Grundlage für deine Projekte darstellt und zur Verwaltung von RFID-basierten Tickets beiträgt.

---
