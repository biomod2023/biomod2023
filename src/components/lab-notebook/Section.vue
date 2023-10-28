
<script setup lang="ts">
  const sectionTitleStyle = 'text-subtitle-sm lg:text-subtitle text-white mb-4'
</script>

<template>
    <section>
        <h3 :class="sectionTitleStyle">
            <slot name="sub-title"></slot>
        </h3>
        <slot name="content"></slot>
    </section>
</template>