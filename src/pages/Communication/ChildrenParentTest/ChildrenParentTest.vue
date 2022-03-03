<template>
  <div>
    <h2>BABA有存款: {{ money }}</h2>
    <button @click="JieQianFromXM(100)">找小明借钱100</button><br />
    <button @click="JieQianFromXH(150)">找小红借钱150</button><br />
    <button @click="JieQianAll(200)">找所有孩子借钱200</button><br />
    <button @click="SendInfo">我是baba</button>
    <br />
    <!-- 小明 -->
    <Son ref="xm" />
    <br />
    <!-- 小红 -->
    <Daughter ref="xh"/>
  </div>
</template>

<script>
import Son from "./Son";
import Daughter from "./Daughter";

export default {
  name: "ChildrenParentTest",
  data() {
    return {
      money: 1000,
    };
  },

  methods: {
    //找儿子借钱
    JieQianFromXM(money) {
      //父组件的数据累加100
      this.money += money;
      this.$refs.xm.money -= money;
    },
    JieQianFromXH(money) {
      //父组件的数据累加150
      this.money += money;
      this.$refs.xh.money -= money;
    },
    JieQianAll(money){
      this.money += 2*money;
      this.$children.forEach(item=>item.money-=money);
      //不建议用枚举获取子组件：因为没办法确定到底是那个子组件
      // this.$children[0].money -=money;

    },
    SendInfo(){
      //在父组件中获取到子组件（数据+方法）
      this.$refs.xm.tinghua();
    }
  },

  components: {
    Son,
    Daughter,
  },
};
</script>

<style></style>
