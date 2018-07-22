<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recomand></home-recomand>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import homeHeader from './components/header';
import homeSwiper from './components/swiper';
import homeIcons from './components/icons';
import homeRecomand from './components/recomand';
import homeWeekend from './components/weekend';

export default {
    name: 'Home',
    components: {
        homeHeader,
        homeSwiper,
        homeIcons,
        homeRecomand,
        homeWeekend
    }
}
</script>

<style>
    
</style>
