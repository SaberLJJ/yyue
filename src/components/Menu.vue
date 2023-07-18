<template>
    <ul class=" p-[1.5vw] overflow-auto flex relative justify-between items-center menu pt-[4vw] ">
        <template v-for="(item, index) in menu">
            <li v-if="true" :key="item.id" class="flex flex-col items-center mr-[5vw]">
                <Icon :icon="icon[index]" color="red" width="36" height="36" class="w-[5vw] h-[5vw]" />
                <p class="text-[#969aa3] dark:text-[#fff] text-[1.5vw] w-[15vw] text-center">{{ item.name }}</p>
            </li>


        </template>
        <p class="absolute top-[5.5vw] left-[7.7vw] text-[2vw] text-[#bb3535]">
            {{ day }}
        </p>

    </ul>
</template>

<script>
import axios from 'axios';
export default {
    name: 'caidan',
    data() {
        return {
            menu: [],
            icon: ["majesticons:calendar-line", "ph:radio-fill", "icon-park-outline:music-menu", "icon-park-solid:ranking-list", "mdi:audio-book", "ic:outline-live-tv", "vaadin:user-heart", "bi:file-earmark-music", "mdi:hammer-sickle", "solar:gamepad-bold"],
            day: '',
        };
    },
    // Menu,
    async created() {
        this.Date();
        // 菜单
        axios
            .get(
                'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
            )
            .then((res) => {
                this.menu = res.data.data
            }).catch((err) => console.log(err));

    },

    methods: {
        Date() {
            let day = new Date();
            this.day = day.getDate();
            console.log(day);
        },
    }


};
</script>