<template>
    <header class="shadow-lg bg-white border-b  p-4">
        <nav class="flex justify-between items-center">
            <div class="flex divide-x divide-yellow-40">
                <ButtonsHome class="menu-btn"/>
                <ButtonsDiscover class="menu-btn"/>
                <ButtonsNotifications class="menu-btn"/>
                <ButtonsMe class="menu-btn"/>
            </div>
            <div>
                <img class="w-8 h-8" src="~assets/twitter.png" alt="Twitter">
            </div>
            <div class="flex items-center">
                <ButtonsSearch class="mx-6"/>
                <ButtonsConfig class="menu-btn"/>
                <ButtonsMessages class="menu-btn"/>
                <ButtonsEdit class="menu-btn"/>
            </div>
        </nav>
    </header>
</template>

<style lang="postcss" scoped>
.menu-btn {
    @apply px-4
}
</style>