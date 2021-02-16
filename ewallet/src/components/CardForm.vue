<template>
<section>
<input type="number" v-model="cardnumber"/>

<input type="text" v-model="cardholder"/>

<select v-model="vendor">
  <option value="bitcoin">Bitcoin bank</option>
  <option value="ninja">Ninja bank</option>
    <option value="blockchain">Block chain bank</option>
      <option value="evil">Evil bank</option>
</select>
<button @click="addCard">
Add card
</button>
</section>


</template>

<script>
export default {
name: "CardForm",
data(){
    return{
       cardnumber:"",
       cardholder:"",
       vendor:""
    }
}
,
methods: {
    addCard(){
        this.$root.cards.push({cardnumber:this.cardnumber,cardholder:this.cardholder,vendor:this.vendor})
        this.$router.push("/")
    }
}
}
</script>

<style>

</style>