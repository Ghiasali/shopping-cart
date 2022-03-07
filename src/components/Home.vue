<template>
 <div >
    <div class="container">
     <b>Cart</b> :<b style="color:red">{{count}}</b>
      <h2 class="mt-5">Top Rated Items</h2>
        <div class="row bg-info">
            <div class="col-lg-6 p-2" v-for="item in Toprated" :key="item.id">
              <img :src="item.url" alt="" @click="item_details(item)" width="300" height="300" style="border-radius:15px">
                <h5 class="fw-600 black">{{item.name}}</h5>  
            </div>
        </div>
         <h2 class="mt-5">All Categories Items</h2>
        <div class="row bg-info">
            <div class="col-lg-6 p-2" v-for="item in Allcategories" :key="item.id">
              <img :src="item.url" alt="" @click="item_details(item)" width="300" height="300" style="border-radius:15px">
                <h5 class="fw-600 black">{{item.name}}</h5>  
            </div>
        </div>

        <h2 class="mt-5">Items near you</h2>
        <div class="row bg-info">
            <div class="col-lg-6 p-2" v-for="item in Nearyou" :key="item.id">
              <img :src="item.url" alt="" @click="item_details(item)" width="300" height="300" style="border-radius:15px">
                <h5 class="fw-600 black">{{item.name}}</h5>  
            </div>
        </div>
    </div>       
 </div>
</template>

<script>
export default {
  name: 'Home',
 computed:{
      Toprated(){
        return this.$store.state.Toprated
      },
      Allcategories(){
        return this.$store.state.Allcategories
      },
      Nearyou(){
        return this.$store.state.Dishesnearyou
      },
      count(){
        return this.$store.state.cartcount
      }
 },
 methods:{
   item_details(item){
      this.$router.push({name:"food-details",params:item})
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
