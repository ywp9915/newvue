<template>
    <div id="firm-order">
        <div class="header-nav">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="header-title">确认订单</div>
        </div>
        <div class="content">
            <div class="order-ribbon"></div>
            <div class="order-item">
                <div class="item-inner">
                    <div class="item-title">配送时间:</div>
                    <div class="item-time label">
                        <select class="sel-time">
                            <option value="请选择配送时间" >请选择配送时间</option>
                            <option value="9:30-10:00" >9:30-10:00</option>
                            <option value="10:00-10:30" >10:00-10:30</option>
                            <option value="10:30-11:00" >10:30-11:00</option>
                            <option value="11:10-11:30" >11:10-11:30</option>
                            <option value="11:30-12:00" >11:30-12:00</option>
                            <option value="12:30-13:00" >12:30-13:00</option>
                            <option value="13:00-13:30" >13:00-13:30</option>
                            <option value="13:30-14:00" >13:30-14:00</option>
                            <option value="17:30-18:00" >17:30-18:00</option>
                            <option value="18:00-18:30" >18:00-18:30</option>
                            <option value="18:30-19:00" >18:30-19:00</option>
                            <option value="19:00-19:30" >19:00-19:30</option>
                            <option value="19:30-20:00" >19:30-20:00</option>
                            <option value="20:00-20:30" >20:00-20:30</option>
                            <option value="20:30-21:00" >20:30-21:00</option>
                            <option value="21:00-21:30" >21:00-21:30</option>
                        </select>
                    </div>
                </div>
                <div class="item-inner item-inner-range">
                    <div class="item-title ">配送范围:</div>
                    <div class="item-range label">
                    </div>
                </div>
                <div class="item-inner item-inner-address">
                    <div class="item-title">配送地址:</div>
                    <div class="item-address label">
                        <div class="label-address">广州市天河区丰华河
                        <br>
                        y87 13277686545    
                        </div>
                        <div class="img"><img class="edit-address" src="../../images/edit.png" >           
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-item">
                <div class="item-inner">
                    <div class="item-title">备注:</div>
                    <div class="item-other label ">
                        <input type="text" id="other" placeholder="可输入特殊要求（选填）" value="">
                    </div>
                </div>
            </div>
            <div class="goods-list">
                <div class="item-title">商品清单</div>
                <ul class="goods-item-detial">
                    <li>
                        <div class="goods-items">
                            <div class="item-name">商品名称00001</div>
                            <div class="item-specs">加冰，红豆，珍珠，西米露，加糖，</div>
                        </div>
                        <div class="count">x2</div>
                        <div class="price">￥120.99</div>
                    </li>
                    <li>
                        <div class="goods-items">
                            <div class="item-name">商品名称0000190</div>
                            <div class="item-specs">温热，少糖，红豆，珍珠，西米露，其他。。。</div>
                        </div>
                        <div class="count">x2</div>
                        <div class="price">￥120.99</div>
                    </li>
                </ul>
                <ul class="item-total">
                    <li>
                        <div class="total-name allprice">商品总额</div>
                        <div class="price">￥29.02</div>
                    </li>
                    <li>
                        <div class="total-name discount">优惠抵扣</div>
                        <div class="price">￥22.00</div>
                    </li>
                </ul>
                <div class="total-price">总计：￥7.02</div>
            </div>
            
        </div>
        <div class="nav-tabs">
            <span class="delivery-pay-total">
                <span>还需支付</span>
                <strong>11444.1</strong>
            </span>
            <a href="#" class="delivery-btn-submit" id="btnselect">
               确认下单
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'firmorder',

}
</script>
<style lang="less" scoped>
@import '../../style/main.less';
#firm-order{
    width:100%;
    position: relative;
    background:#f4f4f4;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    .header-nav{
        .h(46);
        z-index: 1;
        background:#fff;
        border-bottom: .02rem solid #eee;
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
                color: #f34336;
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
            color:#3d4145;
            font-weight: 500;
        }
    }
    .content{
        width:100%;
        overflow:auto;
        position:absolute;
        background:#f4f4f4;
        overflow: auto;
        .top(44);
        .left(0);
        .right(0);
        .fs(14);
        color:#333;
        .mg-top(10);
        .order-ribbon{
            .h(8);
            background:#fff url(../../images/line.gif) repeat-x 0 0;
        }
        .order-item{
            width:100%;
            height:100%;
            background:#fff;
            .mg-bottom(12);
            .item-inner{
                width:100%;
                .h(44);
                display: flex;
                flex-flow:row nowrap;
                .item-title{
                    width:25%;
                    text-align:left;
                    .fs(14);
                    color:#555;
                    .lh(44);
                    .pd-left(15);
                }
                .label{
                    width:75%;
                    .pd(0,10,0,10);
                    text-align:left;
                    input{
                        display: block;
                        .w(240);
                        .h(32);
                        .mg(6,0,6,0);
                    }
                }
                .item-time{
                    width:80%;
                    .h(32);
                    .mg(6,0,6,0);
                    .sel-time{
                        display: block;
                        .h(32);
                        .lh(32);
                        .fs(14);
                        .pd-left(10);
                        width: 90%;
                        border: 0px;
                        text-align:center;
                        option{
                            display: block;
                            width:80%;
                            .lh(16);
                            appearance:none;  
                            -moz-appearance:none;  
                            -webkit-appearance:none;
                        }
                    }
                }
            }
            .item-inner-range{
                border:.01rem solid #f7f7f7;
                border-right: 0;
                border-left:0;
            }
            .item-inner-address{
                .h(57);
                .item-title{
                    .lh(57);
                }
                .item-address{
                    display: flex;
                    flex-flow:row nowrap;
                    justify-content: flex-start;
                    .label-address{
                        .pd-top(8.5);
                        flex:9;
                        .lh(20);
                        overflow: hidden;
                    }
                    .img{
                        flex:1;
                        .lh(57);
                        .edit-address{
                            display: inline-block;
                            .w(21);
                            .h(21);
                            vertical-align: middle;
                        }
                    }

                }
            }
        }
        .goods-list{
            background:#fff;
            .pd(0,15,0,15);
            .mg-bottom(50);
            .item-title{
                border-bottom:.009rem soldi #eee;       
                width:100%;
                .h(44);
                .lh(44);
                .fs(14);
                color:#555;
            }
            .goods-item-detial{
                li{
                    display: flex;
                    flex-flow:row nowrap;
                    .pd(5,0,5,0);
                    .goods-item{
                        .w(175);
                        text-align:left;
                        .item-name{
                            .fs(14);
                            color:#333;
                            overflow:hidden;
                        }
                        .item-specs{
                            .fs(12);
                            color:rgb(189, 94, 94);
                            overflow:hidden;
                        }
                    }
                    .count{
                        .w(50);
                        text-align:center;
                    }
                    .price{
                        .w(150);
                        text-align:right;
                    }
                }
            }
            .item-total{
                .h(50);
                .mg(10,0,10,0);
                border:.01rem solid #f7f7f7;
                li{
                    display: flex;
                    flex-flow:row nowrap;
                    justify-content: flex-start;
                    .h(25);
                    .lh(25);
                    .fs(14);
                    color:#333;
                    .total-name{
                        width:50%;
                        text-align:left;
                    }
                    .price{
                        width:50%;
                        text-align:right;
                    }
                }
            }
            .total-price{
                text-align: right;
                color:#555;
                .h(44);
                .lh(44);
                .fs(14);
            }
        }
    }
    .nav-tabs{
        position:fixed;
        .bottom(0);
        .left(0);
        .right(0);
        width:100%;
        .h(50);
        background-color: #3f4249;
        z-index: 999;
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-around;
        .delivery-pay-total{
            flex:1;
            color:#bbb;
            text-align:right;
            .fs(14);
            display: inline-block;
            .h(50);
            .lh(50);
            span{
                display: inline-block;
                .h(50);
                .w(100);
                .lh(50);
            }
            strong{
                color: #fff;
                .fs(20);
                .pd(0,10,0,10);
            }
        }
        .delivery-btn-submit{
            text-align:center;
            color:#fff;
            display: inline-block;
            .w(100);
            .h(50);
            .lh(50);
            .pd(0,10,0,10);
            .fs(16);
            background: #4cd964;
        }
    }
}
</style>

