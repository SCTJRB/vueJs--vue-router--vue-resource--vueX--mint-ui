<template>
    <section id="main">
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
    import MintUI from 'mint-ui';
    import 'mint-ui/lib/style.css'
    Vue.use(MintUI);
    Vue.use(Vueresource);

    var loading = {template:"<div id='loadingMaxDiv'><div id='loadingDiv'></div></div>"};
    export default{
        data:function(){
            return {
                list:[],
                loading:true
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
            var url = '';
            if(this.$store.state.searchFlag){
                url = 'https://api.douban.com/v2/movie/search?q='+this.$store.state.searchTxt+''
            }else {
                url = 'https://api.douban.com/v2/movie/top250?count=20'
            }
            Vue.http.jsonp(url).then(function(response){
                _this.list = response.data.subjects;
                _this.loading=false;
            },function(response){
                alert(response)
            })
        }
    }
</script>
