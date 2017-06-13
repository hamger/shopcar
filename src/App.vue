<template>
  <div id="app">
    <p>
    <router-link to="/shopping cart">Go to shopCar</router-link>
    <router-link to="/pageb">Go to pageb</router-link>
    </p>
    <router-view></router-view>    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  watch:{
    items: {
      handler: function (val,oldVal) {
        this.hasData = val.length > 0 ? true : false
        var temp = 0
        for (var i = 0; i < val.length; i++) {
          temp += val[i].totalPrice
        }
        this.money = temp
      },
      deep:true
    },
  },
  methods:{
    select(item){
      item.isSelect = !item.isSelect
    },
    decreat(item){
      if (item.amount > 0) {
        item.amount -= 1  
        item.totalPrice = item.unitPrice * item.amount
      }
    },
    increat(item){
      item.amount += 1  
      item.totalPrice = item.unitPrice * item.amount
    },
    dele(index){
      if(confirm('您确定要删除吗？')){
        this.items.splice(index,1)
      }
    },
    selectAll(){
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].isSelect = true
      }
    },
    selectNone(){
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].isSelect = false
      }
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  margin: 10px auto;
}

.pointer {
  cursor: pointer;
}

h1, h2 {
  font-weight: normal;
}

.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid red;
  border-radius: 50%;
  margin: 10px;
}

.circleYellow {
  background-color:red;
}

.commodity {
  width: 50px;
  height: 50px;
  margin: 10px;
}

.amount {
  display: inline-block;
  padding: 5px;
  border: 1px solid #999;
}

.buttonAll div {
  float: left;
  width: 90px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border: 1px solid #F98D55;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
}
.accounts div {
  float: right;
  width: 90px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border: 1px solid #F98D55;
  border-radius: 4px;
  margin: 10px;
}

.accounts div.money {
  border: 0;
  margin:10px;
}

.care {
  padding: 5px;
  display: inline-block;
  border: 1px solid #aaa;
  border-radius: 6px;
}

router-link {
  color: red;
}
</style>
