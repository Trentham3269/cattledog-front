<template>
  <div>
      <ul v-for="(item, i) in categories" :key="i">
        <li>{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  title: 'cattledog-front',
  name: 'app', 
  data() {
    return {
      categories: []  
    }
  },
  created: function() {
    $.getJSON('/assets/categories.json')
      .done( info =>  {
        this.categories = info;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
