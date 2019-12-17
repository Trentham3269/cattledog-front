<template>
  <v-app>    
      <AddCategory/>  
      <GetCategories/> 
  </v-app>
</template> 

<script>
  // Import components
  import GetCategories from './components/GetCategories.vue';
  import AddCategory from './components/AddCategory.vue';  

  export default {
    title: 'cattledog-front',
    name: 'app',
    components: {
      GetCategories,
      AddCategory
    }
  }
</script>