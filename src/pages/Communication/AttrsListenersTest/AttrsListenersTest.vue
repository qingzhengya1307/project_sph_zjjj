<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <!-- 二次封装的HintButton按钮的时候，把人家el-button需要的数据传递过去 -->

    <HintButton
      type="success"
      icon="el-icon-plus"
      title="我是中国人"
      @click="handler"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "./HintButton";
export default {
  name: "AttrsListenersTest",
  components: {
    HintButton,
  },
  methods: {
    handler() {
      alert("弹弹弹");
    },
  },
};
</script>
