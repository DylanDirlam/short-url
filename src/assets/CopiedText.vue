<template>
  <span class="copied-text">
    Copied
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </span>
</template>

<style scoped>
.copied-text {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #34b34b;
}

svg {
  border: 2px solid transparent;
  width: 1.5rem;
  height: 1.5rem;
}
</style>
