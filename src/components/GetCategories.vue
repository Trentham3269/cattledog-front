<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h2>{{header}}</h2>
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in categories" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name" @click="getItems(item.id)"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <GetItems :items="itemsArray"/>
            </v-list-item-group>
           </v-list>
        </v-card>
        
      </v-flex>	
    </v-layout>
  </v-container>  
</template>

<script>
  import GetItems from '@/components/GetItems.vue';

  export default {
    name: 'GetCategories',
    props: ['categories'],
    components: {
      GetItems
    },
    methods: {
      getItems(id) {
        let self = this;
        this.$http
        .get('/categories/' + id) 
        .then(function (response) {
          self.itemsArray = response.data
        })
      }
    },
    mounted() {
      this.getItems();
    },
    data() {
      return {
        header: 'Categories - Last 10',
        itemsArray: []
      }
    },
  }
</script>


