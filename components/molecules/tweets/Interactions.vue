<template>
    <div class="flex justify-between text-xs pt-4">
        <div>
            <div>Expand</div>
        </div>
        <div class="flex">
            <button class="px-2 flex">
                <SolidReplyIcon class="w-4 h-4 mx-1"/>
                <div>Reply</div>
            </button>
            <button class="px-2 flex">
                <SolidRefreshIcon class="w-4 h-4 mx-1"/>
                <div>Retweet</div>
            </button>
            <button
            class="px-2 flex"
            :class="{'text-yellow-600':isActive}"
            @click="isActive = !isActive"
            >
                <SolidStarIcon class="w-4 h-4 mx-1"/>
                <div>Favorite</div>
            </button>
            <button class="px-2 flex">
                <SolidDotsHorizontalIcon class="w-4 h-4 mx-1"/>
                <div>More</div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
  },
}
</script>