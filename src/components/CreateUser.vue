<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-form v-if="createUserForm === 'edit'" ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field v-model="email" :counter="80" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" :counter="80" :rules="passwordRules" label="Choose password" required></v-text-field>
          <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
          <v-btn color="primary" class="mr-4" @click="createUser()">Submit</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'CreateUser',
    props: ['createUserForm'],
    data() {
      return {
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
      createUser() {
        let self = this;
        this.$http
          .post('/signup', {
            email: this.email,
            password: this.password 
          })
          .then(function(){
            // eslint-disable-next-line no-console
            console.log('created new user');
            self.email = '';
            self.password = '';
            //self.$emit("userCreated");
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