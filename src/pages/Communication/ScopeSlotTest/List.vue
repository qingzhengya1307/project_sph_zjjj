<template>
  <ul>
    <li v-for="(todo,index) in todos" :key="index">
       <!-- 坑：熊孩子挖到坑，父亲填坑 -->
       <!-- 数据来源于父亲：但是子组件决定不了结构与外网-->
       <slot :todo="todo"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>