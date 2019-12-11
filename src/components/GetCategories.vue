<template>
  <div>
    <ul v-for="(item, i) in categories" :key="i">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GetCategories',
  props: ['categories']
}
</script>
