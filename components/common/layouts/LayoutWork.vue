<script lang="ts" setup>
import { NuxtImg } from "#components";
export interface Args {
  imageSource: string;
  imageData: string;
  imageHeight: string;
  textTitle: string;
  textSubtitle: string;
  callToActionButton?: string;
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

const {
  imageSource,
  imageData,
  imageHeight,
  textTitle,
  textSubtitle,
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
const { t } = useI18n();

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
    return `${months} meses`;
  } else {
    return `${years} años ${months} meses`;
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
  if (dateEnd.value === "now") {
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
  <section class="layout-work" data-cy="layout-work">
    <article
      class="layout-work__business-data"
      data-cy="layout-work-business-data"
    >
      <NuxtImg
        :src="imageSource"
        :alt="imageData"
        :title="imageData"
        provider="cloudflare"
        sizes="100vw xs:25vw sm:50vw md:400px"
        loading="lazy"
        width="250"
        :height="imageHeight"
        class="layout-work__business-image"
        data-cy="layout-work-business-image"
      />
      <h1
        class="layout-work__business-name"
        data-cy="layout-work-business-name"
      >
        {{ textTitle }}
      </h1>
      <h2
        class="layout-work__business-role"
        data-cy="layout-work-business-role"
      >
        {{ textSubtitle }}
      </h2>
      <p
        class="layout-work__business-period"
        data-cy="layout-work-business-period"
      >
        {{ description }}
      </p>
      <slot name="business-data" />
      <div
        class="layout-work__technologies-container"
        data-cy="layout-work-technologies-container"
      >
        <NuxtImg
          v-if="hasVue"
          src="/img/tech/vue.svg"
          alt="vue"
          width="25"
          height="25"
          loading="lazy"
          provider="cloudflare"
          data-cy="layout-work-technology-vue"
        />
        <NuxtImg
          v-if="hasAngular"
          src="/img/tech/angular.svg"
          alt="angular"
          width="25"
          height="25"
          loading="lazy"
          provider="cloudflare"
          data-cy="layout-work-technology-angular"
        />
        <NuxtImg
          v-if="hasNet"
          src="/img/tech/net.svg"
          alt=".net"
          width="25"
          height="25"
          loading="lazy"
          provider="cloudflare"
          data-cy="layout-work-technology-net"
        />
        <NuxtImg
          v-if="hasReact"
          src="/img/tech/react.svg"
          alt="react"
          width="25"
          height="25"
          loading="lazy"
          data-cy="layout-work-technology-react"
        />
        <NuxtImg
          v-if="hasJquery"
          src="/img/tech/jquery.svg"
          alt="jquery"
          width="25"
          height="25"
          loading="lazy"
          provider="cloudflare"
          data-cy="layout-work-technology-jquery"
        />
        <NuxtImg
          v-if="hasTypescript"
          src="/img/tech/typescript.svg"
          alt="typescript"
          width="25"
          height="25"
          loading="lazy"
          provider="cloudflare"
          data-cy="layout-work-technology-typescript"
        />
        <NuxtImg
          v-if="hasPhp"
          src="/img/tech/php.svg"
          alt="php"
          width="25"
          height="25"
          loading="lazy"
          provider="cloudflare"
          data-cy="layout-work-technology-php"
        />
      </div>
    </article>
    <article
      class="layout-work__personal-data card"
      data-cy="layout-work-personal-data"
    >
      <slot />
    </article>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins/all" as mixins;

//styles
.layout-work {
  display: flex;
  padding: 100px 150px 55px;

  @include mixins.tablet {
    padding: 100px 25px 55px;
  }

  @include mixins.mobile {
    flex-direction: column;
  }

  &__business-data {
    padding: 25px;
    backdrop-filter: blur(5px);
    z-index: 1;

    @include mixins.mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__personal-data {
    padding: 25px;
    width: -webkit-fill-available;
    border-radius: 15px;
    position: relative;
    z-index: 1;
  }

  &__business-name {
    font-size: 1.5rem;
  }

  &__business-role {
    font-size: 1.25rem;
  }

  &__business-period {
    font-size: 1rem;
  }
}
</style>
