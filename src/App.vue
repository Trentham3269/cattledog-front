<template>
  <v-app>    
      <AddCategory/>  
      <GetCategories :categories = 'categoryArray'/> 
  </v-app>
</template> 

<script>
// Import dependencies  
  // Import components
  import GetCategories from './components/GetCategories.vue';
  import AddCategory from './components/AddCategory.vue';  

  export default {
    title: 'cattledog-front',
    name: 'app',
    components: {
      GetCategories,
      AddCategory
    },
    data() {
      return {
        categoryArray: []
      }
    },
    created() {
      this.$http
        .get('/categories')
        .then(response => (this.categoryArray = response.data))
    }
  }
</script>