<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
      font-family: PT Mono,monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 36rem;
  padding: 1rem;
  box-sizing: border-box;
  
}
body {
  background-color: rgb(251, 251, 251);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}


    button {
       display: grid;
    place-items: center;
    align-items: center;
    height: 4rem;
    width: 50%;
    margin: 2rem 0;
    border: .125rem solid #000;
    border-radius: .5rem;
    background-color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
            &:hover {  
            background: rgb(25, 25, 25);
            color: #ddd;
          }
            &:active {
            background: rgb(25, 25, 25);
            color: #ddd;
            }
    }
  
</style>