<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header-uzk">
      <a href="https://www.uni-koeln.de/" target="_blank"
        ><img alt="Logo der Universität zu Köln" class="logo" src="@/assets/logo_uzk.png"
      /></a>
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

  <RouterView />
</template>
