<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class='icon-img'>
                        <img class='icon-img-content' :src='item.imgUrl' />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
      list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // 计算属性 - 获取轮播图的页数
    pages() {
        const pages = []
        // 循环数据
        this.list.forEach((item, index) => {
            const page = Math.floor(index / 8) // 计算页数（每页放8个icon）
            // 如果该页不存在，则先将该页设置为一个空数组
            if(!pages[page]) {
                pages[page] = []
            }
            // 然后再将该项存入当前页中
            pages[page].push(item)
        });
        return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~css/varibles.styl'
    @import '~css/mixins.styl'
    .icons >>> .swiper-container {
        height: 0;
        padding-bottom: 50%;
    }
    .icons {
        margin-top: .1rem;
        .icon {
            position: relative;
            overflow: hidden;
            float: left;
            width: 25%;
            height: 0;
            padding-bottom: 25%;
            .icon-img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .44rem;
                box-sizing: border-box;
                padding: .1rem;
                .icon-img-content {
                display: block;
                margin: 0 auto;
                height: 100%;
                }
            }
            .icon-desc {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: .44rem;
                line-height: .44rem;
                text-align: center;
                color: $darkTextColor;
                ellipsis();
            }
        }
    }
</style>

