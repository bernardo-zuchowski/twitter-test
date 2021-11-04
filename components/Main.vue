<template>
  <div>
    <TheHeader/>
    <div class="max-w-screen-xl flex gap-12 m-8 justify-center mx-auto">
      <div class="flex-inline w-2/7 h-full">
        <UsersProfile class="mb-8"/>
        <Trends/>
      </div>
      <Tweets/>
      <div class="flex-inline w-2/7 h-full">
        <WhoToFollow class="mb-8"/>
        <Disclaimer/>
      </div>
    </div>
  </div>
</template>