<template>
    <div class="w-screen bg-[#F8F9FB] overflow-hidden" :class="[userSearchKeywords != '' ? 'h-screen' : '']">
        <div :class="['w-[100vw]', 'flex', 'items-center', 'justify-between', 'p-[1.5vw]']"
            class="dark:bg-[#1b1b23] mb-[4.5vw]">
            <Icon icon="ph:arrow-left-light" color="#35363a" width="36" height="36" class="w-[8vw] h-[8vw] 'mr-[1.5vw]'"
                @click.native="$router.push('./home')" />
            <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                class="w-[5vw] h-[5vw] mr-[-15vw] mt-[.5vw] z-[1]" />
            <input type="text" v-model="userSearchKeywords" :placeholder="SearchDefault.showKeyword" :class="['w-[75vw]', 'dark:bg-[#3b343b]', 'h-[8vw]', 'rounded-[5vw]', 'bg-[#fff]', 'outline-none', 'border border-solid', 'mr-[-1.5vw]', 'border-gray-400', 'px-[10vw]', 'text-[2.5vw]']
                ">
            <span class="text-[3vw] mr-[3vw] text-[#37383c] dark:text-[#fff]">搜索</span>
        </div>
        <div v-if="userSearchKeywords == ''">
            <div
                class="flex items-center px-[6.2vw] justify-between text-[#32342f] text-[2.75vw] font-bold dark:text-[#fff]">
                <div class="flex items-center">
                    <Icon icon="majesticons:user" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>歌手</span>
                </div>
                <span class="h-[3.5vw] border-[.15vw] border-[#e4e5e9]"></span>
                <div class="flex items-center">
                    <Icon icon="ri:netease-cloud-music-fill" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>曲风</span>
                </div>
                <span class="h-[3.5vw] border-[.15vw] border-[#e4e5e9]"></span>
                <div class="flex items-center">
                    <Icon icon="fluent:music-note-1-24-filled" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>专区</span>
                </div>
                <span class="h-[3.5vw] border-[.15vw] border-[#e4e5e9]"></span>
                <div class="flex items-center">
                    <Icon icon="mdi:microphone" color="#ff3938" class="w-[4vw] h-[4vw] mr-[1vw]" />
                    <span>识曲</span>
                </div>
            </div>
            <div v-if="historyRecord.length != 0" class="mt-[4.5vw] px-[3vw] ">
                <div class="flex items-center text-[2.75vw] text-[#595963] justify-between">
                    <span class="text-[#283140] font-bold">搜索历史</span>
                    <Icon icon="fluent-mdl2:delete" color="#aeafb3" class="w-[3vw] h-[3vw]" />
                </div>
            </div>
            <div class="mt-[4.5vw] px-[3vw] ">
                <div class="flex items-center text-[2.75vw] text-[#595963] justify-between ">
                    <span class="text-[#283140] font-bold">猜你喜欢</span>
                    <Icon icon="clarity:refresh-line" color="#aeafb3" class="w-[3vw] h-[3vw]" />
                </div>
            </div>

            <div class="mt-[4.5vw] w-[100vw] p-[1.5vw]">
                <van-swipe v-if="width != 0" :width="width" :show-indicators="false" :loop="false">
                    <van-swipe-item class="flex flex-col w-[50vw] rounded-[3vw] mt-[4vw] mr-[4vw] bg-[#fff]"
                        v-for="item in pNodes" :key="item.id">
                        <h1 class="w-[56vw] m-auto p-[2vw] text-[3vw]">

                            {{ item.name }}
                        </h1>
                        <hr class="w-[90%] ml-[3vw]">
                        <div class="mt-[3vw]">
                            <div v-for="(items, indexs) in item.tracks.slice(0, 20)" :key="items.id"
                                class="flex text-[2vw] h-[7vw]">
                                <span v-if="indexs + 1 <= 3" class="text-[red] ml-[6vw]">{{
                                    indexs + 1
                                }}</span>
                                <span v-if="indexs + 1 > 3" class="text-[#abadb4] ml-[6vw]">{{
                                    indexs + 1
                                }}</span>
                                <p class="ml-[2vw] w-[54vw]  truncate">{{ items.name }}</p>
                            </div>
                        </div>


                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div v-else>
            <div class=" p-[3vw]" v-for="item in keywords" :key="item.id">
                <ul>
                    <li class="flex   items-center">
                        <Icon icon="iconamoon:search-light" color="#ccc" width="36" height="36"
                            class="w-[4vw] h-[4vw] z-[1]" />
                        <p class="text-[2vw]">{{ item.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { fetchDetail, fetchSearchSuggest, fetchPlaylists, fetchSearchDefault } from '@/request/index'
import debounce from 'lodash/debounce';
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import axios from 'axios';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    data() {
        return {
            detail: [],
            historyRecord: [],
            userSearchKeywords: '',
            keywords: [],
            playlists: [],
            SearchDefault: [],
            loaded: false,
            current: 0,
            width: 0,
            pNodes: [],
        }
    },
    async created() {
        let res = await fetchDetail().catch((err) => console.log(err));
        this.detail = res.data.data;
        console.log(this.detail);


        const Default = await fetchSearchDefault().catch((err) => console.log(err));
        this.SearchDefault = Default.data.data;
        let that = this
        that.width = window.innerWidth * 0.62
        window.addEventListener('resize', function () {
            that.width = window.innerWidth * 0.62
        })

        const res1 = await axios.get(
            'https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail'
        );
        const playlist = await Promise.all(
            res1.data.list.map(({ id }) =>
                axios.get(
                    'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail',
                    { params: { id } }
                )
            )
        );
        this.pNodes = playlist.map((item) => item.data.playlist).slice(0, 11);
    },

    watch: {
        activeMenuItem: {
            async handler(newCat) {
                const res = await fetchPlaylists(newCat)
                this.playlists = res.data.playlists;
                console.log(this.playlists);
            },
        },
        userSearchKeywords: debounce(async function (keywords) {
            if (this.userSearchKeywords != '') {
                const res = await fetchSearchSuggest(keywords);
                this.keywords = res.data.result.songs;
                console.log(this.keywords);
            }

        }, 300),
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
}
</script>
<style></style>