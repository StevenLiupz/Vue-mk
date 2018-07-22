<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recomand :list="recomandList"></home-recomand>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import homeHeader from './components/header';
import homeSwiper from './components/swiper';
import homeIcons from './components/icons';
import homeRecomand from './components/recomand';
import homeWeekend from './components/weekend';
import axios from 'axios';

export default {
    name: 'Home',
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recomandList: [],
            weekendList: []
        }
    },
    components: {
        homeHeader,
        homeSwiper,
        homeIcons,
        homeRecomand,
        homeWeekend
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json').then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess (res) {
            let data = res.data
            if(data.ret && data.data) {
                console.log(res)
                const _data = data.data
                this.city = _data.city
                this.swiperList = _data.swiperList
                this.iconList = _data.iconList
                this.recomandList = _data.recommendList
                this.weekendList = _data.weekendList
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style>
    
</style>
