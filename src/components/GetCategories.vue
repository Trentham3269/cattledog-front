<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in categories" :key="i">
            <v-expansion-panel-header @click="getItems(item.id)">{{ item.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <GetItems :items="itemsArray"/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
    // mounted() {
    //   this.getItems();
    // },
    data() {
      return {
        header: 'Categories - Last 10',
        itemsArray: []
      }
    },
  }
</script>


