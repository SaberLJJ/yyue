<template>
    <div class=" dark:text-[#fff]">
        <div class="flex items-center justify-between">
            <h2 class="text-1xl flex items-center pt-[4vw] pl-6 font-bold">推荐歌单<span>
                    <Icon icon="ic:baseline-greater-than" />
                </span></h2>
            <span class="text-2xl pt-2" @click="show = !show">
                <Icon icon="ri:more-2-fill" />
            </span>
        </div>

        <div class="pl-6 pt-[1vw] w-screen flex overflow-auto menu h-[40vw]">
            <gundong></gundong>
            <ul class="flex justify-between pl-[5vw]  menu relative w-[270vw]">
                <li class="w-[30vw] h-[35vw] pl-[3vw] relative" v-for="item in personalized">
                    <div class="w-[100%] h-[80%] overflow-hidden rounded-lg">
                        <img :src="item.picUrl" alt="" class="w-[100%] h-[100%]">
                    </div>
                    <p class="text-[1vw]">{{ item.name }}</p>
                    <p class="absolute text-[#fff] font-bold text-[1vw] flex items-center right-1 top-1">
                        <span class="text-[5vw]">
                            <Icon icon="ph:play-bold" />
                        </span>
                        <span class="pl-2">{{ Math.floor(item.playCount / 10000) }}万</span>
                    </p>
                    <p class="absolute text-white top-[21vw] right-2 text-[5vw]">
                        <Icon icon="ph:play-bold" />
                    </p>
                </li>
            </ul>
        </div>




        <van-popup v-model="show" closeable round position="bottom" :style="{ height: '40%' }">
            <p class="pt-[3vw] pl-3 text-[#B3B8BF]">推荐歌单</p>
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
    // name: 'gedan',
    data() {
        return {
            personalized: [],
            show: false
        };
    },
    components: {
        gundong: () => import('./lun.vue'),
    },



    // Menu,
    async created() {
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6'
            )
            .then((res) => {
                this.personalized = res.data.result;
                // console.log(this.personalized);
            })
            .catch((err) => {
                console.log(err);
            });
    },

};
</script>
