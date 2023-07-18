<template>
    <div class="w-[100vw]" :class="{ dark: darkNode }">
        <div class=" bg-slate-100 dark:bg-gray-900 text-[black] dark:text-slate-500">
            <!-- 搜索框 -->
            <search :checkeds.sync="darkNode"></search>

            <!-- 轮播图 -->
            <lunbotu></lunbotu>

            <!-- 菜单 -->
            <caidan></caidan>

            <!-- 推荐歌单 -->
            <gedantuijian></gedantuijian>

            <!-- 新歌新碟 -->
            <xingexindie></xingexindie>

            <!-- 排行榜 -->
            <paihangbang></paihangbang>

            <!-- 音乐日历 -->
            <yingyuetili></yingyuetili>

            <!-- 热门话题 -->
            <remhuati></remhuati>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

import { featchSearchDefault, fetchSearchResult } from '../request/index'

export default {
    data() {
        return { switchCheckStatus: false, darkNode: false };

    },
    components: {
        search: () => import('../components/search.vue'),
        lunbotu: () => import('../components/RotationChart.vue'),
        caidan: () => import('../components/Menu.vue'),
        gedantuijian: () => import('../components/GeDantui.vue'),
        xingexindie: () => import('../components/xingexindie.vue'),
        paihangbang: () => import('../components/paihangbang.vue'),
        yingyuetili: () => import('../components/yinyuerili.vue'),
        remhuati: () => import('../components/remenhuati.vue'),
    },
    methods: {
        toggleMenu(name) {
            this.activeMenuItem = name;
            this.fetchPlaylists(name);
        },
        fetchPlaylists(cat) {
            axios
                .get(
                    'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page',
                    {
                        params: {
                            cat: cat,
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data);
                    this.playlists = res.data.playlists;
                });
        },
    },
    async created() { },
};

</script>

<style>
.suojin {
    text-indent: 10em;
}

.hua {
    overflow: auto;
}

.menu::-webkit-scrollbar {
    height: 0px;
    width: 20px;
}



.hua>li {
    width: 20vw;
    height: 12vw;
    /* float: left; */


}

body {
    background-color: #F8F9FD;
}
</style>