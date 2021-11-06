<template>
    <div class="flex items-center">
        <form class="flex items-center relative shadow-inner rounded-full bg-gray-100 mx-6 lg-max:mx-4" action="" method="get">
            <input
            class="pl-8 py-1 text-black bg-transparent rounded-full z-10"
            type="text"
            >
            <SolidSearchIcon class="absolute ml-2 w-5 h-5 lg-max:w-4 lg-max:h-4 z-0"/>
        </form>
        <NuxtLink to="/" class="px-4 md-max:hidden">
           <SolidCogIcon class="w-6 h-6"/>
        </NuxtLink>
        <NuxtLink to="/" class="px-4 md-max:hidden">
           <SolidChatAlt2Icon class="w-6 h-6"/>
        </NuxtLink>
        <NuxtLink to="/" class="px-4 md-max:hidden">
           <SolidPencilIcon class="w-6 h-6"/>
        </NuxtLink>
    </div>
</template>

<style scoped>
@media (max-width: 1023px) {
    form, input {
        width: 2rem;
        height: 2rem;
    }
    input:focus-within,
    form:focus-within {
        width: 100%;
    }
}
</style>