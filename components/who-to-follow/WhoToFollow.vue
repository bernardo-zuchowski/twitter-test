<template>
    <div class="shadow-md flex-inline rounded-xl divide-y p-4">
        <h1>Who to follow</h1>
        <div>
            <ul>
                <li>
                    <div v-for="follow in follows" :key="`${follow.id}`" class="mr-2 flex-none flex justify-between my-4 items-center">
                        <img :src='follow.avatar' class="object-cover w-24 h-24 rounded-xl border-4 border-white border-solid">
                            <div class="mx-auto text-center">
                                <h3>{{follow.name}}</h3>
                                <div>@{{follow.username}}</div>
                                <button class="m-2 shadow rounded-lg bg-gray-100 py-0.5 px-2 hover:shadow-inner">Follow</button>
                            </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			follows: [],
		};
	},

	mounted() {
		fetch('api/follows')
			.then(res => res.json())
			.then(({ follows }) => {
				this.follows = follows;
			});
	},
};
</script>