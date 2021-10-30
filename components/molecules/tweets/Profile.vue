<template>
    <div class="flex-inline divide-y">
        <div v-for="user in users" :key="`user-${user.id}`" class="py-2">
            <div class="flex">
                <div class="pr-1 flex-none">
                    <img
                    class="object-cover w-24 h-24 rounded-xl border-4 border-white border-solid"
                    :src="user.image"
                    :alt="user.name"
                    />
                </div>
                <div class="w-full pl-1">
                    <div class="grid grid-cols-2 gap-2 text-left">
                        <h3>{{user.name}}</h3>
                        <div>@{{user.username}}</div>
                    </div>
                    <div class="text-justify pt-2">
                        {{user.content}}
                    </div>
                </div>
            </div>
            <TweetsInteractions/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
        };
    },

    mounted() {
        fetch("api/users")
        .then(res => res.json())
        .then(({ users }) => {
            this.users = users;
        });
    },
}
</script>