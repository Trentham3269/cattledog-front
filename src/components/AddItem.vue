<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-btn v-if="state === 'default'" color="success" class="mr-4" @click="changeState('edit')">Add Item</v-btn>
        <v-btn v-else color="error" class="mr-4" @click="changeState('default')">Cancel</v-btn>
        <v-form v-if="state === 'edit'" ref="form" v-model="valid" lazy-validation>
          <h3>{{header}}</h3>
          <v-select :items="items" item-value="id" item-text="name" v-model="itemCtgry" label="Select category" required></v-select>
          <v-text-field v-model="itemTitle" :counter="50" label="Add item title" required></v-text-field>
          <v-text-field v-model="itemDesc" :counter="50" label="Add item description" required></v-text-field>  
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="addItem()">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>      
</template>

<script>
  export default {
    name: 'AddItem',
    methods: {
      addItem() {
        let self = this;
        this.$http
          .post('/auth/items', {
            catID: this.itemCtgry,
            title: this.itemTitle,
            description: this.itemDesc
          })
          .then(function() {
            self.cat_id = '';
            self.title = '';
            self.description = '';  
            self.$emit("itemCreated");
            // eslint-disable-next-line no-console
            console.log('created new item');
          })
          .catch(function(error) {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      },
      changeState(newState) {
        this.state = newState;
      }
    },
    data() {
      return {
        header: 'Add Item',
        state: 'default',
        valid: true,
        items: [
          {"id":10, "name":"Fishing"},
          {"id":9, "name":"Hockey"},
          {"id":8, "name":"Surfing"},
          {"id":7, "name":"Football"},
          {"id":6, "name":"Rock Climbing"},
          {"id":5, "name":"Snowboarding"},
          {"id":4, "name":"Frisbee"},
          {"id":3, "name":"Baseball"},
          {"id":2, "name":"Basketball"},
          {"id":1, "name":"Soccer"}
        ],
        itemCtgry: '',
        itemTitle: '',
        itemDesc: '', 
      }
    }
  }
</script>



