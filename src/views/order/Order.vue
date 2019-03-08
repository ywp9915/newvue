<template>
    <div id="order">
        <div class="header-nav">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="header-title">我的订单</div>
        </div>


        <div class="order-list"
             v-infinite-scroll="loadList"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10"
        >
            <div class="order-item section" v-for="order in lis" :key="order.id">
                <div class="list-item1">
                    <div class="time">下单时间：{{order.dateline}}</div>
                </div>
                <div class="list-item2" onclick="go_detail(294)">
                    <div class="name">
                        <div class="store-name">[{{showDining(order.dining_mode)}}]{{order.title}} </div>
                        <div class="operation" v-html="showPayType(order.ispay)"></div>
                    </div>

                    <div class="total-amount" v-if="order.dining_mode===3">预订房号：{{order.table_title}}房</div>
                    <template v-if="order.dining_mode===3"><br />预订到店时间：{{order.meal_time}}</template>

                    <div class="table" v-if="order.dining_mode===1">桌号：{{order.table_title}}</div>
                    <div class="variants">共计{{order.totalnum}}件商品</div>
                </div>
                <div class="list-item3">
                    <div class="total-amount"><span class="amount-label">金额：</span>￥{{order.totalprice}}</div>
                    <div class="operation"><span class="button" v-bind:class="showPayStatusClass(order.status)">{{showPayStatus(order.status)}}</span></div>
                    <div class="space"></div>
                </div>
            </div>
            
        </div>
        <FooterNav></FooterNav>
    </div>
</template>

<script>
import FooterNav from "../../components/FooterNav.vue";

    export default {
        name: "Order",
        data:()=>{
            return{
                loading:false,
                page:1,//分页数,大于0就表示没有加载完
                lis:[],
            };
        },
        components:{
            FooterNav
        },
        methods:{
            showDining:function(dining_mode){
                switch(dining_mode){
                    case 1:return '堂点';
                    case 2:return '外卖';
                    case 3:return '预订';
                    case 4:return '快餐';
                    case 5:return '收银';
                    case 6:return '充值';
                }
                return '未知';
            },
            showPayType:function(ispay){
                switch(ispay){
                    case 0:return '未支付';
                    case 1:return '<i class="fa fa-check-square-o"></i>已支付';
                    case 2:return '待退款';
                    case 3:return '已退款';
                    case 4:return '退款失败';
                    case 5:return '部分退款';
                }

                return '未知';
            },
            showPayStatusClass:function(){
                switch(status){
                    case 0:return {'label-default':true};
                    case 1:return {'label-green':true};
                    case 3:return {'label-green':true};
                    case -1:return {'label-red':true};
                }

                return {};
            },
            showPayStatus:function(status){
                switch(status){
                    case 0:return '未确认';
                    case 1:return '已确认';
                    case 3:return '已完成';
                    case -1:return '已取消';
                }

                return '未知';

            },
            loadList : function(){
                console.log('loadList');
                this.loading = true;
                if (this.page > 0) {
                    let load_page = this.page;
                    this.page = 0;
                    this.$api.callapi("order.userOrderList", {page:load_page}).then(({ data = [] }) => {
                        let arr = [];
                        this.lis = arr.concat(this.lis, data.message.list);
                        this.page = data.message.pindex;
                        //this.loading = this.page <= 0;
                    });
                }
            },
        },
        mounted:function(){
            //this.loadList();
        }
    }
</script>

<style lang="less" scoped>
@import "../../style/main.less";
#order{
    overflow: hidden;
    .header-nav{
        position:fixed;
        top:0;
        left:0;
        right:0;
        width:100%;
        .h(46);
        z-index: 999;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color:#fff;
        background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
        overflow: hidden;
        .nav-left-item{
            width: 25%;
            float: left;
            .pd-left(15);
            .h(46);
            .lh(46);
            i{
                display: block;
                width:100%;
                height:100%;
                .fs(28);
                .lh(46);
                color:#fff;
            }
        }
        .header-title{
            width:50%;
            .h(46);
            .lh(46);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            overflow: hidden;
            .fs(17);
            font-weight: 700;
        }
    } 
    .order-list{
        .mg-top(46);
        .mg-bottom(46);
        width:100%;
        .h(667);
        overflow:auto;
        z-index: 222;
        .order-item{
            flex-flow: column wrap;
            .fs(14);
            width:100%;
            .mg-left(10);
            .mg(12,0,18,0);
            color:#555;
            background:#fff;
            .list-item1{
                text-align: center;
                .h(40);
                border-bottom: 1px solid #eee;
                .time{
                    .fs(12);
                    color:#777;
                    .lh(40);
                }

            }
            .list-item2{
                flex:1;
                border-bottom: 1px solid #eee;
                .mg(0,10,0,10);
                .pd(10,0,10,0);
                color:#555;
                .name{
                    .h(28);
                    .lh(28);
                    display: flex;
                    flex-flow: row nowrap;
                    .store-name{
                        flex:4;
                        .fs(16);
                    }
                    .operation{
                        color:#777;
                    }
                }
                .table{
                    color: #ef4437;
                    .fs(14);
                    .h(22);
                    .lh(22);
                    font-weight:700;
                }
                .variants{
                    .fs(12);
                    color:#777;
                }
            }
            .list-item3{
                flex:1;
                .h(40);
                .lh(40);
                .mg(0,10,0,10);
                display: flex;
                flex-flow: row nowrap;
                .total-amount{
                    flex:1;
                    color: #ef4437;
                    .fs(14);
                    font-weight: 700;
                    span{
                        color:#777;
                        .fs(14);
                        font-weight: 500;
                    }
                }
                .operation{
                    border: 1px solid #dbdbdb;
                    color: #777;
                    text-align: center;
                    .fs(14);
                    .h(26);
                    .lh(26);
                    .pd(0,10,0,10);
                    .border-radius(5);
                    .mg-top(6);
                }
            }
        }
    }
    FooterNav{
        position: fixed;
        .bottom(0);
        .left(0);
        .right(0);
    }
}

</style>