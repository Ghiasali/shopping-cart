import Vue from 'vue'
import Vuex from 'vuex'
import cake from '../assets/cake.jpeg'
import fries from '../assets/fries.jpeg'
import noodeles from '../assets/noodeles.jpeg'
import pizza from '../assets/pizaa.jpeg'
import smosa from '../assets/smosa.jpeg'
import salid from '../assets/salid.jpeg'


Vue.use(Vuex)

 const store=new  Vuex.Store({
    
    state:{
        Toprated:[
             { id:1,name:"Cake",price:"100",url:cake,desc:"Very taste Cake",rate:4.2 },
             { id:2,name:"Fries",price:"200",url:fries,desc:"Very Fores",rate:4 },
            ],
        Allcategories:[ 
            { id:1,name:"Noodeles",price:"250",url:noodeles,desc:"Yummi",rate:2. },
            { id:2,name:"Pizza",price:"1200",url:pizza,desc:"Sweet",rate:4.2 } 
        ],
        Dishesnearyou:[
            { id:1,name:"smosa",price:"20",url:smosa,desc:"Delicious",rate:5 },
            { id:2,name:"salid",price:"50",url:salid,desc:"Awesome",rate:1 } 
        ]
        ,
        cartcount:0,
        cartitems:[]

    }
})
export default store