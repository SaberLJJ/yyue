<template>
    <div class="w-[100vw] bg-[#F4F4F4]" v-if="myshow">
        <div class="w-[100%] h-[5vw] bg-[#fff]">
            <div class="w-[90vw] h-[5vw] mx-auto flex items-center">
                <p class="text-[5vw]" @click="$router.push('/UserDetails')">
                    <Icon icon="line-md:arrow-left" />
                </p>
                <p class="text-[3vw] pl-3">我的资料 </p>
            </div>
        </div>

        <van-cell-group class="mt-3">
            <van-cell title="头像">
                <div class="w-[5vw] h-[5vw] rounded-full overflow-hidden float-right">
                    <img :src=PersonalData.avatarUrl alt="">
                </div>
            </van-cell>
            <van-cell title="昵称" @click="shows = !shows">{{ PersonalData.nickname }}</van-cell>
            <van-cell title="性别">
                <div>{{ PersonalData.gender === 0 ? '保密' : PersonalData.gender === 1 ? '男' : '女' }}</div>
            </van-cell>
            <van-cell title="二维码">
                <p class="float-right">
                    <Icon icon="ic:baseline-qrcode" />
                </p>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="mt-3">
            <van-cell title="生日">2003-2-26</van-cell>
            <van-cell title="地区" @click="show = !show">
                <p>{{ this.sheng }} {{ this.city }}</p>
            </van-cell>
            <van-cell title="大学"> 待开发 </van-cell>
            <van-cell title="音乐标签">待开发</van-cell>
            <van-cell title="简介"> 还没有简介 </van-cell>
        </van-cell-group>
        <van-cell-group class="mt-3">
            <van-cell title="个人主页隐私设置"></van-cell>
            <van-cell title="主页模块顺序设置"></van-cell>
        </van-cell-group>
        <van-cell-group class="mt-3">
            <van-cell title="账号和绑定设置"></van-cell>
        </van-cell-group>


        <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
            <van-area columns-num="2" confirm-button-text="完成" :area-list="areaList" @confirm="handleConfirm" />
        </van-popup>

        <van-popup v-model="shows">
            <section class=" w-screen h-screen bg-[#fff]">
                <header class="flex w-screen justify-between items-center p-[4vw]">
                    <div class="flex items-center" @click="shows = !shows">
                        <Icon icon="ic:round-arrow-back" />
                        <span class="text-[4vw] font-[700] ml-[3vw]">修改昵称</span>
                    </div>
                    <span @click="setNamess">保存</span>
                </header>
                <input type="text"
                    class="w-[90vw] mx-[5vw] text-[3vw] py-[1vw] px-[4vw] pr-[10vw] border-solid border-b-[.1vw] border-[#cccccccc]"
                    v-model="name">

                <p class="absolute top-[15vw] right-[7vw]">
                    <Icon icon="ic:baseline-close" />
                </p>
                <p class="pl-4 pt-4">{{ setnames }}</p>
            </section>
        </van-popup>
    </div>
</template>

<script>
import { getUserQing, setUser, getNickname } from '@/request';
import { areaList } from '@vant/area-data';
import _ from 'lodash'
import axios from 'axios';
export default {
    data() {
        return {
            PersonalData: [],
            show: false,
            areaList,
            city: '',
            sheng: '',
            myshow: false,
            shows: false,
            arrSet: [],
            // 修改名字
            name: '',
            setnames: '',
        };
    },
    async created() {
        getUserQing().then((res) => {
            this.PersonalData = res.data.profile;
            const detail = res.data
            console.log(this.PersonalData);
            this.city = this.areaList.city_list[res.data.profile.city]
            this.sheng = this.areaList.province_list[res.data.profile.province]
            this.myshow = true
            this.arrSet = [detail.profile.gender, detail.profile.birthday, detail.profile.nickname, detail.profile.province, detail.profile.city, detail.profile.signature]
        });
    },
    methods: {
        // 修改名字
        async setNamess() {
            if (this.setnames == '昵称可用') {
                this.shows = !this.shows;
                this.arrSet[2] = this.name
                this.PersonalData.nickname = this.name
                const res = await setUser(this.arrSet[0], this.arrSet[1], this.arrSet[2], this.arrSet[3], this.arrSet[4], this.arrSet[5]).then((res) => {
                    console.log('修改昵称请求成功')
                }).catch((err) => console.log(err))
            }
        },

        // 修改省份
        async handleConfirm(values) {
            this.city = values[0].name; // 获取选中的省份名称
            this.sheng = values[1].name; // 获取选中的城市名称
            this.show = false; // 隐藏 Popup
            console.log(values);

        },
    },
    watch: {
        name: async function (keywords) {
            if (this.name != '') {
                const res = await getNickname(keywords);
                if (this.name == this.PersonalData.nickname) {
                    this.setnames = ''
                } else {
                    if (res.data.message == undefined) {
                        if (res.data.duplicated == true) {
                            this.setnames = '昵称重复'
                        } else if (res.data.duplicated == false) {
                            this.setnames = '昵称可用'
                        }
                    } else {
                        this.setnames = res.data.message
                    }
                }
                console.log(res.data);
            } else if (this.name == '') {
                this.setnames = ''
            }
        },
    },

}
</script>
