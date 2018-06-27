<template>
    <div class="wrapper">
        <div class="i-tp">
        <image class="img" resize="cover" :src="imgurl"  />
        <text class="t-city ">{{city}}</text>
        <text class="t-info iconfont">{{info}}</text>
        <text class="t-weather ">{{weather}}</text>
        <div class="right">
             <text class="t-cream iconfont">&#xe86e;</text>
             <text class="t-txt iconfont">精选图库&#xe6a7;</text>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [""],//传入接收值
    data: () => ({
      imgurl: 'bmlocal://assets/destination/cd.jpg',
      bag:'bmlocal://assets/bag.png',
      city:'成都',
      info:'四川人气第一名'
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
.iconfont {
    font-family: iconfont2;
}

.wrapper {
    background-color: #fff;
}
.img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit:cover;
    background-color: #f4f4f4;
}
.i-tp {
    width: 750px;
    height: 250px;
}
.t-city{
    padding-top: 40px;
    padding-left: 20px;
    font-size: 50px;
    font-weight: bold;
    margin-left: 30px;
    overflow: hidden;
    color: white;
    lines: 1;
    width:auto;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.t-info{
    margin-top: 20px;
    font-size: 30px;
    margin-left: 30px;
    overflow: hidden;
    color: white;
    lines: 1;
    width:auto;
    white-space: nowrap;
    text-overflow: ellipsis;
   
}
.right{
    position: absolute;

    width: 150px;
    height: 80px;
    right: 20px;
    bottom: 20px;
}
.t-cream{
    color: white;
    text-align: center;
    font-weight:bolder;
    font-size: 40px;
}
.t-txt{
    width: 150px;
    text-align: center;
    font-weight: bolder;
    color: white;
    font-size: 26px;
    margin-top: 5px;
    margin-left: 10px;
}
</style>