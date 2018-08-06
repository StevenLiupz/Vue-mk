<template>
    <div class="alphabet">
        <div class="item" v-for="item in alphabets" :key="item" :ref="item" @click="chooseCityAlphsbet" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null // 用于函数节流
        }
    },
    updated () {
        this.startY = this.$refs[this.alphabets[0]][0].offsetTop
    },
    computed: {
        alphabets() {
            const alphabets = []
            for(let i in this.cities) {
                alphabets.push(i)
            }
            return alphabets
        }
    },
    methods: {
        chooseCityAlphsbet(e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart(e) {
            this.touchStatus = true
        },
        handleTouchMove(e) {
            if(this.touchStatus) {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                // 函数节流，通过减少touchmove执行的频率来提高性能
                this.timer = setTimeout(()=> {
                    const touchY = e.touches[0].clientY - 79 // 79是顶部绿色区域的高度
                    const index = Math.floor((touchY - this.startY) / 20) // 20是每个字母的高度
                    if(index >= 0 && index < this.alphabets.length) {
                        this.$emit('change', this.alphabets[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd(e) {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~css/varibles.styl'
  .alphabet
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>

