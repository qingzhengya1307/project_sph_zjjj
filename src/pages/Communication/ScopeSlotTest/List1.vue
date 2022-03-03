<template>
  <ul>
    <li v-for="(todo,index) in data" :key="index">
       <!-- 坑：熊孩子挖到坑，父亲填坑 -->
       <!-- 数据来源于父亲：但是子组件决定不了结构与外网-->
       <slot :row="todo" :index="index "></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List1',
  props: {
    data: Array
  }
}
</script>