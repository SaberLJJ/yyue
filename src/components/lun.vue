<template>
    <div>

        <ul class="overflow-hidden">
            <div class="w-[32vw] h-[32vw] overflow-hidden relative">
                <transition name="abc">
                    <div v-if="visible" class=" w-[100%] h-[100%] absolute top-0 left-0">
                        <img alt="" src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg"
                            style="border-radius: 10px; height: 90%; width: 100%" />
                        <p class=" text-[1vw] overflow-hidden">
                            那些好听的日漫主题曲
                        </p>
                        <p class="absolute" style="top: 10px; right: 10px; color: white">
                            <Icon icon="ion:infinite" width="20" />
                        </p>
                    </div>
                </transition>
                <transition name="abc">
                    <div v-if="!visible" class=" absolute w-[100%] h-[100%] top-0 left-0">
                        <img alt="" src="http://p2.music.126.net/pCk-zKisrYzpXpUcrK5G5w==/3399689964828104.jpg"
                            style="border-radius: 10px; height: 90%; width: 100%" />
                        <p class=" text-[1vw] overflow-hidden">
                            评论数最多的动漫音乐TOP100
                        </p>
                        <p class="absolute" style="top: 10px; right: 10px; color: white">
                            <Icon icon="ion:infinite" width="20" />
                        </p>
                    </div>
                </transition>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: true,
        }
    },
    name: 'musicMenu',
    props: ["musicMenu"],
    mounted() {
        setInterval(() => {
            this.visible = !this.visible
        }, 3000);
    },

};
</script>

<style scoped>
.abc-enter {
    transform: translateY(100%) scale(.7);
}

.abc-enter-active {
    transition: all ease-in-out 1s;
}

.abc-enter-to {
    transform: translateY(0) scale(1);
}

.abc-leave {
    transform: translateY(0) scale(1);
}

.abc-leave-active {
    transition: all ease-in-out 1s;
}

.abc-leave-to {
    transform: translateY(-100%) scale(.7);
}
</style>
