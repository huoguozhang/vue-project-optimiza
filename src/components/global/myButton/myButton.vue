<template>
  <div class="my-button" :style="styles[type]" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'myButton',
  props: {
    type: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      styles: {
        primary: {
          background: '#409EFF',
          color: '#ffffff'
        },
        normal: {
          background: '#fff',
          color: '#909399',
          border: '1px solid rgb(204,204,204)'
        }
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
  .my-button{
    display: inline-block;
    width: 128px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none !important;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 1px;
    background: #fff;
  }
</style>
<style>
  .my-button+.my-button{
    margin-left: 32px;
  }
</style>
