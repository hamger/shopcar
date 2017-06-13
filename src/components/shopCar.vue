<template>
  <div id="shopCar">
    <h2 class="title" v-text='title'></h2>
    <table>
      <thead>
        <tr>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item,index) in items'>
          <td>
            <span class="circle"  v-bind:class='{circleYellow:item.isSelect,pointer:true}' v-on:click="select(item)"></span>
            <img class='commodity pointer' :src="item.pic" alt="商品图片"  v-on:click="select(item)">
            <span>{{item.name}}</span>
          </td>
          <td>{{item.unitPrice}}</td>
          <td>
            <span v-on:click="decreat(item)" class='pointer care'>-</span>
            <span class="amount">{{item.amount}}</span>
            <span v-on:click="increat(item)" class='pointer care'>+</span>
          </td>
          <td>{{item.totalPrice}}</td>
          <td><span v-on:click="dele(index)" class='pointer'>删除</span></td>
        </tr>
      </tbody>
    </table>
    <div class="buttonAll" v-show="hasData">
      <div v-on:click='selectAll' class='pointer'>全选</div>
      <div v-on:click='selectNone' class='pointer'>取消全选</div>
    </div>
    <div class="accounts" v-show='hasData'>
      <div class='pointer'>结账</div>
      <div class='money'>总金额 {{ money }} 元</div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'shopCar',
  data () {
    return {
      title: 'Welcome to Your shopping cart',
      items:[{
        isSelect:false,
        pic:'/src/assets/0.jpeg',
        name:'橘子',
        unitPrice:10,
        amount:0,
        totalPrice:0
      },{
        isSelect:false,
        pic:'/src/assets/1.jpeg',
        name:'苹果',
        unitPrice:5,
        amount:0,
        totalPrice:0
      },{
        isSelect:false,
        pic:'/src/assets/2.jpeg',
        name:'柠檬',
        unitPrice:15,
        amount:0,
        totalPrice:0
      }],
      hasData:true,
      money:0
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
#shopCar {
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
