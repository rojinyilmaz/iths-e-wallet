import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data(){
    return {
      cards:[
        {
          number:"1234 5678 8922 1229",
          cardholder: "Name Surname",
          vendor: "bitcoin"
          }
      ]
    }
  },
  render: h => h(App)
}).$mount('#app')
