<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-btn v-if="state === 'default'" color="success" class="mr-4" @click="changeState('edit')">Add Item</v-btn>
        <v-btn v-else color="error" class="mr-4" @click="changeState('default')">Cancel</v-btn>
        <v-form v-if="state === 'edit'" ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="category" :counter="50" label="Add Category" required></v-text-field>  
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="addCategory()">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>      
</template>

<script>
  export default {
    name: 'AddCategory',
    data() {
      return {
        state: 'default',
        valid: true,
        name: '',
        // categoryRules: [
        //   v => !!v || 'Category is required',
        //   v => (v && v.length <= 50) || 'Category must be less than 50 characters',
        // ]
      }
    },
    methods: {
      addCategory() {
        let self = this;
        this.$http
          .post('/categories', {
            name: this.category
          })
          .then(function() {
            // eslint-disable-next-line no-console
            console.log('created new category');
            self.category = '';
            self.$emit("categoryCreated");
          })
          .catch(function(error) {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      },
      changeState(newState) {
        this.state = newState;
      }
    }
  }
</script>