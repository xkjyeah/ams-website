<template>
  <NuxtLink custom v-bind="$attrs" v-slot="{ isActive, href, navigate }">
    <li :class="{ active: !!isActive }">
      <a :href="href" @click="navigate">
        <slot />
      </a>
    </li>
  </NuxtLink>
</template>
