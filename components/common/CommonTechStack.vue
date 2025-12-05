<script lang="ts" setup>
import { NuxtImg } from "#components";

interface TechStack {
  hasVue?: boolean;
  hasAngular?: boolean;
  hasNet?: boolean;
  hasReact?: boolean;
  hasJquery?: boolean;
  hasTypescript?: boolean;
  hasPhp?: boolean;
}

interface Props {
  techStack: TechStack;
  width?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  width: 20,
  height: 20,
});

const AVAILABLE_TECHNOLOGIES = [
  { name: "vue", enabled: props.techStack.hasVue },
  { name: "angular", enabled: props.techStack.hasAngular },
  { name: "net", enabled: props.techStack.hasNet },
  { name: "react", enabled: props.techStack.hasReact },
  { name: "jquery", enabled: props.techStack.hasJquery },
  {
    name: "typescript",
    enabled: props.techStack.hasTypescript,
  },
  { name: "php", enabled: props.techStack.hasPhp },
] as const;

const getTechImagePath = (techName: string): string =>
  `/img/tech/${techName}.svg`;
</script>

<template>
  <div class="common-tech-stack" data-cy="common-tech-stack" role="img">
    <NuxtImg
      v-for="tech in AVAILABLE_TECHNOLOGIES"
      v-show="tech.enabled"
      :key="tech.name"
      :src="getTechImagePath(tech.name)"
      :alt="`${tech.name} logo`"
      :title="`${tech.name} logo`"
      :width="width"
      :height="height"
      loading="lazy"
      provider="cloudflare"
      :data-cy="`common-tech-stack-${tech.name}`"
      class="common-tech-stack__image"
    />
  </div>
</template>

<style lang="scss" scoped>
.common-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;

  &__image {
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
