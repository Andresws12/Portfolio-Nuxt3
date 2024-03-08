<template>
  <a
    href="#main-content"
    class="skip-link"
    :aria-label="$t('common.skips.skipToMainContent')"
  >
    {{ $t('common.skips.skipToMainContent') }}
  </a>
  <a
    href="#linkedIn"
    class="skip-link"
    :aria-label="$t('common.skips.skipToLinkedin')"
  >
    {{ $t('common.skips.skipToLinkedin') }}
  </a>
  <a
    href="#gitHub"
    class="skip-link"
    :aria-label="$t('common.skips.skipToGithub')"
  >
    {{ $t('common.skips.skipToGithub') }}
  </a>
  <a
    href="#gmail"
    class="skip-link"
    :aria-label="$t('common.skips.skipToGmail')"
  >
    {{ $t('common.skips.skipToGmail') }}
  </a>
  <a
    href="#personal-data"
    class="skip-link"
    :aria-label="$t('common.skips.skipToPersonalData')"
  >
    {{ $t('common.skips.skipToPersonalData') }}
  </a>
</template>

<style lang="scss" scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
