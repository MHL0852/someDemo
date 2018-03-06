 <template>
  <div>
    <div style="display: none ">{{partnerrofit}}</div>


    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <p>酷送-冷链</p>
          </a>
        </div>
      </div>
    </nav>
    <div class="data">
      <div class="btn-group begin">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
          {{beginDate}} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" @click="beginDataChange">
          <template v-for="val in month">
            <li><a href="#">{{val}}月</a></li>
          </template>
        </ul>
      </div>
      <div class="btn-group end">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
          {{endDate}} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <template v-for="val in month">
            <li><a href="#" @click="endDataChange">{{val}}月</a></li>
          </template>
        </ul>
      </div>
      <button class="btn btn-info" @click="search"><span class="glyphicon glyphicon-search"></span>点击查询</button>
      <div class="btn-group partner">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
          合伙人 <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <template v-for="item in partnerList">
            <li><a href="#" @click="checkPartner">{{item}}</a></li>
          </template>
        </ul>
      </div>
      <i type="text" class="partnerList btn btn-default" @click="clearPartner">清空合伙人</i>
      <template v-for="val in partnerListShow">
        <i class="partners">{{val+" "}} <span class="delete glyphicon  glyphicon-remove"
                                              @click="clearOnePartner"></span></i>
      </template>
    </div>


    <div class="bar-chart">
      <a href="#/detail">
        <div id="main" style="width:90%;height:200px;"></div>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        beginTime: null,
        endTime: null,
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        beginDate: "开始月份",
        endDate: "结束月份",
        partnerList: ["李炎", "邹凌", "周建国", "李泽楷"],
        partnerListShow: [],
        partnerListShowIndex: [],
        incomeShow: 400,
        costShow: 300,
        partnerCost: [],
        partnerIncome: [],
        partnerIO: [
          {//第一个
            income: [3001, 2001, 5001, 4001, 5001, 6001, 3001, 1001, 3001, 4001, 5001, 6001],
            cost: [600, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600]
          },
          {//第二个
            income: [3002, 2002, 3002, 4002, 5002, 6002, 1002, 2002, 3002, 4002, 5002, 6002],
            cost: [1000, 2000, 3000, 4000, 5000, 6000, 1000, 2000, 3000, 4000, 5000, 6000]
          },
          {//第三个
            income: [1003, 2003, 3003, 4003, 5003, 6003, 1003, 2003, 3003, 4003, 5003, 6003],
            cost: [300, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600]
          },
          {//第四个
            income: [1004, 2004, 3004, 4004, 5004, 6004, 1004, 2004, 3004, 4004, 5004, 6004],
            cost: [500, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
