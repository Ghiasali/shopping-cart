<template>
 <div >
     <button @click="goto('/')">Home</button>
          <h3>Details</h3>
          <div class="row">
              <div class="col-lg-6">
                  <img :src="details.url" alt="">
              </div>
              <div class="col-lg-6 bg-info">
                  <h5>{{details.name}}</h5>
                  <p>Price:{{details.price}}</p>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
