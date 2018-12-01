<template>
  <section class="container">
    <div>
       <div class="span">
            
            <img src="http://www.ttools.pl/wp-content/uploads/2018/02/kryptowaluty-ranking.png" style="width=100%; height=100%;">
        </div>
      
      
      <div class="h1" style="color: black;">
  Crypto Currency
  </div>
  <h2 class="subtitle">
        local hack day project
      </h2>
      <div class="links">
        <nuxt-link class="button--green" to="/currency">Get Currency Updates</nuxt-link>
        
      </div>
    </div>
  </section>
</template>



<style>
.container {
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 2px;
}

.subtitle {
  font-weight: 300;
  font-size: 80px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.span {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: "~assets/logo.png";
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.h1{
    font-family:'Courier New', Courier, monospace;
    font-size: 70px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    padding-bottom: 5px;
    
}
</style>

