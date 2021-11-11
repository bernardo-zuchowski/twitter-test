<template>
<<<<<<< Updated upstream
    <div class="shadow-md rounded-xl">
        <img class="object-cover max-h-36 w-full rounded-t-xl" src="https://www.teclasap.com.br/wp-content/uploads/2008/11/sky-x-heaven.jpg" alt="Users banner">
        <div class="divide-y">
            <div class="flex flex-wrap justify-between px-4">
                <img class="object-cover mx-auto -mt-12 w-32 h-32 rounded-xl border-4 border-white border-solid" src="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" alt="User">
=======
    <div class="shadow-md rounded-b-3xl">
        <img class="object-cover max-h-36 w-full"
        :src="user.banner"
        alt="Users banner">
        <div class="divide-y">
            <div class="flex flex-wrap justify-between px-4">
                <img class="object-cover mx-auto -mt-12 w-32 h-32 rounded-full border-8 border-white border-solid"
                :src="user.avatar"
                alt="Your photo">
>>>>>>> Stashed changes
                <div class="mt-4 text-center mx-auto px-4">
                    <h3>{{user.name}}</h3>
                    <h3>{{user.username}}</h3>
                </div>
            </div>
            <div class="m-4 pt-4 xl-min:grid xl-min:grid-cols-3">
                <div class="xl-max:flex xl-max:justify-center text-center my-1">
                    <div class="px-1">Tweets</div>
                    <div class="px-1">89</div>
                </div>
                <div class="xl-max:flex xl-max:justify-center text-center my-1">
                    <div class="px-1">Following</div>
                    <div class="px-1">189</div>
                </div>
                <div class="xl-max:flex xl-max:justify-center text-center my-1">
                    <div class="px-1">Followers</div>
                    <div class="px-1">89</div>
                </div>
            </div>
            <NewTweetForm class="m-4 pb-4"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: []
        }
    },
    mounted() {
        fetch('api/users/1')
        .then(res => res.json())
        .then(({ user }) => {
            this.user = user
        })
    }    
}
</script>