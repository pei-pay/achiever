<script setup lang="ts">
import { ref } from 'vue'
import Hamburger from './Hamburger.vue'

const isOpenedHamburgerMenu = ref(false)
const toggleHamburgerMenu = (): void => {
  isOpenedHamburgerMenu.value = !isOpenedHamburgerMenu.value
}
</script>

<template>
  <div class="nav-bar">
    <nav>
      <!-- TODO: 達成したいことが入る -->
      <h1 class="title">Study English</h1>
      <Hamburger
        :is-opened="isOpenedHamburgerMenu"
        @click:hamburger-menu="toggleHamburgerMenu"
      />
      <ul class="menu-items" :class="{ open: isOpenedHamburgerMenu }">
        <li><router-link to="/">calendar</router-link></li>
        <li><router-link to="/chart">chart</router-link></li>
        <li><router-link to="/settings">settings</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="sass">
@import '../assets/style/_mixins.sass'
@import '../assets/style/_variables.sass'

.nav-bar
  // position: fixed
  width: 100%
  nav
    height: 3rem
    display: flex
    justify-content: space-between
    color: $primary
    padding: 1.5rem

    .menu-items
      display: flex
      +breakpoint-down(medium)
        position: absolute
        right: 0
        flex-direction: column
        margin-top: 4rem
        height: 100vh
        width: 30vw
        max-width: 10rem
        visibility: hidden
        opacity: 0
        transform: translateX(100%)
        transition: all 0.3s ease-in-out
        &.open
          visibility: visible
          opacity: 1
          transform: translateX(0)
      li
        font-size: 1.25rem
        cursor: pointer
        transition: all 0.3s ease-in-out
        +breakpoint-up(large)
          margin-left: 1.5rem
          .router-link-exact-active,
          &:hover
            opacity: 0.7
            border-bottom: 5px solid $secondary
            transition: all 0.3s ease-in-out
        +breakpoint-down(medium)
          margin-bottom: 1rem
          margin-left: .5rem
          cursor: pointer
        a
          color: $primary
          +breakpoint-down(medium)
            &.router-link-exact-active
              font-weight: 700
              color: $secondary
</style>
