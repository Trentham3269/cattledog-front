<template>
  <v-app>    
      <AddCategory/>  
      <GetCategories :categories = 'categoryArray'/> 
  </v-app>
</template> 

<script>
// Import dependencies  
  import axios from 'axios';
  const instance = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 1000,
  });  

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
      instance
        .get('/categories')
        .then(response => (this.categoryArray = response.data))
    }
  }
</script>