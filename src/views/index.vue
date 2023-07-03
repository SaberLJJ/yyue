<template>
    <div>
        <h2 class="text-xl font-bold text-center mt-4 mb-4">歌单广场</h2>
        <ul class="flex">
            <li v-for="item in menu" class="mx-4" v-bind:class="{ active: item.name === activeMenuItem }"
                v-on:click="toggleMenu(item.name)">
                {{ item.name }}
            </li>
        </ul>
        <ul class="flex flex-wrap liebiao ">
            <li v-for="item in playlists" class="w-[200px] relative">
                <div class="w-[200px] h-[200px] rounded-2xl overflow-hidden">
                    <img :src="item.coverImgUrl" alt="" class="w-[200px] h-[200px]" />
                </div>
                <p>{{ item.name }}</p>
                <div class="flex bg-gray-800 w-[120px] absolute top-0 right-3 rounded-2xl text-white">
                    <p class="mt-[4px] px-4 pr-2">
                        <Icon icon="ep:setting" />
                    </p>
                    <span>{{ Math.floor(item.playCount / 10000) }}万</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            menu: [],
            playlists: [],
            activeMenuItem: '',
        };
    },
    methods: {
        toggleMenu(name) {
            this.activeMenuItem = name;
            this.fetchPlaylists(name);
        },
        fetchPlaylists(cat) {
            axios
                .get(
                    'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
                    {
                        params: {
                            cat: cat,
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data.playlists);
                    this.playlists = res.data.playlists;
                });
        },
    },
    created() {
        axios
            .get(
                'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
            )
            .then((res) => {
                this.menu = res.data.tags;
                return (this.activeMenuItem = this.menu[0].name);
            })
            .then((cat) => this.fetchPlaylists(cat))
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
<style>
.active {
    color: red;
}

body {
    width: 100vw;
    margin: 0 auto;
}

ul {
    justify-content: space-between;
}

.liebiao>li {
    margin-top: 15px;
    font-size: 2vw;
}
</style>
