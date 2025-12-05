import { computed } from "vue";
import type { Ref } from "vue";
import { useI18n } from "vue-i18n";

interface WorkDuration {
  startDate: Ref<string | undefined>;
  endDate: Ref<string | undefined>;
}

/**
 * Composable to handle work dates and duration logic
 * @param startDate - Start date
 * @param endDate - End date (can be "now")
 */
export function useWorkDuration({ startDate, endDate }: WorkDuration) {
  const { t } = useI18n();

  /**
   * Gets the absolute difference in complete months between two dates
   */
  function getMonthDifference(start: Date, end: Date): number {
    const diffTime = Math.abs(end.getTime() - start.getTime());
    // Approximation of 30 days per month
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  }

  /**
   * Returns the integer number of years from a month count
   */
  function getYearsFromMonths(months: number): number {
    return Math.floor(months / 12);
  }

  /**
   * Returns the remaining months after extracting complete years
   */
  function getRemainingMonths(months: number): number {
    return months % 12;
  }

  /**
   * Builds a text string to display the duration
   */
  function formatDuration(start: Date, end: Date): string {
    const totalMonths = getMonthDifference(start, end);
    const years = getYearsFromMonths(totalMonths);
    const months = getRemainingMonths(totalMonths);

    if (years <= 0) {
      return t("duration.months", { count: months });
    } else if (months <= 0) {
      return t("duration.years", { count: years });
    } else {
      const yearsText =
        years === 1
          ? t("duration.year_one", { count: years })
          : t("duration.year_other", { count: years });
      const monthsText =
        months === 1
          ? t("duration.month_one", { count: months })
          : t("duration.month_other", { count: months });
      return t("duration.yearsAndMonths", {
        years: yearsText,
        months: monthsText,
      });
    }
  }

  /**
   * Calculates the work duration
   */
  const workDateCount = computed((): string => {
    if (!startDate.value || !endDate.value) {
      return "";
    }

    const start = new Date(startDate.value);
    if (isNaN(start.getTime())) return "";

    let end: Date;
    if (endDate.value === "now") {
      end = new Date();
    } else {
      end = new Date(endDate.value);
      if (isNaN(end.getTime())) return "";
    }

    return formatDuration(start, end);
  });

  /**
   * Calculates formatted date names
   */
  const workDateNames = computed(() => {
    if (!startDate.value) return { start: "", end: "" };

    const start = new Date(startDate.value);
    const end = endDate.value === "now" ? null : new Date(endDate.value || "");

    return {
      start: start.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
      }),
      end: end
        ? end.toLocaleDateString(undefined, { year: "numeric", month: "short" })
        : t("views.home.homeWorkExperience.activeButtonText"),
    };
  });

  /**
   * Generates complete description with dates and duration
   */
  const description = computed(() => {
    return `${workDateNames.value.start} - ${workDateNames.value.end} · ${workDateCount.value}`;
  });

  return {
    workDateCount,
    workDateNames,
    description,
  };
}
