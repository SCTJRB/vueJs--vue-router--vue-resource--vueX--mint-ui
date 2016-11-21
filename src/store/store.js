/**
 * Created by Administrator on 2016/11/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        searchArr:[],
        searchFlag:false,
        searchTxt:''
    },
    mutations:{
        pushTxt:function(state,txt){
            state.searchArr.push(txt);
            state.searchTxt = txt;
            state.searchFlag = true;
        }
    },
    actions:{

    }
});