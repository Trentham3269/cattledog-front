<template>
  <v-app>
    <v-content>
      <v-container>
        <v-navigation-drawer v-model="drawer" app clipped dark>
          <v-list dense    >
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar app clipped-left dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
          <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
          <AddCategory @categoryCreated="getData()"/>  
          <GetCategories :categories="categoryArray" />
      </v-container> 
    </v-content>
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
    },
    methods:{
      getData(){
        this.$http
        .get('/categories')
        .then(response => (this.categoryArray = response.data))  
      }
    },
    mounted() {
      this.getData();
    }, 
    data() {
      return {
        drawer: null,
        categoryArray: [],
      }
    }
  }
</script>