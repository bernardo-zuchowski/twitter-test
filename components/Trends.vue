<template>
    <div class="shadow-md rounded-b-3xl lg-max:-mt-14 lg-min:-mt-10 px-4 pb-2 pt-10 text-left divide-y ">
        <h1>Trends</h1>
        <ul class="text-md pt-4 divide-y leading-10">
            <a v-for="trend in trends" :key="`${trend.id}`" href="#" class="flex">
                <SolidHashtagIcon class="w-4"/>
                <div>{{trend.word}}</div>
            </a>
        </ul>
    </div>
</template>

<style lang="postcss" scoped>
    a {
        @apply hover:underline
    }
</style>

<script>
export default {
	data() {
		return {
			trends: [],
		};
	},

	mounted() {
		fetch('api/trends')
			.then(res => res.json())
			.then(({ trends }) => {
				this.trends = trends;
			});
	},
};
</script>