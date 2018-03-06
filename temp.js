let home = {template: '<div>返回首页</div>'};
let detail = {template: '<div>查看详情</div>'};
let routes = [
    {path: '/', component: home},
    {path: '/detail', component: detail}
];
let router = new VueRouter({
    routes
});
let vm = new Vue(
    {
        el: "#app",
        router,
        methods: {
            clearPartner() {
                vm.partnerListShow = []
            },
            clearOnePartner(e) {
                let text = e.target.parentElement.innerText;
                let arr = vm.partnerListShow.filter(item => {
                    return item.trim() !== text.trim();
                });
                vm.partnerListShow = [...arr];
                console.log(arr);
            },
            checkPartner(e) {
                if (vm.partnerListShow.every(item => {
                        return item !== e.target.innerHTML
                    })) {
                    vm.partnerListShow.push(e.target.innerHTML)
                }
            },
            endDataChange(e) {
                vm.endDate = e.target.innerHTML;
            },
            beginDataChange(e) {
                vm.beginDate = e.target.innerHTML;
            },
            search() {
                console.log(vm.costShow);
                console.log(vm.endDate.trim(), vm.beginDate.trim());
                if (!isNaN(parseInt(vm.endDate) - parseInt(vm.beginDate))) {
                    vm.incomeShow = 0;
                    vm.costShow = 0;
                    let arr = vm.month.slice(parseInt(vm.beginDate) - 1, parseInt(vm.endDate));
                    let data = [];
                    vm.partnerListShow.forEach(item => {
                        vm.partnerList.forEach((val, index) => {
                            if (val === item) {
                                data.push(vm.partnerIO[index]);
                            }
                        })
                    });
                    data.forEach(item => {
                        for (let i = parseInt(vm.beginDate); i <= parseInt(vm.endDate); i++) {
                            vm.incomeShow += item.income[i];
                            vm.costShow += item.cost[i];

                        }
                    })
                }

            }
        },
        data: {
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
        },
        computed: {
            partnerrofit() {
                return this.incomeShow - this.costShow
            }
        },
        updated: function () {
            echarts.init(document.getElementById('main')).setOption({
                series: {
                    type: 'pie',
                    radius: '55%',
                    data: [
                        {name: '总收入', value: this.incomeShow},
                        {name: '支出', value: this.costShow},
                        {name: '利润', value: this.partnerrofit}
                    ]
                }
            });
        },
        created: function () {

            echarts.init(document.getElementById('main')).setOption({
                series: {
                    type: 'pie',
                    radius: '55%',
                    data: [
                        {name: '总收入', value: this.incomeShow},
                        {name: '支出', value: this.costShow},
                        {name: '利润', value: this.partnerrofit}
                    ]
                }
            });
        }
    }
);