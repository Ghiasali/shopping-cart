<template>
 <div >
         
          <div class="container text-start" >
                   <button @click="goto('/')" class="btn btn-info">Home</button>

                <h3 class="text-start mt-2">Add Item to Cart</h3>
         
          <div class="row">
              <div class="col-lg-3 text-start">
                  <img :src="details.url" alt="" >

              </div>
              <div class="col-lg-4  text-start">
                  <h5 class=" fw-600 ">Name:{{details.name}}</h5>
                  <h5 class="my-4 fw-600"> Price:{{details.price}}</h5>
                 <h5 class="my-4 fw-600"> Description:{{details.desc}}</h5>
                <h5 class="my-4 fw-600"> Rating:{{details.rate}}</h5>

                <div class=" d-flex ">
                <button class="btn btn-info m-1 ">Go to cart</button>
                <button class="btn btn-success m-1">Add item</button>
                <button class="btn btn-danger m-1">Remove item</button>
                </div>
                

              </div>
          </div>
          
           </div>

 </div>
</template>

<script>
export default {
    data() {
        return {
            details:this.$route.params
        }
    },
    methods: {
        goto(url) {
            this.$router.push(url)
        },
       
    },
     created(){
         console.log('created')
            if(this.$route.params.id!==undefined)
            localStorage.setItem("details",JSON.stringify(this.$route.params))
        },
        mounted(){
              console.log('mounted')
            this.details=JSON.parse(localStorage.getItem('details'))
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
