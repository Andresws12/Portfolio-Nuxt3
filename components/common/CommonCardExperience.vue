<script lang="ts" setup>
import { NuxtImg } from "#components";
/**
 * Represents the argument object for the CommonCardExperience component.
 */
export interface Args {
  imageSource: string;
  imageData: string;
  imageHeight: string;
  textTitle: string;
  textSubtitle: string;
  callToActionButton: string;
  isActive?: boolean;
  activeTextButton?: string;
  hasVue?: boolean;
  hasAngular?: boolean;
  hasNet?: boolean;
  hasReact?: boolean;
  hasJquery?: boolean;
  hasTypescript?: boolean;
  hasPhp?: boolean;
  dateStart?: string;
  dateEnd?: string;
}

interface Props {
  args: Args;
}

/**
 * Defines props with default values assigned via `withDefaults`.
 */
const props = withDefaults(defineProps<Props>(), {
  args: () => ({
    imageSource: "",
    imageData: "",
    imageHeight: "",
    textTitle: "",
    textSubtitle: "",
    callToActionButton: "",
    isActive: false,
    activeTextButton: "",
    hasVue: false,
    hasAngular: false,
    hasNet: false,
    hasReact: false,
    hasJquery: false,
    hasTypescript: false,
    hasPhp: false,
    dateStart: "",
    dateEnd: "",
  }),
});

/**
 * Defines the `click` event emitted by this component.
 */
const emit = defineEmits<{
  (e: "click"): void;
}>();

const { t } = useI18n();

const {
  imageSource,
  imageData,
  imageHeight,
  textTitle,
  textSubtitle,
  callToActionButton,
  isActive,
  activeTextButton,
  hasVue,
  hasAngular,
  hasNet,
  hasReact,
  hasJquery,
  hasTypescript,
  hasPhp,
  dateStart,
  dateEnd,
} = toRefs(props.args);

/**
 * Gets the absolute difference in full months between two dates.
 *
 * @param start - The start date.
 * @param end - The end date.
 * @returns The number of months difference (rounded up).
 */
function getMonthDifference(start: Date, end: Date): number {
  const diffTime = Math.abs(end.getTime() - start.getTime());
  // Approximate 30 days per month
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
}

/**
 * Returns the whole number of years in a month count.
 *
 * @param months - The total number of months.
 * @returns The full years contained in those months.
 */
function getYearsFromMonths(months: number): number {
  return Math.floor(months / 12);
}

/**
 * Returns the remaining months after extracting whole years.
 *
 * @param months - The total number of months.
 * @returns The leftover months once years are factored out.
 */
function getRemainingMonths(months: number): number {
  return months % 12;
}

/**
 * Constructs a display string of "X años Y meses" or "Y meses" for the
 * time difference between two dates.
 *
 * @param start - The start date.
 * @param end - The end date.
 * @returns A formatted string of the duration between the dates.
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
 * Computes how long the time span is, based on provided start and end dates.
 * If `dateEnd` is "now", the current date is used as the end date.
 */
const workDateCount = computed((): string => {
  // Ensure both dates exist and are non-empty
  if (!dateStart.value || !dateEnd.value) {
    return "";
  }

  // Parse start date and handle invalid date scenario
  const start = new Date(dateStart.value);
  if (isNaN(start.getTime())) return "";

  let end: Date;
  if (dateEnd.value === "Now") {
    end = new Date();
  } else {
    end = new Date(dateEnd.value);
    if (isNaN(end.getTime())) return "";
  }

  return formatDuration(start, end);
});

/**
 * Computes the formatted start and end dates for a work experience.
 *
 * @computed
 * @returns {Object} An object containing the formatted start and end dates.
 * @property {string} start - The formatted start date in "MMM YYYY" format.
 * @property {string} end - The formatted end date in "MMM YYYY" format, or a localized string indicating the work is ongoing.
 */
const workDateNames = computed(() => {
  const start = new Date(dateStart.value);
  const end = dateEnd.value === "now" ? null : new Date(dateEnd.value);
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
 * Computed property that generates a description string for a work experience card.
 * The description includes the start date, end date, and the duration of the work experience.
 *
 * @returns {string} A formatted string in the format "start - end · duration".
 */
const description = computed(() => {
  return `${workDateNames.value.start} - ${workDateNames.value.end} · ${workDateCount.value}`;
});
</script>

<template>
  <article
    class="common-card-experience card"
    :class="{ 'is-active': isActive }"
    :aria-label="$t('common.ariaLabel.ariaLabelWorkData') + ' ' + textTitle"
    data-cy="common-card-experience"
  >
    <div
      class="common-card-experience__image-container"
      data-cy="common-card-experience-image-container"
    >
      <NuxtImg
        :src="imageSource"
        :alt="imageData"
        width="250"
        :height="imageHeight"
        loading="lazy"
        provider="cloudflare"
        data-cy="common-card-experience-work-image"
      />
      <span
        v-if="isActive"
        class="common-card-experience__image-label is-extra is-strong"
        data-cy="common-card-experience-active-label"
      >
        {{ activeTextButton }}
      </span>
    </div>
    <div
      class="common-card-experience__text-container"
      data-cy="common-card-experience-text-container"
    >
      <h3 class="common-card-experience__title is-subtitle is-strong">
        {{ textTitle }}
      </h3>
      <h4 class="common-card-experience__subtitle is-light">
        {{ textSubtitle }}
      </h4>
      <p class="common-card-experience__description is-extra">
        {{ description }}
      </p>
    </div>
    <div
      class="common-card-experience__technologies-container"
      :aria-label="'Technologies ' + textTitle"
      data-cy="common-card-experience-technologies-container"
    >
      <img
        v-if="hasVue"
        src="/img/tech/vue.svg"
        alt="vue"
        title="vue logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-vue"
      />
      <img
        v-if="hasAngular"
        src="/img/tech/angular.svg"
        alt="angular"
        title="angular logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-angular"
      />
      <img
        v-if="hasNet"
        src="/img/tech/net.svg"
        alt=".net"
        title=".net logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-net"
      />
      <img
        v-if="hasReact"
        src="/img/tech/react.svg"
        alt="react"
        title="react logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-react"
      />
      <img
        v-if="hasJquery"
        src="/img/tech/jquery.svg"
        alt="jquery"
        title="jquery logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-jquery"
      />
      <img
        v-if="hasTypescript"
        src="/img/tech/typescript.svg"
        alt="typescript"
        title="typescript logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-typescript"
      />
      <img
        v-if="hasPhp"
        src="/img/tech/php.svg"
        alt="php"
        title="php logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-php"
      />
    </div>
    <div class="common-card-experience__button-container">
      <button
        type="button"
        class="button"
        data-cy="common-card-experience-button"
        @click="emit('click')"
      >
        {{ callToActionButton }}
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins/all" as mixins;

.common-card-experience {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
  position: relative;
  box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;

  @include mixins.mobile {
    width: 100%;
  }

  &__image-container {
    height: 180px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__subtitle {
    margin: 0;
  }

  &__description {
    margin-bottom: 0;
  }

  &__text-container,
  &__button-container {
    padding: 0 15px 15px;
  }

  &__button-container {
    position: absolute;
    right: 0;
    bottom: 5px;
  }

  &__technologies-container {
    padding-left: 15px;
  }

  &__image-label {
    position: absolute;
    left: 15px;
    top: 15px;
  }
}
</style>
