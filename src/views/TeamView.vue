<script setup lang="ts">
    import NavBar from "@/components/NavBar.vue"
    import Footer from "@/components/Footer.vue"
</script>

<template>
    <div class="flex flex-col h-screen">
        <NavBar/>
        <div class="flex flex-col w-screen items-center">
            <h1 class="text-title text-gold">
                Our Team
            </h1> 
            <h2 class="text-subtitle text-gold">
                Behold the Amazing Folders!
            </h2>
        </div>
        <div class="flex flex-col justify-end grow">
            <Footer />
        </div>
    </div>
</template>