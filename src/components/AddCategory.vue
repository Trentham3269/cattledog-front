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
            :counter="50"
            :rules="categoryRules"
            label="Add Category"
            required
          ></v-text-field>          

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            Submit
          </v-btn>      

        </v-form>
      </v-flex>
    </v-layout>
  </v-container>      
</template>

<script>
  export default {
    name: 'AddCategory',
    data: () => ({
      valid: true,
      name: '',
      categoryRules: [
        v => !!v || 'Category is required',
        v => (v && v.length <= 50) || 'Category must be less than 50 characters',
      ]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      }
    }
  }
</script>