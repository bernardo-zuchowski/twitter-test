<template>
	<div class="bg-gray-50">
		<TheHeader/>
		<div class="max-w-7xl flex gap-12 px-8 pb-8 justify-center mx-auto">
			<div class="lg-min:w-2/7 h-full lg-max:hidden">
				<UsersProfile/>
				<Trends/>
			</div>
			<div class="lg-min:w-3/7 lg-max:w-9/12 sm-max:w-full h-full">
				<NewTweet class="shadow-md px-4 pb-4 pt-1 rounded-b-3xl mb-8 lg-min:hidden"/>
				<Tweets/>
			</div>
			<div class="lg-min:w-2/7 lg-max:w-64 h-full sm-max:hidden">
				<WhoToFollow class="mb-8"/>
				<Trends class="lg-min:hidden"/>
				<Disclaimer/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
