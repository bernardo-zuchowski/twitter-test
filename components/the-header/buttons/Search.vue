<template>
    <form class="flex items-center relative shadow-inner rounded-full bg-gray-100" action="" method="get">
        <input
        class="pl-8 py-1 text-black bg-transparent rounded-full"
        type="text"
        >
        <button
        class="absolute ml-2 w-5 h-5 lg-max:w-4 lg-max:h-4"
        disabled
        >
            <SolidSearchIcon/>
        </button>
    </form>
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