<template>
  <p class="contact-buttons">
    <a
      id="gitHub"
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="https://github.com/Andresws12"
      :title="$t('common.images.dataGithubImage')"
      aria-label="gitHub"
      class=""
    >
      <NuxtImg
        src="/img/github.svg"
        :alt="$t('common.images.dataGithubImage')"
        class="contact-buttons__icon"
        quality="100"
        height="25"
        loading="lazy"
      />
    </a>
    <a
      id="linkedIn"
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="https://www.linkedin.com/in/andreshernandez1995/"
      :title="$t('common.images.dataLinkedinImage')"
      aria-label="linkedIn"
    >
      <NuxtImg
        class="contact-buttons__icon"
        src="/img/linkedin.svg"
        :alt="$t('common.images.dataLinkedinImage')"
        quality="100"
        height="25"
        loading="lazy"
      />
    </a>
    <a
      id="gmail"
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="mailto:andreshernandez12.1995@gmail.com"
      :title="$t('common.images.dataGmailImage')"
      aria-label="gmail"
    >
      <NuxtImg
        class="contact-buttons__icon"
        src="/img/gmail.svg"
        :alt="$t('common.images.dataGmailImage')"
        quality="100"
        height="25"
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
  }
}
</style>
