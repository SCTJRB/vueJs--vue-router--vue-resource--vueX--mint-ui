
<style>
    *{margin: 0;padding: 0}
    section .banner{height: 220px;border: 1px solid #cc;overflow: hidden}
    section .banner img{width: 100%}
    section .contenr li{list-style: none;font-size: 13px;font-family: 微软雅黑;padding: 5px 0;border-bottom: 1px solid #ccc;color: #727272  }
    section .contenr li span{display: inline-block;width: 50%}
    section .contenr li a{display: inline-block;padding: 0 5px}
</style>
<template>
    <section id="main">
        <div class="banner">
            <loading v-show="loading"></loading>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="cas in movieDetali.casts">
                    <img :src="cas.avatars.large"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <section class="contenr">
            <loading v-show="loading"></loading>
            <ul>
                <li><span>名称：<a>{{movieDetali.title}}</a></span><span>类别：<a v-for="type in movieDetali.genres">{{ type }}</a></span></li>
                <li><span>地区：<a v-for="t in movieDetali.countries">{{t}}</a></span><span>时间：<a>{{movieDetali.year}} 年</a></span></li>
                <li><span>想看：<a>{{movieDetali.wish_count}} 人</a></span><span>看过：<a>{{movieDetali.collect_count}} 人</a></span></li>
                <li>主演：<a v-for="cas in movieDetali.casts">{{ cas.name }}</a></li>
                <li>简介：</li>
                <li><p v-html="movieDetali.summary"></p></li>
            </ul>
        </section>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Vueresource from 'vue-resource';
    Vue.use(Vueresource);

    var loading = {template:"<div id='loadingMaxDiv'><div id='loadingDiv'></div></div>"};
    export default{
        data:function(){
            return {
                list:[],
                loading:true,
                movieDetali:{}
            }
        },
        components:{
            loading:loading
        },
        mounted(){
            var _this = this;
            var id = _this.$route.query.id;
            Vue.http.jsonp('https://api.douban.com/v2/movie/subject/'+id+'').then(function(response){
                _this.movieDetali=response.body;
                _this.loading = false
            })
        }
    }
</script>
