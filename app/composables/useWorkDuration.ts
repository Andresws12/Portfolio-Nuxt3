import { computed, unref } from 'vue'
import type { MaybeRef } from 'vue'
import { useI18n } from 'vue-i18n'

interface WorkDuration {
  startDate: MaybeRef<string | undefined>
  endDate: MaybeRef<string | undefined>
}

/**
 * Composable to handle work dates and duration logic
 * @param startDate - Start date
 * @param endDate - End date (can be "now")
 */
export const useWorkDuration = function ({ startDate, endDate }: WorkDuration) {
  const { t, locale } = useI18n()
  /**
   * Gets the absolute difference in complete months between two dates
   */
  function getMonthDifference(start: Date, end: Date): number {
    const diffTime = Math.abs(end.getTime() - start.getTime())
    // Approximation of 30 days per month
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
  }

  /**
   * Returns the integer number of years from a month count
   */
  function getYearsFromMonths(months: number): number {
    return Math.floor(months / 12)
  }

  /**
   * Returns the remaining months after extracting complete years
   */
  function getRemainingMonths(months: number): number {
    return months % 12
  }

  /**
   * Builds a text string to display the duration
   */
  function formatDuration(start: Date, end: Date): string {
    const totalMonths = getMonthDifference(start, end)
    const years = getYearsFromMonths(totalMonths)
    const months = getRemainingMonths(totalMonths)

    if (years <= 0) {
      return t('duration.months', { count: months })
    } else if (months <= 0) {
      return t('duration.years', { count: years })
    } else {
      const yearsText =
        years === 1
          ? t('duration.year_one', { count: years })
          : t('duration.year_other', { count: years })
      const monthsText =
        months === 1
          ? t('duration.month_one', { count: months })
          : t('duration.month_other', { count: months })
      return t('duration.yearsAndMonths', {
        years: yearsText,
        months: monthsText,
      })
    }
  }

  /**
   * Calculates the work duration
   */
  const workDateCount = computed((): string => {
    const startValue = unref(startDate)
    const endValue = unref(endDate)

    if (!startValue || !endValue) {
      return ''
    }

    const start = new Date(startValue)
    if (isNaN(start.getTime())) return ''

    let end: Date
    if (endValue === 'now') {
      end = new Date()
    } else {
      end = new Date(endValue)
      if (isNaN(end.getTime())) return ''
    }

    return formatDuration(start, end)
  })

  /**
   * Calculates formatted date names
   */
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  /**
   * Calculates formatted date names
   */
  const workDateNames = computed(() => {
    const startValue = unref(startDate)
    const endValue = unref(endDate)
    const currentLocale = unref(locale)

    if (!startValue) return { start: '', end: '' }

    const start = new Date(startValue)
    // If "now", keep as null to signify "Currently" or similar
    // But logic below uses end? to check.
    const end = endValue === 'now' ? null : new Date(endValue || '')

    const startStr = start.toLocaleDateString(currentLocale, {
      year: 'numeric',
      month: 'short',
    })

    const endStr = end
      ? end.toLocaleDateString(currentLocale, { year: 'numeric', month: 'short' })
      : t('views.home.homeWorkExperience.activeButtonText')

    return {
      start: capitalize(startStr),
      end: end ? capitalize(endStr) : endStr,
    }
  })

  /**
   * Generates complete description with dates and duration
   */
  const description = computed(() => {
    return `${workDateNames.value.start} - ${workDateNames.value.end} · ${workDateCount.value}`
  })

  return {
    workDateCount,
    workDateNames,
    description,
  }
}
