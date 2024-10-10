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
        <b>Die Nachhaltigkeitskarte der Universität zu Köln</b>
        <nav class="navigation">
          <RouterLink to="/">Karte</RouterLink>
          <RouterLink to="/about">Impressum</RouterLink>
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
