<template>
    <div id="refunddetail">
        <div class="header-nav">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>

            </div>
            <div class="header-title ng-binding">退款详情</div>
            <div class="shop-main">
                <div class="title">
                    退款成功
                </div>
                <div class="time">
                    2019-03-06
                </div>
            </div>
        </div>

        <div class="refund-list">

            <div class="refund-item section ng-scope" >
                <div class="list-item1 info">
                    <span class="store-name">退款信息</span>
                </div>
                <div class="list-item2">
                    <div class="goods-img">
                        <img src="../../images/goods-1.jpg" alt="">
                    </div>
                    <div class="remark">
                        <div class="goods-price">0.01</div>
                    </div>
                </div>
                <div class="list-item1 content">
                    <span>退款金额</span>
                    <span style="color:#fd5a2b;">￥0.01</span>
                </div>
                <div class="list-item1 content">
                    <span>申请时间</span>
                    <span>2018-07-02 23:31:34</span>
                </div>
                <div class="list-item1 content">
                    <span>退款编号</span>
                    <span>R012018070213807400022446080</span>
                </div>
                <div class="list-item1 content">
                    <span>退款说明</span>
                    <span></span>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="less" scoped>
    @import "../../style/main.less";
    #refunddetail{
        position: relative;
        overflow:hidden;
        .header-nav{
            width:100%;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color:#fff;
            background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
            z-index: 999;
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
            .shop-main{
                color:#fff;
                width:100%;
                .h(78);
                border: none;
                font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
                .pd(14,15,14,15);
                .fs(15);
                letter-spacing:3px;
                .title{
                    .lh(25);
                }
                .time{
                    .lh(25);
                }
            }
        }

        .refund-list{
            width:100%;
            overflow: hidden;
            .refund-item{
                flex-flow: column wrap;
                .fs(14);
                width:100%;
                color:#666666;
                background:#fff;
                overflow: hidden;
                .content{
                    .mg(0,14,0,14);
                    border-bottom: 1px solid #eee;
                    span:nth-child(1){
                        letter-spacing: 1px;
                        color: #888;
                    }
                    span:nth-child(2){
                        float: right;
                        color: #333;
                    }

                }
                .info{
                    .mg(0,14,0,14);
                }
                .list-item1{
                    .lh(44);
                    .fs(14);
                    i{
                        .w(17);
                        .mg-right(4);
                        color:#f60;
                    }
                    .store-name{
                        letter-spacing:1px;
                    }
                }
                .list-item2{
                    color:#555;
                    .h(118);
                    .pd(14,14,14,14);
                    background-color: #f8f8f8;
                    .goods-img{
                        .mg-right(14);
                        .w(90);
                        .h(90);
                        float: left;
                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: 8px;
                            vertical-align: middle;
                        }
                    }
                    .remark{
                        .w(200);
                        float: left;
                        .goods-price{
                            .fs(16);
                        }
                    }
                }
            }
        }
    }
</style>

