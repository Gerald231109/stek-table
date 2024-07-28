<template>
  <div class="head">
    <div class="input-bg">
      <input type="text" class="search" placeholder="Найти по ФИО директора" v-model="searchText" @input="handleInput" />
    </div>
    <a href="#" class="add" @click.prevent="show">Добавить</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCompaniesStore from '@/stores/companies'
import usePaginationStore from '@/stores/page'
import { mapActions } from 'pinia'
import useModalStore from '@/stores/modal'

export default defineComponent({
  name: 'HeadComp',
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    handleInput() {
      this.search(this.searchText)
      this.resetPage()
    },
    ...mapActions(useModalStore, ['show']),
    ...mapActions(usePaginationStore, ['resetPage']),
    ...mapActions(useCompaniesStore, ['search'])
  }
})
</script>

<style scoped>
.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.input-bg {
  background-color: #eceff0;
  width: 50%;
  padding: 0.2rem;
  border-radius: 0.4rem;
}

.search {
  justify-self: start;
  border: none;
  width: 100%;
  padding: 0.9rem;
  padding-left: 2.5rem;
  background: url(./icons/search.svg) left no-repeat;

  &::placeholder {
    color: #4a4e52;
  }

  &:focus {
    outline: none;
  }
}

.add {
  justify-self: end;
  outline: none;
  text-decoration: none;
  padding: 0.9rem 2.2rem;
  background-color: #4a4e52;
  font-size: 1.2rem;
  color: #eceff0;
  border-radius: 0.4rem;
  transition:
    color,
    background-color 0.2s;

  &:hover {
    color: #fff;
    background-color: hsla(192, 5%, 43%, 0.911);
  }
}
</style>
