<template>
    <div class="modal__bg">
        <div class="modal">
            <p class="modal__title">Добавить организацию</p>
            <form class="modal__form">
                <div class="form__fields">
                    <input type="text" class="form__name" placeholder="Название компании" v-model="name" @input="checkForm">
                    <input type="text" class="form__phone" placeholder="Номер телефона" v-model="phone" @input="checkForm">
                    <input type="text" class="form__director" placeholder="ФИО директора" v-model="director"
                        @input="checkForm">
                </div>
                <div class="form__btns">
                    <button class="form__cancel" @click.prevent="hide">Отмена</button>
                    <button type='submit' class="form__submit" :class="{ 'disable': !avaible }"
                        @click.prevent="addCompany">ОК</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'pinia';
import useModalStore from '@/stores/modal'
import useCompaniesStore from '@/stores/companies'
export default defineComponent({
    name: 'ModalComp',
    data() {
        return {
            name: '',
            phone: '',
            director: '',
            avaible: false

        }
    },
    computed: {
        ...mapState(useCompaniesStore, ['companies'])
    },
    methods: {
        checkForm() {
            if (this.name.length > 3 && this.phone.length > 3 && this.director.length > 3) {
                this.avaible = true
                return;
            } this.avaible = false
        },
        addCompany() {
            const company = {
                id: this.companies.length + 1,
                name: this.name,
                phone: this.phone,
                director: this.director
            }
            this.newCompany(company)
            this.hide()
            this.avaible = false
            this.name = ''
            this.phone = ''
            this.director = ''
        },
        ...mapActions(useCompaniesStore, ['newCompany']),
        ...mapActions(useModalStore, ['hide'])
    }
})
</script>

<style scoped>
.modal__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
}

.modal {
    background-color: #292c39;
    padding: 1.8rem 2rem;
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
    align-items: center;
    grid-template-rows: min-content 1fr;
    grid-row-gap: 1.6rem;
    box-shadow: 10px 28px 35px 0px #2422229f;
}

.modal__title {
    padding-bottom: .6rem;
    font-size: 2rem;
    border-bottom: 1px solid;
}

.modal__form {
    display: grid;
    grid-row-gap: 2rem;

}

.form__fields {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 1rem;
    width: 28rem;
}

input {
    height: 3rem;
    padding: .9rem;
    border: none;
    font-size: 1.4rem;

    &:focus {
        outline: none;
    }
}

.form__btns {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    justify-content: space-between;
}

button {
    border: none;
    font-size: 1.4rem;
    padding: .4rem 1.4rem;
    transition: background-color .3s;
    cursor: pointer;
}

.form__cancel:hover {
    background-color: rgb(209, 147, 147);
}

.form__submit:hover {
    background-color: rgb(147, 235, 161);
}

.disable {
    background-color: #333333;
    color: #6b6b6b;
    pointer-events: none;
}
</style>