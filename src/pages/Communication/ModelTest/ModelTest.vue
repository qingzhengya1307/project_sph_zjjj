<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg">
    <span>{{msg}}</span>
    <br>
    <h2>深入v-model原理</h2>
    <!-- 原生DOM当中是有oninput事件：当表单元素发生文本的变化的时候就会立即出发 -->
    <input type="text" :value="msg" @input=" msg = $event.target.value"/>
    <span>{{msg}}</span>
    <!--并非原生DOM：自定义组件-->
    <CustomInput :value="msg" @input="msg = $event"></CustomInput>    
    <CustomInput v-model="msg"></CustomInput>
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
         msg:"我爱塞北的大雪呀"
      }
    },
    components: {
      CustomInput
    }
  }
</script>
