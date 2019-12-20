<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h2>{{header}}</h2>
        <v-card class="mx-auto" max-width="500">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in categories" :key="i">
                <!-- <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon> -->
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
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
    name: 'GetCategories',
    props:['categories'],
    data() {
      return {
        header: 'Categories - Last 10',
      }
    },
  }
</script>
