<template>
    <div class=" dark:text-[#fff]">
        <div class="flex items-center justify-between">
            <h2 class="text-1xl flex items-center pt-[4vw] pl-6 font-bold">排行榜<span>
                    <Icon icon="ic:baseline-greater-than" />
                </span></h2>
            <span class="text-xl pt-2 pr-6" @click="show = !show">
                <Icon icon="ri:more-2-fill" />
            </span>
        </div>
        <van-swipe class="my-swipe pl-6" :loop="false" indicator-color="white" :show-indicators="false">
            <van-swipe-item v-for="item in blocks" :key="item.id">
                <div :key="item.id"
                    class="p-[2vw] mr-[10vw] overflow-hidden w-[90vw] m-[2.5vw] ml-0 h-[50vw] bg-white scroll-item dark:bg-[#26262E] rounded-lg"
                    ref="song">
                    <div class="flex justify-between w-[100%]">
                        <h2 class="text-1xl pt-[2vw]  pl-1 font-bold ">{{ item.uiElement.mainTitle.title }}</h2>
                        <p class="text-[3vw] leading-[10vw] text-ellipsis overflow-hidden whitespace-nowrap w-[30vw]">
                            {{ item.uiElement.mainTitle.titleDesc }}
                        </p>
                    </div>
                    <ul class="">
                        <li v-for="(items, indexs) in 3" :key="indexs.id" class="mb-[3vw]">
                            <div class="flex relative w-[100%]">
                                <img :src="item.resources[indexs].resourceExtInfo?.songData.album
                                    .blurPicUrl
                                    " class="w-[10vw]" alt="" />
                                <p class="text-[2vw] w-[10vw] text-center">
                                    {{ indexs + 1 }}
                                </p>
                                <div>
                                    <p
                                        class="text-[3.5vw] font-normal w-[40vw] text-ellipsis overflow-hidden whitespace-nowrap">
                                        {{
                                            item.resources[indexs].resourceExtInfo?.songData.name
                                        }}
                                    </p>
                                    <p class="text-[2.5vw]">
                                        {{
                                            item.resources[indexs].resourceExtInfo?.artists[0].name
                                        }}
                                        <span class="absolute w-[8vw] h-[5vw] right-[3vw] text-[3vw] top-[1vw]" ref="sps"
                                            :style="{ color: 'red' }">{{
                                                item.resources[indexs]?.uiElement.labelText.text
                                            }}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </van-swipe-item>
        </van-swipe>

        <van-popup v-model="show" closeable round position="bottom" :style="{ height: '40%' }">
            <p class="pt-[3vw] pl-3 text-[#B3B8BF]">排行榜</p>
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
            blocks: [],
            show: false
        };
    },
    // Menu,
    async created() {
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
            )
            .then((res) => {
                console.log(res.data.data.blocks[3].creatives);
                this.blocks = res.data.data.blocks[3].creatives;
            })
            .catch((err) => {
                console.log(err);
            });
    },

};
</script>