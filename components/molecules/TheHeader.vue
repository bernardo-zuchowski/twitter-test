<template>
    <header class="bg-gray-100 p-4">
        <nav class="flex justify-between items-center">
            <div class="flex divide-x-2 divide-white">
                <HeaderHome class="menu-btn"/>
                <HeaderDiscover class="menu-btn"/>
                <HeaderNotifications class="menu-btn"/>
                <HeaderMe class="menu-btn"/>
            </div>
            <div>
                <img class="w-8 h-8" src="~assets/twitter.png" alt="Twitter">
            </div>
            <div class="flex items-center">
                <HeaderSearch class="mx-6"/>
                <HeaderConfig class="menu-btn"/>
                <HeaderMessages class="menu-btn"/>
                <HeaderEdit class="menu-btn"/>
            </div>
        </nav>
    </header>
</template>

<style lang="postcss" scoped>
.menu-btn {
    @apply px-4
}
</style>