<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="full-height">
    <router-view></router-view>
  </main>
</template>

<style lang="sass"></style>
