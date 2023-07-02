<template>
    <van-swipe class="my-swipe pt-[3vw]" :autoplay="3000" indicator-color="white ">
        <van-swipe-item v-for="item in banners" class="w-[100%] rounded-[3vw] overflow-hidden ">
            <img :src="item.pic" alt="" class="w-[100%] h-[100%]" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import axios from 'axios';
export default {
    name: 'lunbo',
    data() {
        return {
            banners: [],
        };
    },
    async created() {
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'

            )
            .then((res) => {
                // console.log(res);
                this.banners = res.data.data.blocks[0].extInfo.banners;
            })
            .then((cat) => this.fetchPlaylists(cat))
            .catch((err) => {
                console.log(err);
            });


    },

};

</script>