import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  data: () => ({
    cardlist: [
      {id: 1, cardnumber: "2778 9910 7189 7281", cardholdername: "Elena Manilla", month: "06", year: "21", vendor: "bitcoin"},
      {id: 2, cardnumber: "1029 9382 9281 0191", cardholdername: "Richard Evans", month: "12", year: "22", vendor: "ninja"},
      {id: 3, cardnumber: "9819 7181 9172 8123", cardholdername: "Marie Durie", month: "07", year: "23", vendor: "evil"},
    ]
  }),

  render: h => h(App)
}).$mount('#app')