import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    showModal: false
  }),
  actions: {
    show() {
      this.showModal = true
    },
    hide() {
      this.showModal = false
    }
  }
})
