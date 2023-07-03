<template>
    <div class="w-[90%] ml-[5vw] dark:text-[#fff]">
        <div class="flex items-center justify-between">
            <h2 class="text-1xl flex items-center pt-[4vw]  font-bold">热门话题<span>
                    <Icon icon="ic:baseline-greater-than" />
                </span></h2>
            <span class="text-xl pt-2" @click="show = !show">
                <Icon icon="ri:more-2-fill" />
            </span>
        </div>
        <van-swipe class="my-swipe pt-4" indicator-color="white">
            <van-swipe-item>
                <ul class="overflow-hidden swiper-container5 h-[100%]  bg-white " style="border-radius: 20px">
                    <div class="p-[20px] swiper-wrapper bg-white dark:bg-[#25252D]">
                        <div class="swiper-slide flex">
                            <div class="w-[70%] ">
                                <p class="text-1xl font-bold">最令你感动的那首情歌</p>
                                <p>484万热度</p>
                                <p>Saint_Denis:今日份的感动我 <br> 希望我们两个之间的爱</p>
                            </div>
                            <div class="w-[20%]">
                                <img src="http://p1.music.126.net/NkJsOwDqLc2jeHIlCZlluQ==/109951168412701433.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </ul>
            </van-swipe-item>
            <van-swipe-item>
                <ul class="overflow-hidden swiper-container5 h-[100%] bg-white" style="border-radius: 20px">
                    <div class="p-[20px] swiper-wrapper bg-white">
                        <div class="swiper-slide flex">
                            <div class="w-[70%]">
                                <p class="text-1xl font-bold">今天心情真不错</p>
                                <p>484万热度</p>
                                <p>Saint_Denis:今日份的感动我 <br> 希望我们两个之间的爱</p>
                            </div>
                            <div class="w-[20%]">
                                <img src="http://p1.music.126.net/hNSXFfR-Tgz-cjRxx6QxVQ==/109951168686870876.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </ul>
            </van-swipe-item>
        </van-swipe>
        <van-popup v-model="show" closeable round position="bottom" :style="{ height: '40%' }">
            <p class="pt-[3vw] pl-3 text-[#B3B8BF]">热门话题</p>
            <hr class="mt-[3vw]">
            <div class="flex items-center pt-[3vw] pl-3 text-[#888B97] text-2xl"><span class="pr-[4vw]">
                    <Icon icon="uiw:like-o" />
                </span>优先推荐
            </div>
            <div class="flex items-center pt-[3vw] pl-3 text-[#888B97] text-2xl"><span class="pr-[4vw]">
                    <Icon icon="icon-park-outline:unlike" />
                </span>减少推荐
            </div>
            <div class="flex items-center pt-[3vw] pl-3 text-[#888B97] text-2xl"><span class="pr-[4vw]">
                    <Icon icon="mingcute:more-4-line" />
                </span>更多类容
            </div>
        </van-popup>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            show: false
        };
    },
    components: {
    },

};
</script>