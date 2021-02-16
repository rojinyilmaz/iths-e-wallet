<template>
  <div class=card>
     
      <header>
<img alt="chip-dark" src="../assets/chip-dark.svg"/>
      </header>
     <h2>1234 5671 8971 1223</h2> <!-- {{number}} -->
     <h6>CARDHOLDER NAME</h6> <!-- {{cardholder}} -->
     <h3>NAME SURNAME</h3> <!-- {{name}} -->
  </div>
</template>

<script>
export default {
    name: "Card"

}
</script>

<style scoped>
.card{
 background:#eba43a;
  height: 15.5rem;
  width: 22.5rem;
  border-radius: 0.49rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

header{
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

img{
   height: 70px;
   width: 70px;
   margin-top: 1rem;
}

h2{
  align-items: flex-start;
  font-family: "Lucida Console", "Courier New", monospace;
     font-weight: normal;
      -webkit-text-stroke: 0.5px black;
     color: #000000;
}

h3{
   align-items: flex-start;
  font-family: "Courier New", monospace;
  font-weight: normal;
-webkit-text-stroke: 0.2px black;
  color: #000000;
}


h6{
 align-items: flex-start;
  font-family: "Courier New", monospace;
  font-weight: normal;
  color: #000000;
}

</style>