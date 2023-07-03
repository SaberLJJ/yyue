<template>
    <div class="w-[100%] h-[5vw] text-[3vw] flex space-between items-center justify-evenly dark:bg-[#111827] ">
        <span class="text-[4vw] relative text-blue-gray-500" @click="show = !show">
            <Icon icon="iconoir:menu-scale" />
        </span>
        <span class="text-[4vw] absolute left-[25%]">
            <Icon icon="grommet-icons:form-search" />
        </span>
        <input type="text"
            class="h-[80%] text-[2vw] w-[70%] rounded-full suojin bg-gradient-to-r from-purple-100 to-pink-100 dark:bg-gray-800 "
            :placeholder="tishi.showKeyword" :v-model="suokey" @click="tiao">
        <span class="text-[4vw] text-blue-gray-500">
            <Icon icon="solar:microphone-bold" />
        </span>
        <van-popup v-model="show" position="left" :style="{ width: '80%', height: '100%', background: '#F3F6F5' }"
            class="dark:bg-[#000] dark:text-slate-500 ">
            <div class=" bg-slate-100 dark:bg-gray-900 text-[black] dark:text-slate-500">
                <div class="flex items-center justify-between pt-3">
                    <p class="text-[4vw] flex items-center">
                        <Icon icon="mingcute:user-4-fill" color="pink" />
                        <span class="text-[2vw]">云村村民</span>
                    </p>
                    <p class="pr-[3vw]">
                        <Icon icon="teenyicons:scan-solid" />
                    </p>
                </div>

                <div class="w-[90%] ml-[2vw] mt-[2vw] rounded-[3vw] h-[20vw] bg-gradient-to-r from-gray-600 to-gray-400">
                    <div class="w-[100%]  flex items-center justify-between">
                        <p class="w-[54%] text-[2vw]">
                            <span class="text-[3vw] pl-[3vw] text-[#E7D2D1] font-bold">开通黑胶VIP</span> <br>
                            <span class="text-[#E7D2D1] text-[3vw] pl-[3vw] pt-2">立即超21项专属特权</span>
                        </p>

                        <div
                            class="w-[15vw] flex items-center justify-center h-[5vw] rounded-[3vw] mr-[2vw] border border-gray-300">
                            <p class="text-[3vw]">会员中心</p>
                        </div>
                    </div>

                    <hr class="mt-[3vw] w-[90%] ml-[3vw]">

                    <div class="w-[100%]">
                        <p class="text-[#ccc] text-[3vw] pt-3 pl-3">专享优惠!黑胶VIP仅￥0.1/天</p>

                    </div>
                </div>

                <div class="mt-[3vw]">
                    <van-cell-group inset>
                        <div class="dark:bg-[#2C2C2C] dark:text-[#fff]">
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="mdi:envelope-outline" />
                                    <span class="ml-4">我的消息</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="icon-park:lamp" />
                                    <span class="ml-4">云贝中心</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="raphael:lamp-alt" />
                                    <span class="ml-4">创作者中心</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                        </div>
                    </van-cell-group>
                </div>

                <div class="mt-[3vw]">
                    <van-cell-group inset>
                        <div class="dark:bg-[#2C2C2C] dark:text-[#fff]">
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="material-symbols:hexagon-outline" />
                                    <span class="ml-4">趣测</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="ic:round-how-to-vote" />
                                    <span class="ml-4">云村有票</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="tabler:cube" />
                                    <span class="ml-4">多多西西口袋</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="mdi:shopping-outline" />
                                    <span class="ml-4">商城</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="raphael:lamp-alt" />
                                    <span class="ml-4">Beat专区</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="mdi:bell-outline" />
                                    <span class="ml-4">口袋彩铃</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="openmoji:video-game" />
                                    <span class="ml-4">游戏专区</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                        </div>
                    </van-cell-group>
                </div>


                <div class="mt-[3vw]">
                    <van-cell-group inset>
                        <div class="dark:bg-[#2C2C2C] dark:text-[#fff]">
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="ep:set-up" />
                                    <span class="ml-4">设置</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="ph:moon" />
                                    <span class="ml-4">深色模式</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <!-- <huanse :value="switchCheckStatus" @input="e => switchCheckStatus = e"></huanse> -->
                                    <van-switch v-model="checked" @click="fn" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="tabler:cube" />
                                    <span class="ml-4">定时关闭</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top" />
                                    <span class="ml-4">个性装扮</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="raphael:lamp-alt" />
                                    <span class="ml-4">边听边存</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="mdi:bell-outline" />
                                    <span class="ml-4">在线听歌免流量</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="ph:prohibit" />
                                    <span class="ml-4">音乐黑名单</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="icon-park-outline:protect" />
                                    <span class="ml-4">青少年模式</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="gala:clock" />
                                    <span class="ml-4">音乐闹钟</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                        </div>
                    </van-cell-group>
                </div>

                <div class="mt-[3vw]">
                    <van-cell-group inset>
                        <div class="dark:bg-[#2C2C2C] dark:text-[#fff] text-[3vw]">
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="material-symbols:hexagon-outline" />
                                    <span class="ml-4">我的订单</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="ic:round-how-to-vote" />
                                    <span class="ml-4">优惠券</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="tabler:cube" />
                                    <span class="ml-4">我的客服</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="mdi:shopping-outline" />
                                    <span class="ml-4">分享网易云音乐</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="raphael:lamp-alt" />
                                    <span class="ml-4">个人信息收集</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="mdi:bell-outline" />
                                    <span class="ml-4">个人信息第三方</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="openmoji:video-game" />
                                    <span class="ml-4">个人隐私保护</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                            <div class="flex h-[8vw] items-center justify-between">
                                <span class="flex items-center pl-[3vw]">
                                    <Icon icon="ph:warning-octagon-thin" />
                                    <span class="ml-4">关于</span>
                                </span>
                                <span class="pr-[3vw]">
                                    <Icon icon="ic:baseline-greater-than" />
                                </span>
                            </div>
                        </div>
                    </van-cell-group>
                </div>

                <div class="mt-[3vw]">
                    <van-cell-group inset>
                        <div class="flex h-[8vw] items-center justify-around text-[red] dark:bg-[#2C2C2C] dark:text-[#fff]">
                            退出登录/关闭
                        </div>
                    </van-cell-group>
                </div>
            </div>

        </van-popup>
    </div>
</template>

<script>
import { fetchSearchDefault, fetchSearchResult } from '../request/index'
export default {
    name: 'search',
    data() {
        return {
            tishi: [],
            suokey: '',
            show: false,
            checked: false,
        };

    },
    components: {
        // huanse: () => import('./components/switch.vue'),
    },

    async created() {

        // 搜索部分
        const ress = await fetchSearchDefault().catch((err) => console.log(err));
        this.tishi = ress.data.data;
        console.log(this.tishi);


    },
    methods: {
        fn() {
            this.checked = !this.checked;
            this.$emit('update:checkeds', this.checked)
        },

        tiao() {
            this.$router.push('/suosou')
        }
    },

};

</script>

<style></style>
