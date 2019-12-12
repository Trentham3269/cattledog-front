<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    ><h1>Testy McTest</h1>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-flex>
      <GetCategories :categories = 'categoryArray'/> 
    </v-flex> 
  </v-app>
</template> 

<script>
import $ from 'jquery';
import GetCategories from './components/GetCategories.vue';
export default {
  title: 'cattledog-front',
  name: 'app',
  components: {
    'GetCategories': GetCategories
  },
  data() {
    return {
      categoryArray: []  
    }
  },
  created: function() {
    $.getJSON('http://localhost:8888/categories')
      .done( info =>  {
        this.categoryArray = info;
    });
  }
}
</script>