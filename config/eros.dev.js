// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'exports': [

        // // appBoard 
         "js/config/index.js",
        // // mediator
         "js/mediator/index.vue",
        // // home,界面主文件入口
        "js/pages/MeU/index.vue",
        "js/pages/MeU/my/index.vue",
        "js/pages/MeU/home/index.vue",
        "js/pages/MeU/topic/index.vue",
        "js/pages/MeU/destination/index.vue",
        "js/pages/MeU/trip/index.vue",
        // // "js/pages/news/index.vue",
        // "js/pages/yanxuanDemo/index.vue",
        // "js/pages/yanxuanDemo/home/index.vue",
        // "js/pages/yanxuanDemo/topic/index.vue",
        // "js/pages/yanxuanDemo/class/index.vue",
        // "js/pages/yanxuanDemo/shop/index.vue",
        // "js/pages/yanxuanDemo/my/index.vue",
        // "js/pages/yanxuanDemo/shop/a.vue",
    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils'
    },
    'eslint': false,
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://app.weex-eros.com/source'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    },
    'socketServer': {
        'port': 8890,
        'switch': true
    }
}
