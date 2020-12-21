<template>
  <div class="card">
    
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$base-width: 200px;
$base-height: 120px;
$base-margin: 20px;
$expansion: 40px;

$border-radius: 10px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);

.card{
    margin: $base-margin;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    width: $base-width;
    height: $base-height;
    transition: 0.3s;
    background-color: white;
    &:hover{
      transition: 0.3s;
      width: $base-width + $expansion;
      height: $base-height + $expansion;
      margin: $base-margin - ($expansion/2);
    }
}

</style>
