<template>
  <div class="card">
     
  <section class="cardcontainer" v-bind:class="cardlist.vendor" >
            <header class="cardheader">
                <img v-if="cardlist.vendor == 'bitcoin'" src="@/assets/chip-dark.svg" alt="Dark Chip Logo">
                <img v-if="cardlist.vendor !== 'bitcoin'" src="@/assets/chip-light.svg" alt="Light Chip Logo">
                <img class="vendoricon" v-if="cardlist.vendor" v-bind:src="require('@/assets/vendor-' + cardlist.vendor +  '.svg')"/>
            </header>

            <main class="cardmain">
            <h3>{{ cardlist.cardnumber }}</h3>
            </main>

            <aside class="overfooter">
                <span>CARDHOLDER NAME</span>
                <span>VALID THRU</span>
            </aside>

            <footer class="footer" >
                <h6>{{ cardlist.cardholdername }}</h6>
                <h6>{{ cardlist.month }}/{{ cardlist.year }}</h6>
            </footer>

         </section>
  </div>
</template>

<script>
export default {
       props: {
      cardlist: Object
    },
}

</script>

<style scoped>
.card{
   display: flex;
  align-self: center;
}

.cardcontainer {
    width: 23rem;
    padding: 1rem;
    height: 14.5rem;
    border-radius: .6rem;
    box-sizing: border-box;
    box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2.1rem;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.178);
    background: #d0d0d0;
    color: #fff;
    
}
.cardheader {
    display: flex;
    grid-column: auto / span 2;
    grid-row: auto / span 2;
    justify-content: space-between;
    align-items: flex-start;
}
        .vendoricon{
            padding: 0.5rem 0.5rem;
        }

.cardmain {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
    display: flex;
    justify-content: center;

}

h3{
  font-family: "Lucida Console", "Courier New", monospace;
     font-weight: bold;
      -webkit-text-stroke: 0.2px black;

}
        h4 {
            font-size: 1.6rem;
             letter-spacing: 0.27rem;
             font-family: "Courier New", monospace;
        }
   

.overfooter {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
    display: flex;
    justify-content: space-between;
    padding: 1.4rem 0 0 0rem;
    font-size: 14px;
}
.footer {
    grid-column: auto / span 2;
    grid-row: auto / span 1;
    display: flex;
    justify-content: space-between;
    padding: 0 0 -1rem 0;
}
    .bitcoin {
        background: #ffae34;
            color: black;
    }
    .blockchain {
        background: #8b58f9;
       color: #fff;
    }
    .evil {
        background:#f33355;
     color: #fff;
    }
    .ninja {
        background: #222;
       color: #fff;
    }


</style>