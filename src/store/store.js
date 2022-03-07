import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

 const store=new  Vuex.Store({
    state:{
    todo:[
            {id:'1',name:"Shoping at 7",done:true},
            {id:'2',name:"Shoping at 8",done:false},
            {id:'3',name:"Shoping at 9",done:true},
        ],
        count:0
    },
    getters:{
        todos:state=>{
            return state.todo.filter(todo=>todo.done)
        }
    },
    mutations:{
        increment(state,payload){
            state.count+=payload
        }
    },
    actions:{
        increment:(mutations,payload)=>{
            mutations.commit("increment",payload)
        }   
    }
})
export default store