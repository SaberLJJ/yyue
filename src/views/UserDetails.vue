<template>
    <div class="w-[100vw] bg-[#F4F4F4]">
        <div class="w-[100%] h-[65vw] " :style="'background: url( ' + PersonalData.backgroundUrl + ')'">
            <div class="w-[90vw] h-[5vw] mx-auto flex justify-between  top-0 left-4">
                <p class="text-[5vw]" @click="$router.push('/home')">
                    <Icon icon="solar:arrow-left-outline" color="white" />
                </p>
                <div class="w-[25vw] h-[5vw] flex items-center justify-around ">
                    <div class="w-[10vw] h-[4vw] bg-[#fff] rounded-full ">
                        <p class="text-[2vw] h-[4vw] flex items-center justify-around text-[#8f8d8d]">
                            照片墙
                        </p>
                    </div>
                    <div class="w-[5vw] h-[4vw] bg-[#fff] rounded-full"></div>
                    <div class="w-[4vw] h-[4vw] bg-[#fff] rounded-full"></div>
                </div>
                <p class="text-[5vw]">
                    <Icon icon="ri:more-2-fill" color="white" />
                </p>
            </div>
        </div>
        <!-- 头像部分 -->
        <div class="w-[90vw] h-[45vw] rounded-3xl bg-[#fff] mx-auto mt-[-6vw] relative">
            <div class="w-[18vw] h-[18vw] rounded-full overflow-hidden absolute top-[-9vw] left-[40%]">
                <img :src=PersonalData.avatarUrl alt="">
            </div>
            <div class="w-[55vw] h-[35vw] absolute top-[10vw] left-[17%]">
                <p class="text-center">{{ PersonalData.nickname }}</p>
                <div class="flex justify-evenly mt-3">
                    <span v-if="ShuZu.profile">{{ ShuZu.profile.follows }}关注</span>
                    <span v-if="ShuZu.profile">{{ ShuZu.profile.followeds }}粉丝</span>
                    <span>Lv.{{ ShuZu.level }}</span>
                </div>

                <div class="flex justify-evenly mt-3">
                    <div class="w-[15vw] h-[5vw] text-[2vw]"
                        style="border: 1px solid #ccc; text-align: center; line-height: 5vw;border-radius: 1vw;">
                        IP:{{ this.sheng.substring(0, 2).match(/[\u4e00-\u9fa5]+/g)[0] }}
                    </div>

                    <div class="w-[20vw] h-[5vw] text-[2vw]"
                        style="border: 1px solid #ccc; text-align: center; line-height: 5vw;border-radius: 1vw;">
                        {{ this.sheng.substring(0, 2).match(/[\u4e00-\u9fa5]+/g)[0] }} {{ this.city.substring(0,
                            2).match(/[\u4e00-\u9fa5]+/g)[0] }}
                    </div>

                    <div class="w-[15vw] h-[5vw] text-[2vw]"
                        style="border: 1px solid #ccc; text-align: center; line-height: 5vw;border-radius: 1vw;">
                        村岭2年
                    </div>
                </div>

                <div class="flex justify-evenly mt-3">
                    <div class="w-[18vw] h-[7vw] text-[3vw]"
                        style="border: 1px solid #ccc; text-align: center; line-height: 7vw; border-radius: 3vw;"
                        @click="$router.push('/XiangQing')">
                        编辑资料
                    </div>

                    <div class="w-[8vw] h-[8vw] text-[5vw]" style="border: 1px solid #ccc; border-radius: 8vw;">
                        <p class="ml-1.5 mt-1.5">
                            <Icon icon="ri:arrow-down-line" color="#ccc" />
                        </p>
                    </div>

                </div>
            </div>
        </div>


        <!-- 主页  动态  博客 -->
        <van-tabs v-model="activeName" class="w-[90%] mx-auto mt-3">
            <van-tab title="主页" name="a">
                <div class="w-[100%] h-[30vw] bg-[#fff] flex justify-around" style=" border-radius: 3vw;">
                    <div class="w-[30%] bg-[#FDF4F4] " style=" border-radius: 3vw;">
                        <h1 class="text-[4vw] pt-4 pl-4">音乐品味</h1>
                        <div class="">
                            <div class="w-[100%] h-[20vw] ">
                                <p class="text-[2vw] pl-3 pt-3">我的喜欢</p>
                                <p class="text-[3vw] pl-3 pt-2">0首</p>
                                <p class="text-[2vw] pl-3 pt-3">喜欢的音乐</p>
                            </div>

                        </div>
                    </div>
                    <div class="w-[30%] bg-[#FDF9EB] " style=" border-radius: 3vw;">
                        <h1 class="text-[4vw] pt-4 pl-4">累计听歌</h1>
                        <div class="">
                            <div class="w-[100%] h-[20vw] ">
                                <p class="text-[2vw] pl-3 pt-3">我的喜欢</p>
                                <p class="text-[3vw] pl-3 pt-2">{{ ShuZu.listenSongs }}首</p>
                                <p class="text-[2vw] pl-3 pt-3">听歌排行</p>
                            </div>

                        </div>
                    </div>
                    <div class="w-[30%] bg-[#F0F7FC] " style=" border-radius: 3vw;">
                        <h1 class="text-[4vw] pt-4 pl-4">本周关键词</h1>
                        <div class="">
                            <div class="w-[100%] h-[20vw] ">
                                <p class="text-[4vw] pl-3 pt-2">属于你的音乐档案</p>
                                <p class="text-[2vw] pl-3 pt-2">黑胶时光机</p>
                            </div>

                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="动态" name="b">
                <div class="w-[100%] h-[50vw] bg-[#fff]" style=" border-radius: 3vw;">
                    <div class="pt-[6] text-[2vw]" style="text-align: center; padding-top: 10vw;">暂时还没动态喔</div>
                </div>
            </van-tab>
            <van-tab title="播客" name="c">
                <div class="w-[100%] h-[50vw] bg-[#fff]" style=" border-radius: 3vw;">
                    <div class=" text-[3vw]" style="text-align: center; padding-top: 10vw;">暂无声音</div>
                    <div class=" text-[2vw]" style="text-align: center; padding-top: 4vw;">开始录制你的第一条声音吧</div>
                    <div class=" text-[2vw] w-[20vw] h-[8vw] bg-[red] mx-auto mt-3"
                        style="text-align: center; padding-top: 2.5vw; border-radius: 10vw;">去录制
                    </div>

                </div>
            </van-tab>
        </van-tabs>



        <!-- 收藏歌单 -->
        <div class="w-[90%] bg-[#fff] mx-auto mt-3" style="border-radius: 4vw; overflow: hidden;">
            <p class="text-[4vw] pt-3 pl-6">收藏歌单<span class="text-[2vw]">({{ ShuLing.subPlaylistCount }})</span></p>

            <div class="w-[90%] mx-auto h-[20vw]  mt-3 mb-3 flex justify-around" v-for="(item, index) in ShouChang"
                v-if="item.subscribed" @click="dianJi(index)" :key="item.id">
                <div class="w-[20vw] h-[20vw] bg-[pink]" style="border-radius: 2vw; overflow: hidden;">
                    <img :src="item.coverImgUrl" alt="" class="w-[100%] h-[100%]">
                </div>

                <div class="w-[75%] h-[100%]">
                    <p class="text-[3vw] font-bold pt-4 pl-3">{{ item.name }}</p>
                    <p class="text-[2vw] pl-2">{{ item.trackCount }}首,By {{ item.creator.nickname }},播放{{ (item.playCount /
                        10000).toFixed(1) }}万次
                    </p>
                </div>
            </div>
        </div>



        <!-- 基本信息 -->
        <div class="w-[90%] h-[32vw] bg-[#fff] mx-auto mt-3" style="border-radius: 4vw; overflow: hidden;">
            <div class="w-[90%] flex mx-auto justify-between" style="margin-top: 3vw;">
                <p>基本信息</p>
                <div v-if="ShuZu.profileVillageInfo" class="w-[20vw] h-[5vw] text-[2vw]"
                    style="border: 1px solid #ccc; text-align: center; line-height: 5vw;border-radius: 1vw;">
                    {{ ShuZu.profileVillageInfo.title }}
                </div>
            </div>
            <div class="w-[90%] mx-auto text-[2vw] mt-4">
                村龄: 2年 ({{ dayjs(ShuZu.createTime).format('YYYY年MM月') }}注册)
            </div>

            <div class="w-[90%]  mx-auto text-[2vw] mt-4">性别: 男</div>
            <div class="w-[90%]  mx-auto text-[2vw] mt-4">地区: {{ this.sheng.substring(0, 2).match(/[\u4e00-\u9fa5]+/g)[0] }}
                {{ this.city.substring(0,
                    2).match(/[\u4e00-\u9fa5]+/g)[0] }}</div>
        </div>
    </div>
