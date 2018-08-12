import CityHeader from './components/CityHeader'<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :alphabet="alphabet"></city-list>
        <city-alphabet :cities="cities" @change="chooseCity"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
import axios from 'axios'
export default {
    name: 'City',
    data () {
        return {
            cities: {},
            hotCities: [],
            alphabet: ''
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    mounted () {
        this.getCityInfo()
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json').then(res=> {
                const _data = res.data
                if(_data.ret && _data) {
                    this.cities = _data.data.cities
                    this.hotCities = _data.data.hotCities
                }
            })
        },
        chooseCity(res) {
            this.alphabet = res
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~css/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>

