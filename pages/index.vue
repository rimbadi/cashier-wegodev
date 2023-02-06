<template>
  <v-row>
    <v-col cols="8" class="frameContent px-6">
      <Product></Product>
    </v-col>
    <v-col cols="4" class="frameContent white">
      <Order></Order>
    </v-col>
  </v-row>
</template>

<script>
import Order from '~/components/Order.vue';
import Product from '~/components/Product.vue';

export default {
    name: "IndexPage",
    components: { Product, Order }
}
</script>
<style scoped>


</style>