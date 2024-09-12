function getMondayOfCurrentWeek() {
  const today = new Date()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek

  const monday = new Date(today)
  monday.setDate(today.getDate() + diffToMonday)

  return monday
}

function getFridayOfCurrentWeek() {
  const monday = getMondayOfCurrentWeek()
  const friday = new Date(monday)
  friday.setDate(monday.getDate() + 4) // Add 5 days to Monday to get Friday
  return friday
}

const mondayOfCurrentWeek = getMondayOfCurrentWeek()
const fridayOfCurrentWeek = getFridayOfCurrentWeek()

export const SchedulerProConfig = {
  project: {
    autoLoad: true,
    autoSync: true,
    loadUrl: import.meta.env.VITE_APP_API_URL,
    syncUrl: import.meta.env.VITE_APP_API_URL
  },
  features: {
    timeAxisHeaderMenu: {
      leftShiftBtn: true
    }
  },
  startDate: mondayOfCurrentWeek,
  endDate: fridayOfCurrentWeek,
  rowHeight: 50,
  barMargin: 0,
  viewPreset: {
    base: 'hourAndDay',
    tickWidth: 20,
    headers: [
      {
        unit: 'day',
        dateFormat: 'ddd D MMM'
      },
      {
        unit: 'hour',
        dateFormat: 'HH'
      }
    ]
  },
  columns: [
    {
      text: 'People',
      field: 'name',
      showEventCount: true,
      width: 200
    },
    {
      text: 'Team',
      field: 'team',
      hidden: true
    }
  ],
  timeAxis: {
    leftShiftBtn: true,
    filters: [
      {
        filterBy(tick) {
          return tick.startDate.getHours() > 8 && tick.startDate.getHours() < 18
        }
      }
    ]
  }
}

export const TaskEditConfig = {
  editorConfig: {
    title: 'Edit Task'
  },
  items: {
    generalTab: {
      // Rename "General" tab
      title: 'Main',
      items: {
        nameField: {
          label: 'Task Name'
        },
        resourcesField: {
          label: 'People'
        },
        durationField: null
      }
    },
    advancedTab: null,
    predecessorsTab: null,
    successorsTab: null
  }
}
