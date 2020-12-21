<template>
  <div id="app" class="container" :style="show_cursor?'':no_cursor_style">
    <!-- <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/> -->
    <input
      :value="input"
      class="input"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start"
    >
    <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
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
      input: ""
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
.container{
  height: 100%;
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
</style>
