<template>
    <div class="dark:text-[#fff]">
        <div class="flex items-center justify-between">
            <h2 class="text-1xl flex items-center pt-[4vw] pl-6 font-bold">新歌新碟 \ 数字专辑<span>
                    <Icon icon="ic:baseline-greater-than" />
                </span></h2>
            <span class="text-2xl pt-2 pr-6" @click="show = !show">
                <Icon icon="ri:more-2-fill" />
            </span>
        </div>
        <van-swipe class="my-swipe" :indicator="false" :loop="false" indicator-color="white" :show-indicators="false">
            <van-swipe-item class="flex flex-col pl-6 items-start py-3  border-y " v-for="item in newsongArr" :key="item.id"
                v-if="newsongArr.length != 0">
                <div class="flex my-3 " v-for="item in item.resources" :key="item.id">
                    <img class="w-[15vw] h-[15vw] mr-3 rounded" :src="item.uiElement.image.imageUrl" alt="" />
                    <div class="flex flex-col justify-between">
                        <p class=" text-sm">{{ item.uiElement.mainTitle.title }}</p>
                        <p class=" text-sm text-[3vw] mt-[6vw]">{{ item.uiElement.subTitle.title }}</p>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
        <van-popup v-model="show" closeable round position="bottom" :style="{ height: '40%' }">
            <p class="pt-[3vw] pl-3 text-[#B3B8BF]">新歌新碟 \ 数字专辑</p>
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
            dingzhi: [],
            xingge: [],
            newsongArr: [], //新歌速递数据
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

                this.dingzhi = res.data.data.blocks[5];
                this.newsongArr = res.data.data.blocks[5].creatives;

            })
            .then((cat) => this.fetchPlaylists(cat))
            .catch((err) => {
                console.log(err);
            });
    },

};
</script>