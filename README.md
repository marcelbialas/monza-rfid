**Repository-Beschreibung:**

# RFID Ticketing System

Dieses GitHub-Repository enthält den Quellcode für ein RFID-Ticketingsystem, das entwickelt wurde, um die Verwaltung von RFID-basierten Tickets für den Bahnbetrieb zu ermöglichen. Das System umfasst sowohl die Server- als auch die Client-Komponenten und bietet Funktionen zum Erfassen von RFID-Daten, Buchen von Tickets und zur Verwaltung der Ticketinformationen.

Durch die Verwendung von ElectronJS wurde es möglich, die Anwendung zur "Aufladung" von Karten direkt auf dem Kassencomputer zu installieren und über den Touchscreen zu steuern. Die Anwendung wird automatisch in den Vordergrund geholt, indem Tastaturkürzel emuliert werden, sobald ein Ticket aufgelegt wird. Nach Abschluss der Ticketbearbeitung wird die Anwendung wieder in den Hintergrund verschoben, so dass die Kasse weiterhin problemlos bedient werden kann.

## Features:

- **RFID-Daten-Erfassung:** Das System verwendet einen RFID-Reader, um RFID-Daten von physischen Karten einzulesen. Die empfangenen Daten werden verarbeitet und zur Identifikation der Karten verwendet.

- **Ticket-Buchung:** Bistro- und Bahnpersonal können RFID-Karten scannen und Tickets für verschiedene Veranstaltungen oder Dienstleistungen buchen. Die gebuchten Tickets werden in Textdateien auf dem NAS gespeichert und können am Rennleitungs Arbeitsplatz entwertet werden.

- **Protokollierung:** Das System führt Protokollierungsfunktionen durch, um wichtige Ereignisse und Fehler festzuhalten. Außerdem kann die Anzahl verkaufter Tickets mit der Anzahl gebuchter Tickets verglichen werden.

## Verzeichnisstruktur:

- **`server/`**: Enthält den Node.js-Server-Code, der die Kommunikation mit dem RFID-Reader und die Verarbeitung der Buchungsanfragen durchführt. Im Laufenden System wird der Server durch eine Batch-Datei automatisch mit dem Computer gestartet.

## Technologien:

- **Node.js**: Der Server wird mit Node.js entwickelt und verwendet Express.js als Web-Framework.

- **SerialPort und Readline**: Die Bibliotheken SerialPort und Readline werden verwendet, um Daten vom RFID-Reader zu empfangen und zu verarbeiten.

- **Express und CORS**: Express wird für die Erstellung der REST-API verwendet, und CORS ermöglicht die Kommunikation mit dem Frontend-Client.

- **Winston**: Winston wird für die Protokollierung von Informationen und Fehlern verwendet.

- **Nut-Tree/Nut-JS**: Die Nut-Tree/Nut-JS-Bibliothek wird verwendet, um Tastaturereignisse auszulösen, wie z.B. das Drücken der 'Alt + H'-Tastenkombination.

## Anforderungen:

- Ein RFID-Reader oder RFID-Hardwaregerät.

- Node.js und npm (Node Package Manager) müssen auf dem Server installiert sein.
