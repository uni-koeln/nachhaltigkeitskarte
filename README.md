# nachhaltigkeitskarte

TODO Studis: mehr Informationen über dieses Projekt hinzufügen.

## Informationen zur Entwicklung

Dieses Projekt ist mit [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/config/) und [Leaflet](https://leafletjs.com/) entwickelt. Es folgen Informationen für die Entwicklung:

### Setup (einmalig)

Führe die folgenden Schritte aus, um die Entwicklung vorzubereiten.

#### Entwicklungsumgebung installieren

[VSCode](https://code.visualstudio.com/) herunterladen und installieren.
Dann das Plugin [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) installieren.

### Entwicklung (kontinuierlich)

Führe die folgenden Schritte aus, um die Webanwendung weiterzuentwickeln.
Für jede Änderung wiederholen.

Starte VSCode.
Öffne das Terminal (Menü -> Terminal -> New Terminal) und gib die Konsolenbefehle dort ein.

#### Neuesten Stand von GitHub holen

```sh
git pull --rebase
```

#### Bibliotheken (Dependencies) aktualisieren

```sh
npm install
```

#### Lokal entwickeln

```sh
npm run dev
```

Mit Taste "Cmd" (Mac) bzw. "Ctrl" (Windows) und Klick auf die URL öffnest du die lokale Instanz der Webanwendung im Browser. Sie wird bei jeder Änderung im Code aktualisiert.

Jetzt kannst du den Code ändern. Bei jedem Speichern siehst du die Auswirkung in eurer lokalen Instanz. Achte bei jeder Datei darauf, sie zu speichern (mit der Tastenkombination "Cmd" bzw. "Ctrl" und "s"). Ein Punkt neben dem Dateinamen signalisiert ungespeicherte Änderungen.

#### Änderung hochladen

Stelle sicher, dass alle Änderungen gespeichert sind und die Webanwendung lokal im Browser läuft. Dann führe aus:

```sh
git add .
git commit -m "Change / Add / Configure this"
```

Die Commit Message beginnt mit einem großgeschriebenem Verb und fasst eine Änderung zusammen. Mehrere Änderungen sollten auf mehrere Commits aufgeteilt werden, damit sie einfacher nachzuvolllziehen sind.

Als nächstes stellst du sicher, dass du den aktuellen Stand hast:

```sh
git pull --rebase
```

Hierbei können Konflikte auftreten, wenn andere Leute die gleichen Dateien verändert haben, wie du.

Die entsprechenden Dateien werden markiert.
Ändere die Dateien so, dass du die Konflikte auflöst und die Änderungen zusammen führst.
Prüfe in deiner lokalen Instanz im Browser, ob die Webanwendung noch funktioniert.

Dann führe aus:

```sh
git add .
git rebase --continue
```

Im Terminal wird dir nun deine Commit Message angezeigt, die du verändern könntest.
Um es einfach zu halten, schließt du die Ansicht einfach, indem du die Zeichen ":", "w", "q" und "Enter" eingibst.

Steht im Terminal "Successfully rebased and updated refs/heads/main.", kannst du den Code hochladen:

```sh
git push
```

### Weiterführende Hinweise (noch unwichtig)

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```
