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
          <v-col offset="9">
            <v-btn v-if="createUserState === 'default'" color="primary" @click="showCreateUser('edit')">Sign Up</v-btn>
            <v-btn v-else color="error" class="mr-4" @click="showCreateUser('default')">Cancel</v-btn>
          </v-col>
        </v-app-bar>
          <!-- CreateUser -->
          <v-container>
            <v-layout text-center wrap>
              <v-flex xs12>
                <v-form v-if="createUserState === 'edit'" ref="form" v-model="valid" :lazy-validation="lazy">
                  <v-text-field v-model="email" :counter="80" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field v-model="password" :counter="80" :rules="passwordRules" label="Choose password" required></v-text-field>
                  <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
                  <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
                </v-form>
              </v-flex> 
            </v-layout>
          </v-container>
          <!-- /CreateUser -->
          <AddCategory v-if="createUserState === 'default'" @categoryCreated="getData()"/>  
          <GetCategories v-if="createUserState === 'default'" :categories="categoryArray"/>
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
      getData() {
        this.$http
        .get('/categories')
        .then(response => (this.categoryArray = response.data))  
      }, 
      showCreateUser(newState) {
        this.createUserState = newState
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      }
    },
    mounted() {
      this.getData();
    }, 
    data() {
      return {
        drawer: null, //App
        categoryArray: [], //App
        valid: true, //App
        createUserState: 'default', //CreateUser
        password: '', //CreateUser
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 10) || 'Password must be less than 80 characters',
        ], //CreateUser
        email: '', //CreateUser
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ], //CreateUser
        checkbox: false, //CreateUser
        lazy: false //CreateUser
      }
    }
  }
</script>