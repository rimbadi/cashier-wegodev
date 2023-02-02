<template>
  <v-row>
    <v-col cols="8" class="frameContent px-6">
      <Products></Products>
    </v-col>
    <v-col cols="4" class="frameContent white">
      ORDER
    </v-col>
  </v-row>
</template>

<script>
import Products from '~/components/Products.vue';

export default {
    name: "IndexPage",
    components: { Products }
}
</script>
<style scoped>


</style>