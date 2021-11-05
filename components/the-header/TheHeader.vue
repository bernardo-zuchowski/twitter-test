<template>
    <header class="shadow-lg bg-white border-b  p-4">
        <nav class="flex justify-between items-center">
            <ButtonsAll class="md-min:hidden md-max:block"/>
            <div class="flex divide-x lg-max:divide-x-0 md-max:hidden">
                <ButtonsHome class="menu-btn"/>
                <ButtonsDiscover class="menu-btn"/>
                <ButtonsNotifications class="menu-btn"/>
                <ButtonsMe class="menu-btn"/>
            </div>
            <div>
                <img class="w-8 h-8" src="~assets/twitter.png" alt="Twitter">
            </div>
            <div class="flex items-center">
                <ButtonsSearch class="mx-6 lg-max:mx-2"/>
                <ButtonsConfig class="menu-btn md-max:hidden"/>
                <ButtonsMessages class="menu-btn md-max:hidden"/>
                <ButtonsEdit class="menu-btn md-max:hidden"/>
            </div>
        </nav>
    </header>
</template>

<style lang="postcss" scoped>
.menu-btn {
    @apply px-4
}
</style>