</template>

<script>
import { getUserQing, getUserDetail, fetchUserHistory, getUserShou, fetchUserPlaylist } from '@/request';
import { areaList } from '@vant/area-data';
import dayjs from 'dayjs';
import axios from 'axios';
export default {
    data() {
        return {
            PersonalData: [],
            ShuZu: [],
            activeName: 0,
            ShouChang: [],
            ShuLing: [],
            areaList,
            city: '',
            sheng: '',
        };
    },
    async created() {
        getUserQing().then((res) => {
            this.PersonalData = res.data.profile;
            console.log(this.PersonalData);
            localStorage.setItem('userinfo', JSON.stringify(res.data.profile));
            this.city = this.areaList.city_list[res.data.profile.city]
            this.sheng = this.areaList.province_list[res.data.profile.province]
            getUserDetail(this.PersonalData.userId).then((res) => {
                //   this.PersonalData = res.data.profile;
                this.ShuZu = res.data
                console.log(res);
                // console.log(this.ShuZu);
            });

            fetchUserHistory(this.PersonalData.userId).then((res) => {
                // console.log(res);
            });

            getUserShou().then((res) => {
                // console.log(res);
                this.ShuLing = res.data;
                // console.log(this.ShuLing);
            });
            console.log(this.PersonalData.userId);
            fetchUserPlaylist(this.PersonalData.userId).then((res) => {
                // console.log(res);
                this.ShouChang = res.data.playlist;
                console.log(this.ShouChang);
            });
        });
    },

    methods: {
        dianJi(index) {
            this.$router.push({ path: '/song', query: { id: this.ShouChang[index].id } });
        },
    }
}
</script>
