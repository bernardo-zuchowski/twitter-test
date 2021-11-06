<template>
    <header class="shadow-lg bg-white border-b  p-4">
        <Sidebar v-if="toggle" class="md-min:hidden"/>
        <nav class="flex justify-between items-center">
            <button @click="toggle = !toggle" class="md-min:hidden">
                <SolidMenuIcon class="ml-2 w-6 h-6"/>
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