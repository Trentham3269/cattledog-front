<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in items.items" :key="i">
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
    props: ['items'],
    data() {
      return {
        header: 'Items'
      }
    },
  }
</script>
