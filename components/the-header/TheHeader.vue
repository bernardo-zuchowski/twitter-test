<template>
    <header class="shadow-lg bg-white border-b p-4">
        <Sidebar v-if="toggle" class="md-min:hidden"/>
        <nav class="max-w-7xl mx-auto flex justify-between items-center">
            <button @click="toggle = !toggle" class="md-min:hidden">
                <SolidXIcon v-if="toggle" class="ml-1 w-8 h-8 shadow-md hover:shadow-inner bg-gray-50 rounded-full"/>
                <SolidMenuIcon v-else class="ml-1 w-8 h-8"/>
            </button>
            <ButtonsUpperLeft/>
            <div>
                <img class="w-8 h-8" src="~assets/twitter.png" alt="Twitter">
            </div>
            <ButtonsUpperRight/>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    }
  }
}
</script>