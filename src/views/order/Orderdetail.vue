<template>
  <div id="order-detail">
    <div class="header-nav">
        <div class="nav-left-item" onclick="javascript :history.back(-1);">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="header-title">我的订单</div>
        <div class="nav-right-item">
            <i class="fa fa-qrcode" aria-hidden="true"></i>
        </div>
    </div>
    <div class="main">
        <div class="item-header">
            <ul>
                <li class="store-item-name">
                    <div class="pro-nav-left">
                        <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                        <span>隆江猪脚饭</span>
                    </div>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>      
                </li>
                <li class="store-item-servic">
                    <div class="pro-nav-left">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span class="serv">商家客服：1</span>
                    </div>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>      
                </li>
                <li class="store-item-cancel">
                    <div class="pro-nav-left">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span class="cancel-order">取消订单</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="item-state">
            <div class="order-state ng-isolate-scope active">
                <div class="order-state-header">
                    <div class="square">
                        <div class="line-through ng-hide" ng-hide="hide_left"></div>
                    </div>
                    <i class="fa fa-check-circle"></i>
                    <div class="square">
                        <div class="line-through" ng-hide="hide_right"></div>
                    </div>
                </div>
                <div class="order-state-body ng-binding">等待处理</div>
            </div>
            <div class="order-state ng-isolate-scope ">
                <div class="order-state-header">
                    <div class="square">
                        <div class="line-through" ng-hide="hide_left"></div>
                    </div>
                    <i class="fa fa-check-circle"></i>
                    <div class="square">
                        <div class="line-through" ng-hide="hide_right"></div>
                    </div>
                </div>
                <div class="order-state-body ng-binding">已确认</div>
            </div>
            <div class="order-state ng-isolate-scope ">
                <div class="order-state-header">
                    <div class="square">
                        <div class="line-through" ng-hide="hide_left"></div>
                    </div>
                    <i class="fa fa-check-circle"></i>
                    <div class="square">
                        <div class="line-through ng-hide" ng-hide="hide_right"></div>
                    </div>
                </div>
                <div class="order-state-body ng-binding">已完成</div>
            </div>
        </div>
        <div class="order-info">
            <div class="item ng-binding">
                类型：堂点           
            </div>
            <div class="item ng-binding">
                订单号：20180813279027186851           
            </div>
            <div class="item ng-binding">
                下单时间：2018-08-13 10:38:22           
            </div>
        </div>
        <div class="order-info">
            <div class="item ng-scope">
                <span class="label ng-binding">商品合计：</span>
                <span class="value ng-binding"> 
                    <span class="red ng-binding">1份,￥6.00</span>
                </span>
            </div>                                                           
            <div class="item ng-scope">
                <span class="label ng-binding">订单合计：</span>
                <span class="value ng-binding">
                    <strong class="red ng-binding">￥6.00</strong>
                </span>
            </div>
        </div>  
        <div class="order-info">
            <div class="item ng-scope">
                <span class="label ng-binding">桌台</span>
                <span class="value ng-binding"> 大厅-qq</span>
            </div>
            <div class="item ng-scope">
                <span class="label ng-binding">支付类型</span>
                <span class="value ng-binding">未选择</span>
            </div>
            <div class="item ng-scope">
                <span class="label ng-binding">支付状态</span>
                <span class="value ng-binding">                                                  
                    <font color="#f00">未支付</font>
                </span>
            </div>
            <div class="item ng-scope">
                <span class="label ng-binding">人数</span>
                <span class="value ng-binding"> 1</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"orderdetail",
};
</script>

<style lang="less" scoped>
@import "../../style/main.less";
#order-detail{
    width:100%;
    .h(667);
    .header-nav{
        position:fixed;
        .top(0);
        .left(0);
        .right(0);
        width:100%;
        .h(44); 
        z-index: 999;
        display: flex;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color:#fff;
        background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
        .nav-left-item{
            width: 25%;
            .pd-left(15);
            .h(44);
            .lh(44);
            i{
                display: block;
                width:100%;
                height:100%;
                .fs(28);
                .lh(44);
                color:#fff;
            }
        }
        .header-title{
            width:50%;
            .h(44);
            .lh(44);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            overflow: hidden;
            .fs(17);
            font-weight: 700;
        }
        .nav-right-item{
            width:20%;
            .h(44);
            .lh(44);
            i{
                display: block;
                width:100%;
                height:100%;
                .fs(28);
                .lh(44);
                text-align: right;
                color:#fff;
            }
        }
    } 
    .main{
        position:absolute;
        .top(44);
        .left(0);
        width:100%;
        height:100%;
        overflow: auto;
        .item-header{
            ul{
                display: flex;
                flex-flow: column nowrap;
                background: #fff;
                li{
                .fs(14);
                .h(40);
                .lh(40);
                .pd(0,10,0,10);
                color:#555;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                border-bottom:1px solid #eee;
                .pro-nav-left{
                    flex:1;
                    i{
                    display: inline-block;
                    .w(24);
                    .lh(24);
                    .fs(16);
                    color:#777;
                    text-align: center;
                    }
                    span{
                    .mg-left(5);
                    color:#555;
                    }
                }
                .fa-angle-right{
                    flex:1;
                    .lh(44);
                    text-align: right; 
                }
                }
                .store-item-cancel{
                .h(54);
                .lh(54);
                .pro-nav-left{
                    border:1px solid #dbdbdb;
                    .border-radius(5);
                    .mg(10,0,10,0);
                    .h(34);
                    .lh(34);
                    text-align:center;
                    i{
                    color:#E4393C!important;
                    }
                    .cancel-order{
                    .lh(34);
                    .h(34);
                    display: inline-block;
                    .fs(16);
                    }
                }
                }
            }
        }
        .item-state{
            width:100%;
            .h(70);
            .fs(14);
            display:flex;
            justify-content: space-around;
            flex-flow:row wrap;
            box-sizing:border-box;
            background:#fec35d;
            .order-state{
                display: flex;
                justify-content: space-around;
                flex-flow:column wrap;
                .order-state-header{
                    
                }
                .order-state-body{

                }
            }

        }
        .order-info{
            .fs(14);
            background:#fff;
            color:#555;
            .mg-bottom(10);
            .item{
                .h(40);
                .lh(40);
                .mg(0,15,0,15);
                border-bottom:1px dashed #eee;
            }

        }
    }
}
</style>
