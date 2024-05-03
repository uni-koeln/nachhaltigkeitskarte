# nachhaltigkeitskarte

TODO Studis: mehr Informationen über dieses Projekt hinzufügen.

## Entwicklungsumgebung bereit?

- Arthur - NEIN
- Luca - NEIN
- Stefan - NEIN

## Informationen zur Entwicklung

Dieses Projekt ist mit [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/config/) und [Leaflet](https://leafletjs.com/) entwickelt. Es folgen Informationen für die Entwicklung:

### Setup (einmalig)

Führe die folgenden Schritte aus, um die Entwicklung vorzubereiten.

#### Verbindung mit dem Versionskontrollsystem GitHub

Erstelle ein GitHub Personal Access Token Classic:

- [GitHub Dokumentation zu den Tokens](https://docs.github.com/de/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#erstellen-eines-personal-access-token-classic)
- [Hier erstellst du das Token](https://github.com/settings/tokens/new)
  - Expiration: custom
  - Scope: public_repo

Speichere das Access Token an einer sicheren Stelle, am besten in einem Passwort Manager.

Öffne die Anwendung Terminal (MacOS) bzw. TODO (Windows) und gib folgende Befehle ein:

##### OPTIONAL: [oh-my-zsh](https://ohmyz.sh/#install)

Dieser Befehl installiert dir ein schöneres Layout im Terminal:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Du musst vermutlich das Passwort für deinen Computer eingeben, um die Installation zu authorisieren.

##### Download des GitHub Repositories

```sh
git clone https://github.com/MilenaMMay/sustainability-walk.git
```

Wenn du nach Usernamen und Passwort gefragt wirst, gibst du deinen euren GitHub Usernamen und das Access Token als Passwort an.

#### Entwicklungsumgebung installieren

[VSCode](https://code.visualstudio.com/download) herunterladen und installieren.

Starte VSCode und klicke auf File -> Open Folder...
Wähle den Dateiordner "nachhaltigkeitskarte" aus.

Wähle “Yes I trust the authors”.
Auf die Frage “Do you want to install the recommended extensions from Prettier, Microsoft and others for this repository?” reagierst du mit "Install".

Dann installierst du das Plugin [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

##### Autoformatierung einschalten

Gehe im Menü auf Code -> Settings und suche “format”.

Wähle “Text Editor” und setze “Default Formatter” auf “Prettier - Code formatter”.

Wähle “Text Editor -> Formatting” und setze den Haken bei “Editor: Format on Save”.

### Entwicklung (kontinuierlich)

Führe die folgenden Schritte aus, um die Webanwendung weiterzuentwickeln.
Für jede Änderung wiederholen.

Starte VSCode.

Öffne das Terminal (Menü -> Terminal -> New Terminal) und gib die Konsolenbefehle dort ein.

#### Neuesten Stand von GitHub download

```sh
git pull --rebase
```

#### Bibliotheken (Dependencies) aktualisieren

```sh
npm install
```

TODO!!!

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
