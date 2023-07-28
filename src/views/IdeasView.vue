<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import IdeaCard from '@/components/IdeaCard.vue';

</script>

<template>
    <div class="flex flex-col h-screen">

      <NavBar />

      <main class="pt-2 flex flex-col items-center">
        <h1 class="text-gold font-title text-title">Project Ideas</h1>
        <p>Text</p>
      </main>

      <div class="flex flex-col justify-end grow">
      <Footer />
    </div>
    
     </div>
     
</template>
