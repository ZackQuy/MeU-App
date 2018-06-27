<template>
    <div class="wrapper">
        <text class="search iconfont" @click="jumpWeb()">&#xe65c; 景点/酒店/美食/娱乐</text>
        <div class="right">
            <text class="ic iconfont2">&#xe713;</text>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data: () => ({
      value: ''
    }),
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
.search {
    text-align: center;
    color: #666;
    font-weight: 300;
    flex: 1;
    height: 70px;
    font-size: 30px;
    padding-top: 19px;
    top: 16px;
    left: 20px;
    background-color: #ededed;
    border-radius: 8px;
}
.iconfont {
    font-family: iconfont;
}
.iconfont2 {
    font-family: iconfont2;
}
.wrapper {
    display: flex;
    height: 100px;
    background-color:rgb(253,212,0);   
    opacity: .99;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
}
.ic{
    top:20px;
    left:40px;
    font-size: 40px;
}
.right {
    height: 80px;
    width: 120px;
    padding-top: 10px;
}
</style>