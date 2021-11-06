<template>
  <div>
    <TheHeader/>
    <div class="max-w-full flex gap-12 p-8 justify-center mx-auto">
      <div class="flex-inline w-2/7 h-full">
        <UsersProfile class="mb-8"/>
        <Trends/>
      </div>
      <Tweets class="w-3/7 h-full"/>
      <div class="flex-inline w-2/7 h-full">
        <WhoToFollow class="mb-8"/>
        <Disclaimer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ['toogle']
}
</script>