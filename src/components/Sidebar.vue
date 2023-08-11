<template>
    <Transition>
        <div class="absolute w-full h-full left-0 top-24 flex justify-end bg-black bg-opacity-90">
    
            <div class="fly flex flex-col items-center justify-between p-4 h-full w-[70%] bg-slate">
                <div class="flex flex-col w-full space-y-2 text-gold text-lg font-bold">
                    <a href="/">home</a>
                    <a href="/about-us">about us</a>
                    <a href="#">contact us</a>
                </div>
            </div>
        </div>
    </Transition>
</template>


<style>
.v-enter-active,
.v-leave-active {
    transition: 100ms;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-active .fly,
.v-leave-active .fly {
    transition: 100ms;
}

.v-enter-from .fly {
    transform: translateX(100%);
}

.v-leave-to .fly {
    transform: translateX(100%);
}
</style>