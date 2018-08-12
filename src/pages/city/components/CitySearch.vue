<template>
    <div class="search-container">
        <div class="search">
            <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="search-input">
        </div>
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class="search-item border-bottom" v-for="city of list" :key="city.id">{{city.name}}</li>
                <li class="search-item border-bottom" v-show="noData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    data () {
        return {
            keyword: '',
            list: []
        }
    },
    props: {
        cities: Object
    },
    computed: {
        noData() {
            return !this.list.length;
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    },
    watch: {
        keyword () {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(()=> {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(item=> {
                        if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                            return result.push(item)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~css/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>


