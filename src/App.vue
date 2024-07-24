<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="image-header">
      <a href="https://www.uni-koeln.de/" target="_blank"
        ><img alt="Logo der Universität zu Köln" class="logo" src="@/assets/logo_uzk.png"
      /></a>
      <div id="title" class="wrapper">
      Nachhaltigkeitskarte Universität zu Köln
      <nav class="navigation">
        <RouterLink to="/">Karte</RouterLink>
        <RouterLink to="/about">Info</RouterLink>
      </nav>
    </div>
      <a
        href="https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit"
        target="_blank"
        ><img alt="Logo des Nachhaltigkeitsbüros" class="logo" src="@/assets/logo_nhb.png"
      /></a>
    </div>

  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.image-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 15.625em;
}

.image-header a:hover {
  background: rgba(0, 0, 0, 0);
}
nav {
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
#title {
  text-align: center;
  font-size: x-large;
}
</style>
