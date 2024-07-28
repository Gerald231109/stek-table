import { defineStore } from 'pinia'
import type Company from '@/types/company.ts'
export default defineStore('company', {
  state: () => ({
    companies: [
      { id: 1, name: 'ТехноСервис', director: 'Иванов Иван Иванович', phone: '+7 (123) 456-78-90' },
      {
        id: 2,
        name: 'ГлобалТрейд',
        director: 'Петрова Анна Сергеевна',
        phone: '+7 (987) 654-32-10'
      },
      {
        id: 3,
        name: 'ЭкоСтрой',
        director: 'Сидоров Алексей Викторович',
        phone: '+7 (456) 789-01-23'
      },
      {
        id: 4,
        name: 'ФинТек',
        director: 'Кузнецова Мария Александровна',
        phone: '+7 (321) 654-09-87'
      },
      {
        id: 5,
        name: 'АгроПром',
        director: 'Смирнов Владислав Петрович',
        phone: '+7 (654) 321-98-76'
      },
      {
        id: 6,
        name: 'Инновации XXI века',
        director: 'Демидова Ольга Юрьевна',
        phone: '+7 (159) 753-48-26'
      },
      {
        id: 7,
        name: 'СтройЮг',
        director: 'Иванова Светлана Николаевна',
        phone: '+7 (852) 963-14-57'
      },
      { id: 8, name: 'МедТех', director: 'Павлов Алексей Сергеевич', phone: '+7 (147) 258-36-79' },
      {
        id: 9,
        name: 'Космические технологии',
        director: 'Егорова Анна Викторовна',
        phone: '+7 (963) 147-25-89'
      },
      {
        id: 10,
        name: 'ФудТренд',
        director: 'Ковалев Дмитрий Юрьевич',
        phone: '+7 (987) 654-32-11'
      },
      {
        id: 11,
        name: 'АвтоМир',
        director: 'Сидорова Наталья Петровна',
        phone: '+7 (254) 986-73-21'
      },
      {
        id: 12,
        name: 'ЭкоСистема',
        director: 'Никифоров Борис Владимирович',
        phone: '+7 (369) 258-14-67'
      },
      {
        id: 13,
        name: 'СветТех',
        director: 'Морозова Елена Александровна',
        phone: '+7 (321) 456-78-12'
      },
      {
        id: 14,
        name: 'Модные Технологии',
        director: 'Котенков Станислав Сергеевич',
        phone: '+7 (654) 123-45-67'
      },
      {
        id: 15,
        name: 'БиоМир',
        director: 'Цветкова Вероника Викторовна',
        phone: '+7 (321) 654-87-90'
      },
      {
        id: 16,
        name: 'ТранспортСервис',
        director: 'Давыдов Роман Андреевич',
        phone: '+7 (753) 852-14-36'
      },
      {
        id: 17,
        name: 'ГринКард',
        director: 'Федоров Денис Сергеевич',
        phone: '+7 (963) 258-74-12'
      },
      {
        id: 18,
        name: 'Стратегия Успеха',
        director: 'Тихомирова Галина Михайловна',
        phone: '+7 (741) 852-93-65'
      },
      {
        id: 19,
        name: 'Финансовый Гуру',
        director: 'Яковлева Дарья Александровна',
        phone: '+7 (159) 753-68-41'
      },
      {
        id: 20,
        name: 'СпортМакс',
        director: 'Лебедев Игорь Сергеевич',
        phone: '+7 (456) 789-12-34'
      },
      {
        id: 21,
        name: 'ТурнирГрад',
        director: 'Мартынова Татьяна Валентиновна',
        phone: '+7 (321) 654-65-87'
      },
      {
        id: 22,
        name: 'Комплексные Решения',
        director: 'Петров Степан Васильевич',
        phone: '+7 (654) 789-01-12'
      },
      {
        id: 23,
        name: 'Солнечная Энергия',
        director: 'ТерентьевАлександр Ильич',
        phone: '+7 (852) 963-75-48'
      },
      {
        id: 24,
        name: 'Интернет-Магазин',
        director: 'Савельева Оксана Дмитриевна',
        phone: '+7 (159) 753-24-68'
      },
      {
        id: 25,
        name: 'Креативная Студия',
        director: 'Алексеев Сергей Анатольевич',
        phone: '+7 (369) 789-12-65'
      }
    ] as Array<Company>,
    searchResult: [
      { id: 1, name: 'ТехноСервис', director: 'Иванов Иван Иванович', phone: '+7 (123) 456-78-90' },
      {
        id: 2,
        name: 'ГлобалТрейд',
        director: 'Петрова Анна Сергеевна',
        phone: '+7 (987) 654-32-10'
      },
      {
        id: 3,
        name: 'ЭкоСтрой',
        director: 'Сидоров Алексей Викторович',
        phone: '+7 (456) 789-01-23'
      },
      {
        id: 4,
        name: 'ФинТек',
        director: 'Кузнецова Мария Александровна',
        phone: '+7 (321) 654-09-87'
      },
      {
        id: 5,
        name: 'АгроПром',
        director: 'Смирнов Владислав Петрович',
        phone: '+7 (654) 321-98-76'
      },
      {
        id: 6,
        name: 'Инновации XXI века',
        director: 'Демидова Ольга Юрьевна',
        phone: '+7 (159) 753-48-26'
      },
      {
        id: 7,
        name: 'СтройЮг',
        director: 'Иванова Светлана Николаевна',
        phone: '+7 (852) 963-14-57'
      },
      { id: 8, name: 'МедТех', director: 'Павлов Алексей Сергеевич', phone: '+7 (147) 258-36-79' },
      {
        id: 9,
        name: 'Космические технологии',
        director: 'Егорова Анна Викторовна',
        phone: '+7 (963) 147-25-89'
      },
      {
        id: 10,
        name: 'ФудТренд',
        director: 'Ковалев Дмитрий Юрьевич',
        phone: '+7 (987) 654-32-11'
      },
      {
        id: 11,
        name: 'АвтоМир',
        director: 'Сидорова Наталья Петровна',
        phone: '+7 (254) 986-73-21'
      },
      {
        id: 12,
        name: 'ЭкоСистема',
        director: 'Никифоров Борис Владимирович',
        phone: '+7 (369) 258-14-67'
      },
      {
        id: 13,
        name: 'СветТех',
        director: 'Морозова Елена Александровна',
        phone: '+7 (321) 456-78-12'
      },
      {
        id: 14,
        name: 'Модные Технологии',
        director: 'Котенков Станислав Сергеевич',
        phone: '+7 (654) 123-45-67'
      },
      {
        id: 15,
        name: 'БиоМир',
        director: 'Цветкова Вероника Викторовна',
        phone: '+7 (321) 654-87-90'
      },
      {
        id: 16,
        name: 'ТранспортСервис',
        director: 'Давыдов Роман Андреевич',
        phone: '+7 (753) 852-14-36'
      },
      {
        id: 17,
        name: 'ГринКард',
        director: 'Федоров Денис Сергеевич',
        phone: '+7 (963) 258-74-12'
      },
      {
        id: 18,
        name: 'Стратегия Успеха',
        director: 'Тихомирова Галина Михайловна',
        phone: '+7 (741) 852-93-65'
      },
      {
        id: 19,
        name: 'Финансовый Гуру',
        director: 'Яковлева Дарья Александровна',
        phone: '+7 (159) 753-68-41'
      },
      {
        id: 20,
        name: 'СпортМакс',
        director: 'Лебедев Игорь Сергеевич',
        phone: '+7 (456) 789-12-34'
      },
      {
        id: 21,
        name: 'ТурнирГрад',
        director: 'Мартынова Татьяна Валентиновна',
        phone: '+7 (321) 654-65-87'
      },
      {
        id: 22,
        name: 'Комплексные Решения',
        director: 'Петров Степан Васильевич',
        phone: '+7 (654) 789-01-12'
      },
      {
        id: 23,
        name: 'Солнечная Энергия',
        director: 'ТерентьевАлександр Ильич',
        phone: '+7 (852) 963-75-48'
      },
      {
        id: 24,
        name: 'Интернет-Магазин',
        director: 'Савельева Оксана Дмитриевна',
        phone: '+7 (159) 753-24-68'
      },
      {
        id: 25,
        name: 'Креативная Студия',
        director: 'Алексеев Сергей Анатольевич',
        phone: '+7 (369) 789-12-65'
      }
    ] as Array<Company>,
    hidenComps: [] as Array<number>,
    sortComp: true,
    sortName: true
  }),
  actions: {
    newCompany(comp: Company) {
      this.companies.push(comp)
      this.searchResult.push(comp)
    },
    hideCompany(id: number) {
      this.hidenComps.push(id)
      this.searchResult = this.searchResult.filter((comp) => !this.hidenComps.includes(comp.id))
    },
    sortByCompany() {
      let result
      if (this.sortComp) {
        result = this.searchResult.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        this.sortComp = false
      } else {
        result = this.searchResult.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
        this.sortComp = true
      }
      this.sortName = true
      this.searchResult = result
    },
    sortByDirector() {
      let result
      if (this.sortName) {
        result = this.searchResult.sort((a, b) => {
          return a.director.localeCompare(b.director)
        })
        this.sortName = false
      } else {
        result = this.searchResult.sort((a, b) => {
          return b.director.localeCompare(a.director)
        })
        this.sortName = true
      }
      this.sortComp = true
      this.searchResult = result
    },
    search(text: string) {
      const searchReg = new RegExp('.*' + text.toLowerCase() + '.*')
      this.searchResult = this.companies.filter((comp) =>
        searchReg.test(comp.director.toLowerCase())
      )
    }
  }
})
