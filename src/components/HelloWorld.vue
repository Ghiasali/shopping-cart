<template>
 <div >
<h2>Cart</h2>
          <div class="d-flex justify-content-center m-auto">
                    <ul class="bg-info p-4">
                          <li v-for="to in todoss" :key="to.id">
                            {{to.name}}
                          </li>
                    </ul>
          </div>
                 Count:{{count}} <br>

      <button  @click="increment()" class="btn btn-primary">Add</button>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    todoss() {
      return this.$store.getters.todos;
    },
    count(){
      return this.$store.state.count
    }
  
  },
  methods: {
    increment() {
      this.$store.dispatch('increment',2)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
