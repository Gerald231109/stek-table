import { defineStore } from 'pinia'

export default defineStore('pagination', {
  state: () => ({
    page: 1
  }),
  actions: {
    pageCheck(array: Array<any>) {
      Math.ceil(array.length / 5) < this.page && this.page--
    },
    resetPage() {
      this.page = 1
    },
    nextPage(max: number) {
      this.page < max && this.page++
    },
    previousPage() {
      this.page > 1 && this.page--
    }
  }
})
