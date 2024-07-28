<template>
  <div class="page">
    <a class="page__back page__btn" @click.prevent="previousPage"></a>
    <p class="page__number">{{ 'Страница ' + page }}</p>
    <a class="page__forward page__btn"
      @click.prevent="nextPage(Math.ceil(searchResult.filter((comp) => !hidenComps.includes(comp.id)).length / 5))"></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import usePaginationStore from '@/stores/page'
import useCompaniesStore from '@/stores/companies'
import { mapState, mapActions } from 'pinia'
export default defineComponent({
  name: 'FootComp',
  computed: {
    ...mapState(usePaginationStore, ['page']),
    ...mapState(useCompaniesStore, ['searchResult', 'hidenComps'])
  },
  methods: {
    ...mapActions(usePaginationStore, ['nextPage', 'previousPage'])
  }
})
</script>

<style scoped>
.page {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-items: end;
  justify-content: end;
  align-items: end;
}

.page__back {
  background: url(./icons/arrow-left.svg) no-repeat center;
}

.page__number {
  font-size: 1.4rem;
  color: #f7f7f7;
  font-weight: 700;
}

.page__forward {
  background: url(./icons/arrow-right.svg) no-repeat center;
}

.page__btn {
  display: block;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
}
</style>
