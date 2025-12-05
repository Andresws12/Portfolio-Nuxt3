<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { NuxtImg } from "#components";

interface Technology {
  name: string;
  icon: string;
  delay: number;
  duration: number;
  xPos?: string;
  yPos?: string;
}

const POSITION_MARGIN = 10;
const POSITION_RANGE = 80;
const ANIMATION_START_DELAY = 100;

const technologies = ref<Technology[]>([
  { name: "Vue", icon: "/img/tech/vue.svg", delay: 0, duration: 45 },
  { name: "Angular", icon: "/img/tech/angular.svg", delay: 2, duration: 48 },
  { name: ".NET", icon: "/img/tech/net.svg", delay: 4, duration: 50 },
  { name: "React", icon: "/img/tech/react.svg", delay: 6, duration: 46 },
  { name: "jQuery", icon: "/img/tech/jquery.svg", delay: 8, duration: 49 },
  {
    name: "TypeScript",
    icon: "/img/tech/typescript.svg",
    delay: 10,
    duration: 47,
  },
  { name: "PHP", icon: "/img/tech/php.svg", delay: 12, duration: 48 },
]);

const animationActive = ref(false);
const isClient = ref(false);

for (const tech of technologies.value) {
  tech.xPos = `${POSITION_MARGIN + technologies.value.indexOf(tech) * 10}%`;
  tech.yPos = `${POSITION_MARGIN + technologies.value.indexOf(tech) * 8}%`;
}

const getRandomPosition = () =>
  `${POSITION_MARGIN + Math.random() * POSITION_RANGE}%`;

onMounted(() => {
  isClient.value = true;
  for (const tech of technologies.value) {
    tech.xPos = getRandomPosition();
    tech.yPos = getRandomPosition();
  }

  setTimeout(() => {
    animationActive.value = true;
  }, ANIMATION_START_DELAY);
});
</script>

<template>
  <div class="technologies-container">
    <div
      v-for="tech in technologies"
      :key="tech.name"
      class="technology-icon"
      :class="{ animate: animationActive }"
      :style="{
        '--delay': `${tech.delay}s`,
        '--duration': `${tech.duration}s`,
        '--x-pos': tech.xPos,
        '--y-pos': tech.yPos,
      }"
    >
      <NuxtImg
        class="tech-icon"
        :src="tech.icon"
        :alt="tech.name"
        width="75px"
        height="75px"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$animation-offset-x: 5vw;
$animation-offset-y: 4vh;
$animation-offset-alt-x: -5vw;
$animation-offset-alt-y: -4vh;
$animation-offset-third-x: -3vw;
$animation-offset-third-y: 5vh;

.technologies-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  opacity: 0.2;
}

.technology-icon {
  position: absolute;
  top: var(--y-pos);
  left: var(--x-pos);
  opacity: 1;
  transform: translate(0, 0);

  &.animate {
    animation: float var(--duration) cubic-bezier(0.4, 0, 0.2, 1) var(--delay)
      infinite;
  }

  .tech-icon {
    object-fit: contain;
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate($animation-offset-x, $animation-offset-y);
  }

  50% {
    transform: translate($animation-offset-alt-x, $animation-offset-alt-y);
  }

  75% {
    transform: translate($animation-offset-third-x, $animation-offset-third-y);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
