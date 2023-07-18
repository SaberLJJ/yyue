<template>
    <div class="w-screen">
        <router-link :to="{ path: '/home' }"></router-link>
        <router-view />
        <!-- 播放器 -->
        <Player v-if="showPlayer" class="fixed bottom-0 bg-[#fff] z-[30]" />
    </div>
</template>
<script>
import Player from '@/components/Player/player.vue';
export default {
    components: { Player },
    computed: {
        showPlayer() {
            // 在这里根据你的逻辑判断是否在当前页面显示播放器组件
            return this.$route.path !== '/MusicPlayerView';
        },
    },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
