# Readline sync

Verwende `readline-sync`, um ein Programm zu schreiben, das dem Benutzer eine Reihe von Fragen stellt und eine Nachricht mit den gesammelten Informationen ausgibt.

Verwende die unten stehenden Fragen (aber füge gerne weitere nach deinem Ermessen hinzu):

```plaintext
- Wie heißt du?
- In welchem Jahr wurdest du geboren?
- In welcher Stadt wurdest du geboren?
- Wo lebst du jetzt?
- Was ist das aktuelle Jahr?
```

Beispiel für die Ausführung:
```plaintext
Wie heißt du? Sandy 
In welchem Jahr wurdest du geboren? 1995
In welcher Stadt wurdest du geboren? London
Wo lebst du jetzt? Berlin
Was ist das aktuelle Jahr? 2022
```

Erwartete Ausgabe:

```plaintext
Hallo! Mein Name ist Sandy. Ich wurde vor 27 Jahren in London geboren. Jetzt lebe ich in Berlin.
```

## Hinweise

- stelle sicher, dass die Fragen nur einzeln gestellt werden und jede Frage erscheint, nachdem der Benutzer `enter` drückt
- stelle sicher, dass zwischen dem Fragezeichen ein Leerzeichen ist
- jede Eingabe aus der Kommandozeile wird als `string` gespeichert. Stelle sicher, dass die Jahre in `numbers` umgewandelt werden

## Bonus

Nachdem du die Übung gelöst hast, kannst du jede Eingabe vom Benutzer so umwandeln, dass sie die richtige Groß- und Kleinschreibung hat.

Zum Beispiel:
```plaintext
SANDY -> Sandy
berlin -> Berlin
LONdOn -> London
```