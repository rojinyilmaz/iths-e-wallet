<template>
  <section class="createcard">
    <main  class="createcards">
      <span></span>
    <label for="number">CARD NUMBER</label>
    <input type="text" name="cardnumber" placeholder="XXXX XXXX XXXX XXXX" v-model="cardlist.cardnumber">

    <label for="cardholdername">CARDHOLDER NAME</label>
    <input type="text" name="cardholdername" placeholder="Firstname Lastname" v-model="cardlist.cardholdername">

<div class="datecontainer">
    <div class="monthcontainer">
    <label for="month">Month</label>
    <select class="month" name="month" v-model="cardlist.month"> 
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
     </select> 
      </div>
      <div class="yearcontainer">
    <label for="year">Year</label>
     <select class="year" name="year" v-model="cardlist.year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>      
     </select>
      </div>
    </div>

    <label for="vendor">Vendor</label>
<select name="Vendor" v-model="cardlist.vendor">
    <option value="bitcoin">Bitcoin Inc</option>
    <option value="blockchain">Blockchain Ink</option>
    <option value="evil">Evil Corp</option>
    <option value="ninja">Ninja Bank</option>
</select>

<div class="linkcontainer">
  <router-link to="/" tag="button" v-bind="cardlist" @click.native="addcard">Create Card</router-link>
</div>
    </main>
  </section>
</template>


<script>
export default {
name: "createcards",
props: {
  cardlist: Object,
},
methods:{
        addcard() {
            this.$root.$data.cardlist.push(
              this.cardlist)
        },
  }
}
</script>


<style scoped>
.createcards {
    margin: 2rem 0 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 0 1rem;;
    }
 input, select {
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.8rem;
    margin: 0 0 .6rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    width: 23rem;
}
.datecontainer {
display: flex;
grid-gap: 1rem;
}
    .monthcontainer {
      display: flex;
      flex-direction: column;
  }
    .yearcontainer {
      display: flex;
      flex-direction: column;
  }

    .month, .year {
    width: 11rem;
    }

label {
    font-size: 1rem;
}
</style>