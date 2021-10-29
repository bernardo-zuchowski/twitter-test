<template>
    <div id="users" class="flex divide-x">
        <div v-for="user in users" :key="`user-${user.id}`" class="pr-2 flex-none flex-inline">
            <img class="object-cover w-24 h-24 rounded-xl border-4 border-white border-solid" :src="user.image" :alt="user.name">
            <div class="text-center">
                <h3>{{user.name}}</h3>
                <div>{{user.name}}</div>
            </div>
        </div>
        <div class="text-justify pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at illo alias rerum quis magnam unde corporis. Facilis reprehenderit quasi sint totam dolore quae, possimus iste, voluptate natus enim non!
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: [],
            message: [],
        };
    },

    created() {
        fetch("api/users")
            .then((res) => res.json)
            .then((json) => {
                this.user = json.user;
            })
    },
}
</script>