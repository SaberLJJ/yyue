<template>
    <div class="w-[100%] h-screen overflow-hidden flex flex-col">
        <div class="flex justify-between items-center fixed top-0 w-[100vw] h-[11vw] bg-[#4B7E91] z-10">
            <div class="flex ml-4">
                <span class="text-[5vw] cursor-pointer" @click="$router.push('/home')">
                    <Icon icon="ic:round-arrow-back" color="white" />
                </span>
                <span class="text-[3.5vw] text-white ml-4">歌单</span>
            </div>
            <div class="flex pr-4 text-[5vw]">
                <Icon icon="ic:sharp-search" color="white" />
                <span class="ml-4">
                    <Icon icon="mingcute:more-2-fill" color="white" />
                </span>
            </div>
        </div>

        <div class="flex-auto relative overflow-auto">
            <div class="flex justify-between items-center fixed top-0 w-[100vw] h-[11vw] bg-[#4B7E91] z-10">
                <div class="flex ml-4">
                    <span class="text-[5vw] cursor-pointer" @click="$router.push('/UserDetails')">
                        <Icon icon="ic:round-arrow-back" color="white" />
                    </span>
                    <p class=" text-[#fbfbf5] font-[700] line-clamp-2 w-[60vw]">
                        <van-notice-bar scrollable :text="songList.name" color="#fff" background="#4B7E91" />
                    </p>
                </div>
                <div class="flex pr-4 text-[5vw]">
                    <Icon icon="ic:sharp-search" color="white" />
                    <span class="ml-4">
                        <Icon icon="mingcute:more-2-fill" color="white" />
                    </span>
                </div>
            </div>


            <!--初次显示  -->
            <div>
                <div class=" relative flex " v-if=!visible>
                    <div class="w-[100%] mt-[11vw] pb-4 flex  bg-[#4B7E91]">
                        <div class="w-[25vw] h-[25vw] ml-3 bg-white bg-opacity-50  rounded-xl overflow-hidden relative">
                            <img :src="songList.coverImgUrl" alt="" class="w-[100%] h-[100%]">
                            <p class="absolute top-0 right-0 text-[#fff] flex items-center"> <span>
                                    <Icon icon="mdi:play" color="white" />
                                </span> {{ Math.floor(songList.playCount / 10000)
                                }}万</p>
                        </div>
                        <div class="w-[55%] h-[25vw] ml-3">
                            <h1 class="text-[3vw] text-[#fff] font-bold ">{{ songList.name }}</h1>
                            <div class="flex items-center mt-3">
                                <div class="w-[8vw] h-[8vw] rounded-[8vw] overflow-hidden bg-[pink]">
                                    <img v-if="songList.creator" :src="songList.creator.avatarUrl" alt="">
                                </div>
                                <p v-if="songList.creator" class="text-[#fff] text-[3vw] ml-3">{{ songList.creator.nickname
                                }}</p>
                                <div class=" h-[4vw] rounded-lg bg-white bg-opacity-50  ml-3 flex items-center text-[2vw]">
                                    <span class="text-[3vw] pl-1">
                                        <Icon icon="material-symbols:add" color="white" />
                                    </span>
                                    <span class="text-[#fff] pr-2">关注</span>
                                </div>
                            </div>

                            <div class="w-[100%] flex mt-3">
                                <div
                                    class=" h-[4vw] rounded-lg bg-white bg-opacity-50 ml-3 flex items-center text-[2vw] text-[#fff]">
                                    <span class="pl-[1vw]">8.9分</span>
                                    <span class="text-[3vw]">
                                        <Icon icon="ic:baseline-greater-than" color="white" />
                                    </span>
                                </div>
                                <div
                                    class=" h-[4vw] rounded-lg bg-white bg-opacity-50 ml-3 flex items-center text-[2vw] text-[#fff]">
                                    <span class="pl-[1vw]">轻音乐</span>
                                    <span class="text-[3vw]">
                                        <Icon icon="ic:baseline-greater-than" color="white" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div @click="showtop">
                            <Icon icon="line-md:arrow-down" color="white" />
                        </div>

                    </div>

                </div>


                <div v-else class="w-[100%]  mt-[11vw] bg-[#4B7E91] overflow-hidden">
                    <div class="w-[100%] flex justify-between items-center pt-3 text-[#fff]">
                        <p class="text-[3vw] pl-3">喜欢这个歌单的用户也听了</p>
                        <p class="text-[7vw] pr-3">
                            <Icon icon="uil:arrow-up" color="white" @click.native="showdown" />
                        </p>
                    </div>

                    <div class=" pt-[1vw] w-screen flex overflow-auto menu">
                        <ul class="flex justify-between pl-[5vw]  menu relative w-[270vw]">
                            <li class="w-[30vw]  pl-[3vw] relative" v-for="(  item, index  ) in   personalized  "
                                :key="item.id">
                                <div class="w-[100%] h-[80%] overflow-hidden rounded-lg">
                                    <img :src="item.picUrl" alt="" class="w-[100%] h-[100%]" @click="songDetails(index)">
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
                </div>
            </div>


            <div class="w-[100%] flex justify-around pb-4 bg-[#4B7E91] ">
                <div class="w-[28%] h-[9vw] rounded-[10vw] bg-white bg-opacity-50 flex items-center text-[#fff] text-[3vw]">
                    <span class="pl-6 text-[5vw] pr-2">
                        <Icon icon="uil:share" color="white" />
                    </span>
                    <p>{{ songList.shareCount }}</p>
                </div>
                <div class="w-[28%] h-[9vw] rounded-[10vw] bg-white bg-opacity-50 flex items-center text-[#fff] text-[3vw]">
                    <span class="pl-6 text-[5vw] pr-3">
                        <Icon icon="streamline:mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat"
                            color="white" />
                    </span>
                    <p>{{ songList.commentCount }}</p>
                </div>
                <div class="w-[28%] h-[9vw] rounded-[10vw] bg-[#FF2E4B] flex items-center text-[#fff] text-[3vw]">
                    <span class="pl-6 text-[5vw] pr-2">
                        <Icon icon="noto:rescue-workers-helmet" color="white" />
                    </span>
                    {{ (songList.subscribedCount / 10000).toFixed(1) }}万
                </div>
            </div>
            <ul class="w-[100%]">
                <li class="flex items-center pt-3 sticky top-0">
                    <p class="w-[5vw] text-right pl-2 text-[6vw]" @click="playAll">
                        <Icon icon="carbon:play-filled" color="red" />
                    </p>
                    <div class="w-[67%] pl-4">
                        <span>播放全部</span>
                        <span class="text-[4vw]">({{ res1.length }})</span>
                    </div>
                    <div class="flex items-center text-[5vw]">
                        <Icon icon="iconoir:download" />
                        <span class="pl-[9vw]">
                            <Icon icon="fluent:select-all-on-20-regular" />
                        </span>
                    </div>
                </li>
                <li class="w-[100%]  h-[15vw] flex items-center" v-for="(  item, index  ) in   res1  " :key="item.id"
                    @click="playSingle(item.id)">
                    <p class="w-[5vw] text-right">{{ index + 1 }}</p>
                    <div class="w-[70%] h-[100%] pl-3 overflow-hidden whitespace-nowrap">
                        <p class="pt-[3.5vw] text-[3vw] overflow-ellipsis">{{ item.name }}</p>
                        <p class="text-[2vw] overflow-ellipsis">{{ item.al.name }}</p>
                    </div>
                    <p class="w-[15vw] text-[6vw] pl-[3vw  ]">
                        <Icon icon="octicon:play-24" color="#ccc" />
                    </p>
                    <p class="w-[15vw] text-[6vw]">
                        <Icon icon="mingcute:more-4-line" color="#ccc" />
                    </p>
                </li>
            </ul>

        </div>


    </div>
