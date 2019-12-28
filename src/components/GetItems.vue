<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h2>{{header}}</h2>
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in itemsArray.items" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                  <v-list-item-title v-text="item.desc"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
           </v-list>
        </v-card>
      </v-flex>	
    </v-layout>
  </v-container>  
</template>

<script>
  export default {
    name: 'GetItems',
    props: [''],
    methods:{
      getItems() {
        let self = this;
        this.$http
        .get('/categories/1')
        .then(function (response) {
          self.itemsArray = response.data
        })  
      }
    },
    mounted() {
      this.getItems()
    }, 
    data() {
      return {
        header: 'Items',
        itemsArray: []
      }
    },
  }
</script>
