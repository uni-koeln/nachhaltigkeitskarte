<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'
</script>

<template>
  <div class="about">
    <h1>Impressum</h1>

    <h2>Das Nachhaltigkeitsbüro der Universität zu Köln</h2>
    <a href="https://nachhaltigkeit.uni-koeln.de" target="_blank">Link zum Nachhaltigkeitsbüro</a>
  </div>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Foo</template>
    erster Text
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Bar</template>
    Lorem Ipsum dolor sit amat.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Baz</template>
    Lorem Ipsum dolor sit amat.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>FooBar</template>
    Lorem Ipsum dolor sit amat.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>BarFoo</template>
    Lorem Ipsum dolor sit amat.
  </WelcomeItem>
</template>

<style></style>
