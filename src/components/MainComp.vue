<template>
  <div class="table">
    <div class="table__item">
      <p class="title__item filter__name" :class="{ activeFilter: sortCompany }" @click="sortedCompany">
        <img src="./icons/sort-a-z.svg" class="icon" alt="" v-if="sortCompany && !sortComp" />
        <img src="./icons/sort-z-a.svg" class="icon" alt="" v-else-if="sortCompany && sortComp" />
        Название компании
      </p>
      <p class="title__item filter__director" :class="{ activeFilter: sortDirector }" @click="sortedDirector">
        <img src="./icons/sort-a-z.svg" class="icon" alt="" v-if="sortDirector && !sortName" />
        <img src="./icons/sort-z-a.svg" class="icon" alt="" v-else-if="sortDirector && sortName" />
        ФИО директора
      </p>
      <p class="title__item">Номер телефона</p>
    </div>
    <div v-for="company in searchResult.filter((comp) => !hidenComps.includes(comp.id)).slice((page - 1) * 5, 5 * page)"
      :key="company.id">
      <table-item :company="company"></table-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import useCompaniesStore from '@/stores/companies'
import usePaginationStore from '@/stores/page'
import TableItem from '@/components/TableItem.vue'

export default defineComponent({
  name: 'MainComp',
  components: {
    TableItem
  },
  data() {
    return {
      sortCompany: false,
      sortDirector: false
    }
  },
  computed: {
    ...mapState(useCompaniesStore, ['searchResult', 'sortComp', 'sortName', 'hidenComps']),
    ...mapState(usePaginationStore, ['page'])
  },
  methods: {
    sortedCompany() {
      this.sortByCompany()
      this.sortCompany = true
      this.sortDirector = false
    },
    sortedDirector() {
      this.sortByDirector()
      this.sortDirector = true
      this.sortCompany = false
    },
    ...mapActions(useCompaniesStore, ['sortByCompany', 'sortByDirector'])
  }
})
</script>

<style scoped>
.table {
  display: grid;
  grid-auto-flow: row;
  background-color: #f7f7f7;
  border-radius: 0.4rem;
  padding: 0.2rem 1.6rem;
  box-shadow: 0px 18px 15px 0px hwb(0 44% 55% / 0.555);
  padding-bottom: 2rem;
}


.table__item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  padding: 1.4rem 0 2rem 0;
  border-bottom: 1px solid #e2e2e2;
}

.filter__name,
.filter__director {
  cursor: pointer;
}

p {
  font-size: 1.2rem;
}

.title__item {
  color: #9eaab4;
  user-select: none;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 0.5rem;
}

.activeFilter {
  color: black;
  font-weight: 700;
}

.icon {
  width: 2rem;
  height: 2rem;
}
</style>
