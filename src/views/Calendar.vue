<script setup lang="ts">
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import { useFullCalendar } from '../useCases/fullCalendar'

const { calendarOptions } = useFullCalendar()
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>
