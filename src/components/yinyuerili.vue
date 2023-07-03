<template>
    <div cl>
        <div class="flex items-center justify-between">
            <h2 class="text-1xl flex dark:text-[#fff] items-center pt-[4vw] pl-6 font-bold">音乐日历<span>
                    <Icon icon="ic:baseline-greater-than" />
                </span></h2>
            <span class="text-xl pt-2 mr-5" @click="show = !show">
                <Icon icon="ri:more-2-fill" />
            </span>
        </div>

        <ul class="bg-[#fff] rounded-[2vw] dark:bg-[#26262E] w-[90%] dark:text-[#fff] mx-auto mt-4">
            <li class="flex items-center justify-around" v-for="item in rili" :key="item.id">
                <div class="w-[60vw]">
                    <p>{{ dayjs(onlineTime).format('MM/DD') }}</p>
                    <p class="text-[3vw] font-bold">{{ item.title }}</p>
                </div>
                <img :src="item.imgUrl" alt="" class="w-[16vw] h-[16vw] rounded-[2vw]" />
            </li>
        </ul>
        <van-popup v-model="show" closeable round position="bottom" :style="{ height: '40%' }">
            <p class="pt-[3vw] pl-3 text-[#B3B8BF]">音乐日历</p>
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
            rili: [],
            show: false
        };
    },
    components: {
    },
    // Menu,
    async created() {
        axios
            .get(
                'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
            )
            .then((res) => {
                this.rili = res.data.data.calendarEvents;
                // console.log(this.personalized);
            })
            .catch((err) => {
                console.log(err);
            });
    },

};
</script>