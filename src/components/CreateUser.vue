<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-form v-if="createUserForm === 'edit'" ref="form" v-model="valid" :lazy-validation="lazy">
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
</template>

<script>
  export default {
    props: ['createUserForm'],
    methods: {
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
    data() {
      return {
        password: '', 
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 10) || 'Password must be less than 80 characters',
        ], 
        email: '', 
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        checkbox: false, 
        lazy: false,
        valid: true
      }
    }
  }
</script>