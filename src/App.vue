<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header">
      <div class="header-uzk">
        <a href="https://www.uni-koeln.de/" target="_blank"
          ><img alt="Logo der Universität zu Köln" class="logo" src="@/assets/logo_uzk.png"
        /></a>
      </div>
      <div id="title" class="header-content">
        Nachhaltigkeitskarte Universität zu Köln
        <nav class="navigation">
          <RouterLink to="/">Karte</RouterLink>
          <RouterLink to="/about">Info</RouterLink>
        </nav>
      </div>
      <div class="header-nachhaltigkeit">
        <a
          href="https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit"
          target="_blank"
          ><img alt="Logo des Nachhaltigkeitsbüros" class="logo" src="@/assets/logo_nhb.png"
        /></a>
      </div>
    </div>
  </header>

      </div>
      <div> 
        Die Nachhaltigkeitskarte der Universität zu Köln bietet einen umfassenden Überblick über Einrichtungen, Initiativen und Angebote rund um das Thema Nachhaltigkeit auf dem Campus. Sie zeigt vielfältige Projekte, die sich für Umwelt- und Klimaschutz sowie soziale Verantwortung einsetzen, und lädt ein, sich zu informieren und aktiv mitzugestalten. 
        Das Angebot wurde von Studierenden im Rahmen eines Service-Learning-Projekts umgesetzt und wird fortlaufend erweitert. Für eine Integration/Erwähnung gerne unter nachhaltigkeit@verw.uni-koeln.de melden.
      </div>
  
  <RouterView />
</template>
