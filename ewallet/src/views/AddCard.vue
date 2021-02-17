<template>
  <div class="addcard">
    <top headline="ADD A NEW BANK CARD" description="NEW CARD"/>
    <Card />
    <CardForm />
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
  }
}
</script>