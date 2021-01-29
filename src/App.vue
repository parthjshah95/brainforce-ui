<template>
  <div id="app" class="container" :style="show_cursor?'':no_cursor_style">
    <!-- <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/> -->
    <div class="text">
      <h1>Accessible programming</h1>
      <h3>Python</h3>

    </div>
    <input
      :value="input"
      id="input"
      @input="onInputChange"
      placeholder="Start coding!"
    />
    <div class="dropdown-div">
      <div>
        <button class="start-button">Start</button>
        <span v-if="countingTime">&emsp;Time: {{time}} seconds </span>
      </div>
      <div>
        <span>Keyboard layout:&emsp;&emsp;</span>
        <select v-model="layout" class="dropdown" @change="changeLayout($event)">
          <option v-for="l in allLayouts" :key="l">{{l}}</option>
        </select>
      </div>      
    </div>
    
    <SimpleKeyboard 
      ref="SimpleKeyboard"
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


export default {
  name: 'App',
  components: {
    Block,
    'SimpleKeyboard': SimpleKeyboard
  },
  data(){
    return {
      no_cursor_style: "cursor: none;",
      show_cursor: true,
      input: "",
      layout: "python",
      allLayouts: [
        "qwerty",
        "custom",
        "python"
      ],
      countingTime: false
    }
  },
  methods: {
    onChange(input) {
      this.input = input;
      this.focus();
    },
    onKeyPress(button) {
      console.log("button", button);
      this.focus();
    },
    onInputChange(input) {
      this.input = input.target.value;
      this.focus();
    },
    focus(){
      this.$refs.input.focus();
      // document.getElementById("input").focus();
    },
    changeLayout(event){
      console.log(event);
      this.$refs.SimpleKeyboard.changeLayout(this.layout);
    }
  },
  computed: {
      time(){

      }
  }
}
</script>

<style lang="scss">

body{
  height:100%;
}
html{
  height:100%;
}
.container{
  // height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
}
.text{
  flex-grow: 1;
  flex-shrink: 3;
  width: 100%;
  min-height: 10;
}
span{
  margin: 5px 10px;
}
#input{
  width: calc(100% - 40px);
  margin: 10px auto;
  height: 40px;
  padding: 10px 20px;
  border-radius: 15px;
  border: solid 1px lightgrey;
  font-size: 1.3rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.dropdown-div{
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  // box-shadow: 2px 2px 2px 1px rgba(30, 20, 10, 0.2);
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}
$btn-color:#fc5603;
.dropdown{
  text-decoration: none;
  width: max-content;
  border-radius: 5px;
  color: white;
  border: 2px solid $btn-color;
  background-color: $btn-color;
  transition: 0.3s;
  padding: 5px 10px;
  cursor: pointer;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;    
  font-size: 1.3rem;
  &:hover{
    border: 2px solid $btn-color;
    background-color: white;
    color: #BF360C;
  }
  &:active{
    background-color: #FFCCBC;
  }
  &:focus{
    outline: none;
  }
}
.start-button{
  @extend .dropdown;
}
</style>
