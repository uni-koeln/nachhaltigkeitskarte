# Nachhaltigkeitskarte

![Logo des Nachhaltigkeitsbüro](./src/assets/logo_nhb.png)

TODO Studis: mehr Informationen über dieses Projekt hinzufügen.

## Lust mitzuwirken?


Möchtest du an unserem Projekt mitarbeiten? 
Dann meld dich bei der folgende Adresse![Nachhhaltigkeitsbüro](nachhaltigkeitSpamProtectionverw.uni-koeln.de)

## Entwicklungsumgebung bereit?

- Arthur - JA
- Luca - JA
- Stefan - JA

## Grundlagen

Dieses Projekt ist mit [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/config/) und [Leaflet](https://leafletjs.com/) entwickelt.

## Setup (einmalig)

Führe die folgenden Schritte aus, um die Entwicklung vorzubereiten.

### Nur Windows: installiere das [Windows Subsystem for Linux](https://learn.microsoft.com/de-de/windows/wsl/about)

Öffne die App "Terminal" und gib ein:

```sh
wsl --install
```

Der Computer muss während der Installation einfach oder mehrfach neu gestartet werden.

Suche nach der App “Ubuntu” - das ist jetzt dein neues Terminal.

### Terminal öffnen

Öffne die Anwendung Terminal (MacOS) bzw. Ubuntu (Windows) und gib folgende Befehle ein:

### Nur MacOS und OPTIONAL: [oh-my-zsh](https://ohmyz.sh/#install)

Dieser Befehl installiert dir ein schöneres Layout im Terminal:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Du musst vermutlich das Passwort für deinen Computer eingeben, um die Installation zu authorisieren.

### Installiere [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Überprüfe, ob git installiert ist mit folgendem Befehl:

```sh
git –version
```

Auf Windows sollte es im Ubuntu WSL bereits installiert sein, auf MacOS wird dadurch die Installation gestartet, dieser stimmst du zu.

### Download des GitHub Repositories

```sh
git clone https://github.com/uni-koeln/nachhaltigkeitskarte.git
```

### GitHub Account einrichten

Führe folgende Befehle mit deiner Emailadresse, die du für GitHub verwendest und deinem Namen durch:

```sh
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### Node und NPM installieren

Überprüfe, ob beides installiert ist. Wenn ja, gibt es nichts zu tun. Wenn nein, führe die unten stehenden Schritte für dein System aus und wiederhole die Prüfung.

```sh
node –version
```

... muss mindestens Version 20 sein.

```sh
npm –version
```

... muss mindestens Version 10 sein.

#### Windows

Führe zunächst ein Update deines Ubuntu WSL durch:

```sh
sudo apt update && sudo apt upgrade
```

Die Frage "Do you want to continue" beantwortest du mit "Y" und "Enter".

Installiere dann den [Node Version Manager](https://github.com/nvm-sh/nvm):

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Und anschließend node inklusive npm:

```sh
nvm install node
```

#### MacOS

Du kannst auch die obigen Schritte für Windows befolgen, da die Befehle fürs Windows Subsystem for Linux nahezu identisch sind mit denen, die das Terminal in MacOS akzeptiert.

Oder du machst es dir einfach, lädst node hier runter und installierst es:
https://nodejs.org/en/download

### Entwicklungsumgebung installieren

[VSCode](https://code.visualstudio.com/download) herunterladen und installieren.

Starte VSCode.

NUR WINDOWS:

- Öffne ein Terminal vom Typ "Ubuntu WSL"
- Du wirst gefragt ob du das [Plugin für WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) installieren möchtest, bestätige das.
- Nach der Installation klicke auf die Ecke links unten. Oben bekommst du mehrere Vorschläge, wähle den ersten "Connect to WSL".

Klicke auf File -> Open Folder...
Wähle den Dateiordner "nachhaltigkeitskarte" aus.

Wähle “Yes I trust the authors”.
Auf die Frage “Do you want to install the recommended extensions from Prettier, Microsoft and others for this repository?” reagierst du mit "Install".

Dann installierst du das Plugin [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

### Autoformatierung einschalten

Gehe im Menü auf Code -> Settings und suche “format”.

Wähle “Text Editor” und setze “Default Formatter” auf “Prettier - Code formatter”.

Wähle “Text Editor -> Formatting” und setze den Haken bei “Editor: Format on Save”.

## Entwicklung (kontinuierlich)

Führe die folgenden Schritte aus, um die Webanwendung weiterzuentwickeln.
Für jede Änderung wiederholen.

Starte VSCode.

Öffne das Terminal (Menü -> Terminal -> New Terminal) und gib die Konsolenbefehle dort ein.

### Neuesten Stand von GitHub downloaden

```sh
git pull --rebase
```

### Bibliotheken (Dependencies) aktualisieren

```sh
npm install
```

### Lokal entwickeln

```sh
npm run dev
```

Mit Taste "Cmd" (Mac) bzw. "Ctrl" (Windows) und Klick auf die URL öffnest du die lokale Instanz der Webanwendung im Browser. Sie wird bei jeder Änderung im Code aktualisiert.

Jetzt kannst du den Code ändern. Bei jedem Speichern siehst du die Auswirkung in eurer lokalen Instanz. Achte bei jeder Datei darauf, sie zu speichern (mit der Tastenkombination "Cmd" bzw. "Ctrl" und "s"). Ein Punkt neben dem Dateinamen signalisiert ungespeicherte Änderungen.

### Änderung hochladen

Stelle sicher, dass alle Änderungen gespeichert sind und die Webanwendung lokal im Browser läuft. Dann führe aus:

```sh
git add .
git commit -m "Change / Add / Configure this"
```

Anschließend führst du den Commit Befehl erneut aus.

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

Wenn du nach Usernamen und Passwort gefragt wirst, benötigst du deinen GitHub Usernamen und ein Access Token als Passwort (siehe unten).

Wenn stattdessen die GitHub Erweiterung dich fragt, ob sie zur Authorisierung genutzt werden darf, klicke auf "Allow" und logge dich mit Usernamen, Passwort und zweitem Faktor ein.

Beides ist nur einmalig beim ersten Push.

#### Eventuell nur MacOS: Erstellung eines GitHub Access Tokens (einmalig)

Erstelle ein GitHub Personal Access Token Classic:

- [GitHub Dokumentation zu den Tokens](https://docs.github.com/de/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#erstellen-eines-personal-access-token-classic)
- [Hier erstellst du das Token](https://github.com/settings/tokens/new)
  - Expiration: custom
  - Scope: public_repo

Speichere das Access Token an einer sicheren Stelle, am besten in einem Passwort Manager.

## Weiterführende Hinweise (noch unwichtig)

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

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
