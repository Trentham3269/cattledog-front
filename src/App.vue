<template>
  <v-app>
    <v-content>
      <v-container>
        <v-navigation-drawer v-model="drawer" app clipped dark color="grey">
          <v-list dense>
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
        <v-app-bar app clipped-left dark color="blue-grey">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
          <v-col>
            <v-toolbar-title>Application</v-toolbar-title>
          </v-col>
          <v-col offset="8">
            <v-btn v-if="createUserState === 'default'" color="primary" @click="showCreateUser('edit')">Sign Up</v-btn>
            <v-btn v-else color="error" class="mr-4" @click="showCreateUser('default')">Cancel</v-btn>
          </v-col>
          <v-col offset="">
            <v-btn v-if="loginUserState === 'default'" color="warning" @click="showLoginUser('edit')">Sign In</v-btn>
            <v-btn v-else color="error" class="mr-4" @click="showLoginUser('default')">Cancel</v-btn>
          </v-col>
        </v-app-bar>
          <CreateUser :createUserForm="createUserState"/>
          <LoginUser :loginUserForm="loginUserState"/>
          <AddItem v-if="createUserState === 'default'" @itemCreated="getData()"/>  
          <GetCategories v-if="createUserState === 'default'" :categories="categoryArray"/>
      </v-container> 
    </v-content>
  </v-app>
</template> 

<script>
  // Import components
  import CreateUser from './components/CreateUser';
  import LoginUser from './components/LoginUser';
  import GetCategories from './components/GetCategories.vue';
  import AddItem from './components/AddItem.vue';

  export default {
    title: 'cattledog-front',
    name: 'app',
    components: {
      CreateUser,
      LoginUser,
      GetCategories,
      AddItem
    },
    methods: {
      getData() {
        let self = this;
        this.$http
        .get('/categories')
        .then(function(response) {
          self.categoryArray = response.data
        })  
      },
      showCreateUser(newState) {
        this.createUserState = newState
      },
      showLoginUser(newState) {
        this.loginUserState = newState
      }
    },
    mounted() {
      this.getData();
    }, 
    data() {
      return {
        drawer: null,
        categoryArray: [],
        createUserState: 'default', 
        loginUserState: 'default'
      }
    }
  }
</script>