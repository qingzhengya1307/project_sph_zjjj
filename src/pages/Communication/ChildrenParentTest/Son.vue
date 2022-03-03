<template>
  <div style="background: #ccc; height: 50px;">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="geiQian(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  data () {
    return {
      money: 30000
    }
  },

  methods: {
    tinghua(){
        console.log('我是小明，我听爸爸的话');
    },
    geiQian(money){
       this.money-=money;
       this.$parent.money+=money;
    }
  }
}
</script>
