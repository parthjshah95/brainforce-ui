<template>
  <div id="app" class="container" :style="show_cursor?'':no_cursor_style">
    <!-- <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/> -->

    <textarea
      :value="input"
      class="input"
      @input="onInputChange"
      placeholder="Enter the above text here using the virtual keyboard below."
    />
    <SimpleKeyboard 
      @onChange="onChange" 
      @onKeyPress="onKeyPress" 
      :input="input"
      :layout="layout"
    />
  </div>
</template>

<script>
import Block from './components/Block.vue'
import SimpleKeyboard from "./components/SimpleKeyboard";

let show_cursor = true
// let show_cursor = false

export default {
  name: 'App',
  components: {
    Block,
    SimpleKeyboard
  },
  data(){
    return {
      no_cursor_style: "cursor: none;",
      show_cursor: show_cursor,
      input: "",
      layout: "custom"
    }
  },
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
}
</script>

<style lang="scss">
$inp-height: 200px;
.container{
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  background-color: #eee;
}
body{
  height:100%;
}
html{
  height:100%;
}
.input{
  width: calc(100% - 40px);
  margin: 10px auto;
  height: $inp-height;
  padding: 10px 20px;
  border-radius: 15px;
  border: solid 1px lightgrey;
  font-size: 1.5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
