<template>
    <div class="wrapper">
        <div class="auther-box">
            <image class="auther-img" resize="cover" src="bmlocal://assets/tip.png" />
            <text class="auther-name">必看精彩</text>
        </div>
        <scroller class="tp-box" scroll-direction="horizontal"  show-scrollbar=false>
            <div class="i-tp" v-for="i in topics" :key="i.id" @click="jumpWeb('http://m.you.163.com/topic/v1/look/list')">
                <image class="tp-img" resize="cover" :src="i.img"  />
                <text class="tp-name">{{i.name}}</text>
                <text class="tp-info">{{i.info}}</text>
            </div>
        </scroller>
    </div>
</template>
<script>
export default {
    props: ["topics"],
    methods: {
        jumpWeb(_url) {
            this.$router.toWebView({
                url: _url,
                title: '',
                navShow: true,
            })
        }

        }
}
</script>
<style scoped>
.iconfont {
    font-family: iconfont;
}

.wrapper {
    background-color: #fff;
}
.auther-box {
    height: 75px;
    padding-top: 10px;
    padding-left: 25px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}

.auther-img {
    padding-top: 10px;
    height: 45px;
    width: 8px;
}

.auther-name {
    flex: 1;
    font-size: 30px;
    height: 58px;
    padding-left: 20px;
    padding-top: 10px;
}
.tp-box {
    flex-direction: row;
    height: 200px;
    padding: 20px;
}

.i-tp {
    width: 275px;
    height: 150px;
    margin: 10px;
}

.tp-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 275px;
    height: 150px;
    border-radius: 10px;
    background-color: #f4f4f4;
}

.tp-name {
    font-size: 30px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    font-weight: bold;
    overflow: hidden;
    text-align: center;
    color: #fff;
    lines: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.tp-info {
    font-size: 26px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    overflow: hidden;
    text-align: center;
    color: #fff;
    lines: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>