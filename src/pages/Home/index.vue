<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer />
    <Recommend />
    <Rank></Rank>
    <Like></Like>
    <!-- 实现floor组件的循环，由父组件向子组件传递参数 -->
    <Floor
      v-for="(floor, index) in floorList"
      :key="floor.id"
      :list="floor"
    ></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },

  mounted() {
    this.$store.dispatch("getFloorList");
    // 获取用户信息在首页展示
    this.$store.dispatch("getUserInfo");
  },
};
</script>

<style>
</style>