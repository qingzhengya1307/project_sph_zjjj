<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <!-- 没有用户名：未登录 -->
          <p v-if="!userName">
            <span>请</span>
            <!-- 声明式导航：router-link务必要有to属性 -->
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
          <!-- 登录了 -->
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- router-link组件本省就是一个a标签 -->
        <router-link to="/home" class="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      //响应式数据，用于收集表单元素文本内容
      keyword: "",
    };
  },
  methods: {
    //搜索按钮的事件处理函数，用于跳转到search路由组件当中
    goSearch() {
      //代表的是如果有query参数也带过去
      if (this.$route.query) {
        let loction = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        loction.query = this.$route.query;
        this.$router.push(loction);
      }
    },
    //退出登录
    async logout() {
      //退出登录需要做的事情
      //1:需要发请求，通知服务器退出登录【清除一些数据：token】
      //2:清除项目当中的数据【userInfo、token】
      try {
        //如果退出成功
        await this.$store.dispatch("userLogout");
        //回到首页
        this.$router.push("/home");
      } catch (error) {}
    },
  },
  mounted() {
    //通过全局事件总线清除关键字
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  computed: {
    //用户名信息
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
