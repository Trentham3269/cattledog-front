<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="category"
            :counter="50"
            label="Add Category"
            required
          ></v-text-field>          

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="addCategory"
          >
            Submit
          </v-btn>      

        </v-form>
      </v-flex>
    </v-layout>
  </v-container>      
</template>

<script>
  import axios from 'axios'
  const instance = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 1000,
  });

  export default {
    name: 'AddCategory',
    data: () => ({
      valid: true,
      name: '',
      category: ''
      // categoryRules: [
      //   v => !!v || 'Category is required',
      //   v => (v && v.length <= 50) || 'Category must be less than 50 characters',
      // ]
    }),
    methods: {
      addCategory() {
        instance.
          post('/categories', {name: this.category})
          .then(function (response) {
            // eslint-disable-next-line no-console
            console.log(response);
          })
          .catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }
    }
  }
</script>