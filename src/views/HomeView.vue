<template>
  <div class="container">
    <header-comp></header-comp>
    <main-comp></main-comp>
    <foot-comp></foot-comp>
    <modal-comp v-show="showModal"></modal-comp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComp from '@/components/HeadComp.vue'
import MainComp from '@/components/MainComp.vue'
import FootComp from '@/components/FootComp.vue'
import ModalComp from '@/components/ModalComp.vue'
import { mapState } from 'pinia'
import useModalStore from '@/stores/modal'
export default defineComponent({
  name: 'Home',
  components: { HeaderComp, MainComp, FootComp, ModalComp },
  computed: {
    ...mapState(useModalStore, ['showModal'])
  }
})
</script>

<style scoped>
.container {
  position: relative;
  display: grid;
  grid-row-gap: 1rem;
}
</style>
