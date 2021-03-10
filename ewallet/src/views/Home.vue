<template>
  <div class="home">
    <Top headline="E-WALLET" description="ACTIVE CARD"/>
    <CardStack />
      <router-link class="addCard" to="/addCard" tag="button">ADD A NEW CARD</router-link>
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