<template>
  <div class="loader">
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle
        class="loader-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="#999999"
        stroke-width="3"
      />
    </svg>
  </div>
</template>

<style scoped>
.loader {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid transparent;
  margin-top: -5px;
}

.circular-loader {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  background: transparent;
}

.loader-path {
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
</style>
