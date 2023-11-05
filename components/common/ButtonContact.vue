<template>
  <p class="contact-buttons">
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="https://github.com/Andresws12"
      :title="$t('common.images.dataGithubImage')"
    >
      <NuxtImg
        src="/img/github.svg"
        :alt="$t('common.images.dataGithubImage')"
        :title="$t('common.images.dataGithubImage')"
        class="contact-buttons__icon"
        width="29"
        height="29"
        loading="lazy"
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="https://www.linkedin.com/in/andreshernandez1995/"
      :title="$t('common.images.dataLinkedinImage')"
    >
      <NuxtImg
        class="contact-buttons__icon"
        src="/img/linkedin.svg"
        :alt="$t('common.images.dataLinkedinImage')"
        :title="$t('common.images.dataLinkedinImage')"
        width="29"
        height="29"
        loading="lazy"
      />
    </a>
  </p>
</template>
<script lang="ts" setup>
// Code
</script>
<style lang="scss" scoped>
.contact-buttons {
  &__icon {
    margin-right: 10px;
    transition: all 0.3s;
    filter: $main-filter-color;

    &:hover {
      filter: $main-filter-color-medium-light;
    }
  }
}
</style>
