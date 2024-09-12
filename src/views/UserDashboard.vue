<template>
  <div class="schedule-container">
    <SchedulerToolbar
      :on-toggle-layout="onToggleLayout"
      :scheduler-pro-ref-fn="schedulerProRefFn"
    />
    <BryntumSchedulerPro
      ref="schedulerProRef"
      v-bind="schedulerConfig"
      :task-edit-feature="editConfig"
    />
  </div>
</template>

<script setup>
import { BryntumSchedulerPro } from '@bryntum/schedulerpro-vue-3'
import { ref } from 'vue'
import { SchedulerProConfig, TaskEditConfig } from '../common/configs.js'
import SchedulerToolbar from '../components/ShedulerToolbar.vue'

const schedulerConfig = ref(SchedulerProConfig),
  editConfig = ref(TaskEditConfig)
const schedulerProRef = ref(null)
//  The methods to pass a component ref to a child component by passing a function which returns the ref, otherwise the ref instance will be "undefine" in the child component
const schedulerProRefFn = () => schedulerProRef
</script>

<style></style>
