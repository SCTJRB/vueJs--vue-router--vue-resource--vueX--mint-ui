
<style>
    *{margin: 0;padding: 0}
    footer ul{list-style: none;overflow: hidden;border: 1px solid #ccc;font-family: 微软雅黑}
    footer li:nth-child(1){border-left:0;}
    footer li{float:left;font-size: 13px;width: 25%;padding: 10px 0;text-align: center;box-sizing: border-box;border-left:1px solid #ccc;}
    .router-link-active{background: #ccc;color: #fff}
</style>

<template>
    <footer>
        <ul>
            <!--<router-link :to="{ name: 'home', params: { name: '首页' }}" tag="li">首页</router-link>-->
            <!--<router-link :to="{ name: 'shopping', params: { name: '商品' }}" tag="li">商品</router-link>-->
            <!--<router-link :to="{ name: 'action', params: { name: '活动' }}" tag="li">活动</router-link>-->
            <!--<router-link :to="{ name: 'my', params: { name: '个人' }}" tag="li">个人</router-link>-->

            <router-link :to="{ path: '/home', query: {name:'首页',flag:'false'}}" tag="li">首页</router-link>
            <router-link :to="{ path: '/shopping', query: {name:'列表',flag:'true'}}" tag="li">列表</router-link>
            <router-link :to="{ path: '/action', query: {name:'活动',flag:'true'}}" tag="li">活动</router-link>
            <router-link :to="{ path: '/my', query: {name:'个人',flag:'true'}}" tag="li">个人</router-link>
        </ul>
    </footer>
</template>