<template>
  <v-app>    
      <GetCategories :categories = 'categoryArray'/> 
  </v-app>
</template> 

<script>
// Import dependencies  
import axios from 'axios';

// Import components
import GetCategories from './components/GetCategories.vue';

export default {
  title: 'cattledog-front',
  name: 'app',
  components: {
    GetCategories
  },
  data() {
    return {
      categoryArray: []
    }
  },
  created() {
    axios
      .get('http://localhost:8888/categories')
      .then(response => (this.categoryArray = response.data))
  }
}
</script>