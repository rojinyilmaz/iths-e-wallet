<template>
  <section>
<Card v-for="card in cards" :key="card.cardnumber"/>

      </section>
</template>

<script>
import Card from "@/components/Card"
export default {
name: "CardStack",
components: {
    Card
},
computed: {
cards(){
    return this.$root.cards
}
}
}
</script>

<style>

</style>