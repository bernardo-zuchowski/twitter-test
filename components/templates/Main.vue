<template>
  <div>
    <TheHeader/>
    <div class="max-w-screen-xl flex gap-12 m-8 justify-center">
      <div class="shadow-md flex-inline w-1/3 h-full rounded-xl">
        <img class="object-cover max-h-36 w-full rounded-t-xl" src="https://www.teclasap.com.br/wp-content/uploads/2008/11/sky-x-heaven.jpg" alt="Users banner">
        <div>
          <div class="flex justify-between mx-4">
            <img class="object-cover -mt-12 w-32 h-32 rounded-xl border-4 border-white border-solid" src="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" alt="User">
            <div class="mt-4 mx-auto leading-6">
              <div>John Roe</div>
              <div>@johnroe</div>
            </div>
          </div>
          <div class="divide-y">
            <div class="flex justify-around m-4">
              <div class="text-center">
                <div>Tweets</div>
                <div>89</div>
              </div>
              <div class="text-center">
                <div>Following</div>
                <div>189</div>
              </div>
              <div class="text-center">
                <div>Followers</div>
                <div>89</div>
              </div>
            </div>
            <div class="m-4">
              <input
              class="mt-4 w-full shadow-inner rounded-lg bg-gray-50 py-1 px-2 text-black"
              type="text"
              placeholder="Compose new Tweet"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full bg-gray-500 rounded-xl">Mundo</div>
      <div class="w-1/3 h-full bg-gray-500 rounded-xl">!</div>
    </div>
  </div>
</template>