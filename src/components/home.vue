
<style>
    *{margin: 0;padding: 0}
    #main{position: absolute;padding: 40px 0;width: 100%}
    section .banner{height: 170px;border: 1px solid #ccc}
    #content{position: relative;min-height: 200px}
    #content ul{list-style: none}
    #content ul li{float: left;width: 50%;border: 1px solid #ccc;box-sizing: border-box;text-align: center;font-family: 微软雅黑}
    #content ul li .imgDiv{width: 100%;height: 200px;overflow: hidden}
    #content ul li img{width: 100%;}
    #content ul li p{padding:5px 0;font-size: 13px;color: #727272}
    #loadingMaxDiv{position: absolute;width: 100%;height: 100%;background: #fff;z-index: 1}
    #loadingDiv{background: url("../assets/loading.gif") no-repeat;width: 215px;height: 100px;position: absolute;left: 18%}
</style>

<template>
    <section id="main">
        <div class="banner">
            <loading v-show="loading"></loading>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="img in banner">
                    <img :style="styleObj" :src="img.images.large"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <section id="content">
            <loading v-show="loading"></loading>
            <ul>
                <li v-for="li in list">
                    <router-link :to="{ path: '/detali', query: {name:'电影详情',id:li.id,flag:'true'}}" tag="div">
                        <div class="imgDiv">
                            <img v-lazy="li.images.large">
                        </div>
                        <p>{{li.title}}</p>
                    </router-link>
                </li>
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
                styleObj:{
                    width:'100%'
                }
            }
        },
        computed:{
          banner:function(){
              return this.list.slice(5,10)
          }
        },
        components:{
            loading:loading
        },
        mounted(){
            var _this = this;
            Vue.http.jsonp('https://api.douban.com/v2/movie/top250?count=20').then(function(response){
                _this.list = response.data.subjects;
                _this.loading=false;
            })
        }
    }
</script>