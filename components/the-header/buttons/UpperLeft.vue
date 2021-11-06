<template>
    <nav class="flex divide-x lg-max:divide-x-0 md-max:hidden">
        <div class="flex items-center px-4">
            <SolidHomeIcon class="w-6 h-6" />
            <NuxtLink to="/" class="lg-max:hidden">Home</NuxtLink>
        </div>
        <div class="flex items-center px-4">
            <SolidHashtagIcon class="w-6 h-6" />
            <NuxtLink to="/" class="lg-max:hidden">Discover</NuxtLink>
        </div>
        <div class="flex items-center px-4">
            <SolidBellIcon class="w-6 h-6" />
            <NuxtLink to="/" class="lg-max:hidden">Notification</NuxtLink>
        </div>
        <div class="flex items-center px-4">
            <SolidUserIcon class="w-6 h-6" />
            <NuxtLink to="/" class="lg-max:hidden">Me</NuxtLink>
        </div>
    </nav>
</template>