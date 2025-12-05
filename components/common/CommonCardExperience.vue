<script lang="ts" setup>
export interface Props {
  imageSource: string;
  imageData: string;
  imageHeight: string;
  textTitle: string;
  textDescription: string;
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

const props = withDefaults(defineProps<Props>(), {
  imageSource: "",
  imageData: "",
  imageHeight: "",
  textTitle: "",
  textDescription: "",
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
});

const emit = defineEmits<EmitsType>();

/**
 * Calculates the number of months between two dates.
 *
 * @param {Date} dateStart - The start date.
 * @param {Date} dateEnd - The end date.
 * @returns {number} The number of months between the start and end dates.
 */
const getMonths = (dateStart: Date, dateEnd: Date) => {
  const diffTime = Math.abs(dateEnd.getTime() - dateStart.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
};

/**
 * Calculates the number of years from a given number of months.
 *
 * @param {number} months - The total number of months.
 * @returns {number} The number of complete years.
 */
const getYearsByMonths = (months: number) => {
  return Math.floor(months / 12);
};

/**
 * Removes the years from a given number of months.
 *
 * @param {number} months - The total number of months.
 * @returns {number} The remaining months after removing the years.
 */
const removeYears = (months: number) => {
  return months % 12;
};

/**
 * Calculates the total time between two dates in years and months.
 *
 * @param {Date} dateStart - The start date.
 * @param {Date} dateEnd - The end date.
 * @returns {string} - The total time formatted as "X años Y meses" or "Y meses" if less than a year.
 */
const getTotalTime = (dateStart: Date, dateEnd: Date) => {
  const diffMonths = getMonths(dateStart, dateEnd);
  const years = getYearsByMonths(diffMonths);
  const diffMonthsYears = removeYears(diffMonths);

  if (years === 0) {
    return `${diffMonthsYears} meses`;
  }
  return `${years} años ${diffMonthsYears} meses`;
};

const workDateCount = computed(() => {
  if (props.dateStart && props.dateEnd) {
    const dateStart = new Date(props.dateStart);
    if (props.dateEnd === "now") {
      const dateEnd = new Date();
      const totalTime = getTotalTime(dateStart, dateEnd);
      return totalTime;
    }
    const dateEnd = new Date(props.dateEnd);
    const totalTime = getTotalTime(dateStart, dateEnd);
    return totalTime;
  }
  return "";
});

type EmitsType = {
  (e: "click"): void;
};
</script>

<template>
  <article
    class="common-card-experience card"
    :class="{ 'is-active': isActive }"
    :aria-label="
      $t('common.ariaLabel.ariaLabelWorkData') + ' ' + props.textTitle
    "
    data-cy="common-card-experience"
  >
    <div
      class="common-card-experience__image-container"
      data-cy="common-card-experience-image-container"
    >
      <NuxtImg
        :src="props.imageSource"
        :alt="props.imageData"
        width="250"
        :height="props.imageHeight"
        loading="lazy"
        provider="cloudflare"
        data-cy="common-card-experience-work-image"
      />
      <span
        v-if="isActive"
        class="common-card-experience__image-label is-extra is-strong"
        data-cy="common-card-experience-active-label"
      >
        {{ props.activeTextButton }}
      </span>
    </div>
    <div
      class="common-card-experience__text-container"
      data-cy="common-card-experience-text-container"
    >
      <h3 class="common-card-experience__title is-subtitle is-strong">
        {{ props.textTitle }}
      </h3>
      <h4 class="common-card-experience__subtitle is-light">
        {{ props.textSubtitle }}
      </h4>
      <p class="common-card-experience__description is-extra">
        {{ props.textDescription }} {{ workDateCount }}
      </p>
    </div>
    <div
      class="common-card-experience__technologies-container"
      :aria-label="'Technologies ' + props.textTitle"
      data-cy="common-card-experience-technologies-container"
    >
      <img
        v-if="props.hasVue"
        src="/img/tech/vue.svg"
        alt="vue"
        title="vue logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-vue"
      />
      <img
        v-if="props.hasAngular"
        src="/img/tech/angular.svg"
        alt="angular"
        title="angular logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-angular"
      />
      <img
        v-if="props.hasNet"
        src="/img/tech/net.svg"
        alt=".net"
        title=".net logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-net"
      />
      <img
        v-if="props.hasReact"
        src="/img/tech/react.svg"
        alt="react"
        title="react logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-react"
      />
      <img
        v-if="props.hasJquery"
        src="/img/tech/jquery.svg"
        alt="jquery"
        title="jquery logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-jquery"
      />
      <img
        v-if="props.hasTypescript"
        src="/img/tech/typescript.svg"
        alt="typescript"
        title="typescript logo"
        width="25"
        height="25"
        loading="lazy"
        data-cy="common-card-experience-tech-typescript"
      />
      <img
        v-if="props.hasPhp"
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
        {{ props.callToActionButton }}
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins/all" as mixins;

// styles
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

  &__button-container,
  &__text-container {
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
