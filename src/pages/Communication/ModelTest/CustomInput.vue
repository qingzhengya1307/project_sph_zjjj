<template>
  <div style="background: #ccc; height: 50px;">
    <h2>input包装组件----{{value}}</h2>
    <input :value="value"  @input="$emit('input',$event.target.value)"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CustomInput',
    props:['value']
  }
</script>
