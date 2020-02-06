<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-form v-if="loginUserForm === 'edit'" ref="form" v-model="valid" :lazy-validation="lazy">
          <h3>{{ header }}</h3>
          <h3>Welcome {{ $store.getters.user }}</h3>
          <v-text-field v-model="email" :counter="80" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" :counter="80" :rules="passwordRules" label="Choose password" required></v-text-field>
          <v-btn color="primary" class="mr-4" @click="loginUser()">Submit</v-btn>
          <v-btn color="error" class="mr-4" @click="reset()">Reset</v-btn>
        </v-form>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginUser',
    props: ['loginUserForm'],
    data() {
      return {
        header: 'Login',
        email: '', 
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '', 
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 80) || 'Password must be less than 80 characters',
        ], 
        checkbox: false, 
        lazy: false,
        valid: true
      }
    },
    methods: {
      loginUser() {
        let self = this;
        this.$http
          .post('/login', {
            email: this.email,
            password: this.password 
          })
          .then(function(response){
            let user = response.data.message
            self.$store.commit('UPDATE_USER', user);
            self.email = '';
            self.password = '';
          })
          .catch(function(error) {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      },
      reset() {
        this.$refs.form.reset()
      }
    }
  }
</script>