import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
	state:{
		goodsList:[]
	},
	mutations:{
		editGoodsList(sta,data){
			sta.goodsList = data.car_list//返回的是购物车里的所有信息
		}
	}
})

export default store
