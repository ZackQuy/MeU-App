<template>
    <div class="wrapper">
        <div class="status-bar" style="background-color:#fafafa;" :style="{'height': statusHeight}"></div>
        <topic-header title="发现" ></topic-header>
        <scroller class="main-list" offset-accuracy="300px">
            <!-- <refresher @loadingDown="loadingDown"></refresher> -->
            <div class="cell-button" @click="jumpWeb('http://m.you.163.com/topic/v1/look/list')">
                <block-1 :topics="topics"></block-1>
            </div>
            <div class="cell-button" @click="jumpWeb('http://m.you.163.com/topic/v1/look/list')">
                <block-3 :topics="topics2"></block-3>
            </div>
            <div v-for="ar in articles" :key="ar.id" class="cell-button">
                <block-2 :article="ar"></block-2>
            </div>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">加载中...</text>
            </loading>
        </scroller>
    </div>
</template>
<script>
// import refresher from '../common/refresh';
import header from './header';
import block1 from './block1';
import block3 from './block3';
import block2 from './block2';
import { TOPICS,TOPICS2, ARTICLES } from './config'

export default {
    components: {
        //'refresher': refresher,
        'topic-header': header,
        'block-1': block1,
        'block-2': block2,
        'block-3': block3,
    },
    created() {
        this.init()
    },
    data() {
        return {
            topics: [],
            topics2: [],
            articles: [],
            showLoading: 'hide',
            statusHeight: Number.parseInt(this.statusBarHeight || weex.config.env.statusBarHeight || 40)
        }
    },
    methods: {
        jumpWeb(_url) {
            this.$router.toWebView({
                url: _url,
                title: 'MeU',
                navShow: true,
            })
        },
        loadingDown() {

        },
        init() {
            this.getTopics()
            this.getArticles()
        },
        onloading() {
            this.$notice.loading.show()
            this.showLoading = 'show';
            setTimeout(() => {
                this.$notice.loading.hide()
                this.articles.push(...ARTICLES);
                this.showLoading = 'hide'
            }, 600)
        },
        getTopics() {
            // this.$fetch({
            //        method: 'GET',
            //        name: 'yanxuan_topic_getTopics',
            //        data: {}
            //    }).then(resData => {
            //        this.topics = resData.data
            //    }, error => {

            //    })
            this.topics = TOPICS;
            this.topics2 = TOPICS2;
        },
        getArticles() {
            // this.$fetch({
            //        method: 'GET',
            //        name: 'yanxuan_topic_getArticles',
            //        data: {}
            //    }).then(resData => {
            //        this.articles = resData.data
            //    }, error => {

            //    })

            this.articles = ARTICLES
        }
    }
}
</script>
<style scoped>
.iconfont {
    font-family: iconfont;
}

.wrapper {
    background-color: #f4f4f4;
}

.main-list {
    /*margin-top: 70px;*/
    margin-bottom: 90px;
}

.cell-button {
    padding-bottom: 18px;
}
.indicator {
    position: absolute;
    left: 310px;
    color: #888888;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>