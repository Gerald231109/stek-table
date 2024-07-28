<template>
  <div class="table__item">
    <p class="company item__field">{{ company.name }}</p>
    <p class="director item__field">{{ company.director }}</p>
    <p class="number item__field">{{ company.phone }}</p>
    <a class="close item__field" @click.prevent="hideItem(company.id)"></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCompaniesStore from '@/stores/companies'
import usePaginationStore from '@/stores/page'
import { mapActions, mapState } from 'pinia'
export default defineComponent({
  name: 'TableItem',
  props: ['company'],
  computed: {
    ...mapState(useCompaniesStore, ['searchResult'])
  },
  methods: {
    hideItem(id: number) {
      this.hideCompany(id)
      this.pageCheck(this.searchResult)
    },
    ...mapActions(usePaginationStore, ['pageCheck']),
    ...mapActions(useCompaniesStore, ['hideCompany'])
  }
})
</script>

<style scoped>
p {
  font-size: 1.2rem;
}

.table__item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 1.4rem 0 2rem 0;
  border-bottom: 1px solid #e2e2e2;
}

.item__field {
  color: #1b1b1b;
}

.company {
  font-weight: 700;
  color: #0cb4f1;
}

.close {
  background: url(./icons/delete.svg) no-repeat center;
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}
</style>
