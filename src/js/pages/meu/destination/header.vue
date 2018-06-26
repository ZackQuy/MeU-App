<template>
    <div class="wrapper">
        <div class="left">
            <!-- <text class="leftTxt" v-if="leftBtn">{{leftBtn.name}}</text> -->
            <text class="ic iconfont">&#xe6ac;</text>
        </div>
        <text class="tlt">{{title}}</text>
        <div class="right">
            <text class="ic iconfont">&#xe713;</text>
            <!-- <text class="rightTxt" v-if="rightBtn">{{rightBtn.name}}</text> -->
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'leftBtn', 'rightBtn'],
}
</script>
<style scoped>
.iconfont {
    font-family: iconfont2;
}
.wrapper {
    height: 100px;
    /* background-color:rgb(253,212,0); */
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
.tlt {
    flex: 1;
    font-size: 40px;
    padding-top: 30px;
    color: #333;
    text-align: center;
}

.left,
.right {
    height: 80px;
    width: 120px;
    padding-top: 10px;
}

.leftTxt,
.rightTxt {
    font-size: 30px;
    text-align: center;
}
</style>