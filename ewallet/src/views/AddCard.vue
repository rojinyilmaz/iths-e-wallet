<template>
  <div class="addcard">
    <Card />
    <CardForm />
  </div>
</template>

<script>
import Card from "@/components/Card"
import CardForm from "@/components/CardForm"

export default {
  name: 'AddCard',
  components: {
   Card,
   CardForm
  }
}
</script>