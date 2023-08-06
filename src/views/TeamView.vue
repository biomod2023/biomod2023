<script setup lang="ts">
    import NavBar from "@/components/NavBar.vue"
    import Footer from "@/components/Footer.vue"
    import ProfileCard from "@/components/ProfileCard.vue"

    import {Kshemaka, Miguel} from "@/components/Member"
    // import Kshemaka from "@/assets/profile_pictures/Kshemaka.jpg"
    // import Miguel from "@/assets/profile_pictures/Miguel.jpg"
</script>

<template>
    <div class="flex flex-col h-screen">
        <NavBar/>

        <!-- Header -->
        <div class="flex flex-col w-screen items-center">
            <h1 class="text-title text-gold">
                Our Team
            </h1> 
            <h2 class="text-subtitle text-gold">
                Behold the Amazing Folders!
            </h2>
        </div>

        <!-- Team Carousel -->
        <div class="flex flex-wrap justify-center">
            <ProfileCard :member="Kshemaka"/>
            <ProfileCard :member="Miguel"/>
        </div>

        
        <div class="flex flex-col justify-end grow">
            <Footer />
        </div>
    </div>
</template>