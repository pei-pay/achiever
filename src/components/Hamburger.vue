<script setup lang="ts">
defineProps({
  isOpened: Boolean
})
</script>

<template>
  <div id="hamburger" :class="{ open: isOpened }" @click="$emit('click:hamburger-menu')">
    <div class="hamburger__icon">
      <span class="hamburger__icon--top"></span>
      <span class="hamburger__icon--middle"></span>
      <span class="hamburger__icon--bottom"></span>
    </div>
  </div>
</template>

<style lang="sass">
@import '../assets/style/_mixins.sass'
@import '../assets/style/_variables.sass'

#hamburger
  .hamburger__icon
    position: relative
    height: 1.5rem
    width: 1.8rem
    .hamburger__icon--top,
    .hamburger__icon--middle,
    .hamburger__icon--bottom
      position: absolute
      display: block
      height: 0.25rem
      width: 1.8rem
      border-radius: 2px
      background-color: $primary
      transition: all 0.3s cubic-bezier(0.27, -0.72, 0.79, 1.84)

    .hamburger__icon--top
      top: 0
    .hamburger__icon--middle
      top: 0.625rem
    .hamburger__icon--bottom
      bottom: 0

  &.open
    .hamburger__icon--top
      transform: translateY(10px) rotate(-45deg)

    .hamburger__icon--middle
      opacity: 0

    .hamburger__icon--bottom
      transform: translateY(-10px) rotate(45deg)

  +breakpoint-up(large)
    display: none
    z-index: 2
</style>
