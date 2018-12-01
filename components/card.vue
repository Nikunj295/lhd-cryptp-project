<template>
<div>
       

    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{name}}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
     {{price_usd}}
     
      
    </div>
  </div>
  <footer class="card-footer">
    {{percent_change_1h}}
  </footer>
    </div>
</div>

</template>

<script>
export default {
  props: ["name", "price_usd", "percent_change_1h", "symbol"],
  computed: {
    color() {
      return this.percent_change_1h > 0 ? "inc" : "dec";
    }
  }
};
</script>

<style scoped>
.card{
    align-items: center;
    justify-content: center;
}
.inc {
  color: green;
}
.dec {
  color: red;
}
</style>
