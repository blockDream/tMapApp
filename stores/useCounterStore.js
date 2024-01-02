import { defineStore } from 'pinia'

// 定义仓库有两种定义方式

// 01 选项options方式
export const useCounterStore = defineStore('counter', {
  // 定义状态
  	state:()=>({count:5}),
  	// 计算数据
  	getters:{
  		doubleCount:(state)=>state.count*2
  	},
  	// 动作支持异步	
  	actions:{
  		setCount(v){
  			this.count = v;
  		}
  	}
})