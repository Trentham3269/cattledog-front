<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in items.items" :key="i">
            <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>{{ item.desc }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
