<script setup lang="ts">
import { BryntumToolbar } from '@bryntum/schedulerpro-vue-3'
import { DateHelper, Toast } from '@bryntum/schedulerpro'

// Some variables used in this demo
const startHour = 7
const endHour = 20

const props = defineProps({
  onToggleLayout: {
    type: Function,
    default: () => {}
  },
  schedulerProRefFn: {
    type: Function,
    default: () => {}
  }
})

const onShiftPrevious = () => {
  const schedulerPro = props.schedulerProRefFn().value.instance.value
  schedulerPro!.shiftPrevious(7)
}

const onShiftNext = () => {
  const schedulerPro = props.schedulerProRefFn().value.instance.value
  schedulerPro!.shiftNext(7)
}

const onClickToday = () => {
  const schedulerPro = props.schedulerProRefFn().value.instance.value
  const startDate = DateHelper.clearTime(new Date())
  schedulerPro!.setTimeSpan(
    DateHelper.add(startDate, startHour, 'h'),
    DateHelper.add(startDate, endHour, 'h')
  )
}

const SchedulerTbarConfig = {
  items: [
    {
      type: 'buttonGroup',
      items: [
        {
          icon: 'b-icon b-fa-chevron-left',
          cls: 'b-transparent',
          onAction: onShiftPrevious
        },
        {
          type: 'button',
          text: 'Week',
          cls: 'b-transparent',
          onAction: onClickToday
        },
        {
          icon: 'b-icon b-fa-chevron-right',
          cls: 'b-transparent',
          onAction: onShiftNext
        }
      ]
    }
  ]
}
</script>

<template>
  <bryntum-toolbar v-bind="SchedulerTbarConfig" />
</template>
