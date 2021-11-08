<template>
    <div class="shadow-md rounded-b-3xl divide-y px-4 pt-4 pb-2">
        <h1>Who to follow</h1>
        <ul class="pt-4 divide-y">
            <li v-for="follow in follows" :key="`${follow.id}`" class="py-2 lg-min:items-center lg-min:flex lg-min:justify-between">
                <img :src='follow.avatar' class="lg-min:mr-2 lg-min:flex-none lg-max:m-auto lg-max:mt-2 xl-min:w-20 xl-max:w-16 rounded-xl object-cover">
                <div class="mx-auto text-center text-sm lg-max:pt-2">
                    <div>{{follow.name}}</div>
                    <div>@{{follow.username}}</div>
                    <button class="m-2 shadow rounded-lg bg-gray-100 py-0.5 px-2 hover:shadow-inner">Follow</button>
                </div>
            </li>
        </ul>
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