<template>
  <div class="home">
    <Top headline="E-WALLET" description="ACTIVE CARD"/>
    <CardStack />

    <button class="linkaddcard">
    <router-link class="addCard" to="/AddCard" >ADD A NEW CARD</router-link>
</button>
  </div>
</template>

<script>
import Top from "@/components/Top"
import CardStack from "@/components/CardStack"

export default {
  name: 'Home',
  components: {
   Top,
   CardStack
  },
  computed:{
    creditcards(){
      return this.$root.$data.cardlist
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>