<template>
  <div id='app'>
    <GetCategories :categories = 'categoryArray'/>
  </div>
</template>

<script>
import $ from 'jquery'
import GetCategories from './components/GetCategories.vue'

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