</template>

<script>
import { songDetails, songAll } from '@/request'
import axios from 'axios';
import store from 'storejs'
export default {
    data() {
        return {
            songList: [],
            res1: [],
            personalized: [],
            visible: false
        }
    },
    async created() {
        songDetails(this.$route.query.id).then((res) => {
            console.log(res)
            this.songList = res.data.playlist
        })

        songAll(this.$route.query.id).then((res) => {
            this.res1 = res.data.songs;
            console.log(this.res1);
        }),
            axios
                .get(
                    'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6'
                )
                .then((res) => {
                    this.personalized = res.data.result;
                    console.log(this.personalized);
                })
                .catch((err) => {
                    console.log(err);
                });

    },


    methods: {
        showtop() {
            console.log(111);
            this.visible = !this.visible;
        },
        showdown() {
            console.log(111);
            this.visible = !this.visible;
        },
        playAll() {
            this.$player.replacePlaylist(
                this.res1.map((song) => song.id, '', '', ''),
                store.set('cookie_music', this.res1)
            );
            console.log('$player', window.$player._currentTrack?.al?.picUrl);
        },
        // 播放器 播放单个
        playSingle(id) {
            this.$player.replacePlaylist([id], '', '');
            store.set('cookie_music', this.res1);
            // this.$router.push('/PlayerHome')
        },

    }


}
</script>

<style></style>