<script setup lang="ts">
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import { useFullCalendar } from '../useCases/fullCalendar'

const { calendarOptions } = useFullCalendar()
</script>

<template>
  <div id="calendar-container">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style lang="sass">
#calendar-container
  position: fixed
  top: 5rem
  left: 0
  right: 0
  bottom: 0
  .fc-header-toolbar
    color: $primary
    padding: 0 1.5rem
    margin-bottom: 0.5rem
  .fc-toolbar-title
    font-size: 1.3rem
</style>
