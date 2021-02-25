<template>
  <div class="addcard">
    <Top headline="ADD A NEW BANK CARD" description="NEW CARD"/>
    <Card v-bind:cardlist="cardlistadd"/>
    <CardForm v-bind:cardlist="cardlistadd"/>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from "@/components/Card"
import CardForm from "@/components/CardForm"


export default {
  name: 'AddCard',
  components: {
   Top,
   Card,
   CardForm
  },
  data() {
  return {
    cardlistadd: {
      id: Date.now(),
      cardholdername: '',
      cardnumber: '',
      month: '',
      year: '',
      vendor: ''
    }
  }
},
}
</script>