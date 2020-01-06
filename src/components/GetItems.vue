<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card v-for="(item, i) in items.items" :key="i" raised>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
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
