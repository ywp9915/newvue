<template>
    <div id="take-out">
        <div class="header">
            <div class="header-nav">
                <div class="nav-left-item" v-on:click="$router.go(-1)">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <router-link to="/user" class="user">
                    <i class="fa fa-user " aria-hidden="true"></i>
                </router-link>
            </div>
            <div class="shop-main">
                <img class="shop-logo" @click="setShowNotice" src="http://images.dtroad.cn/Uploads/2017-12-11/5a2de2c34ab15.jpeg">
                <div class="shop-content">
                    <h2 class="shop-name" @click="setShowNotice">隆江猪脚饭</h2>
                    <div class="shop-activities">
                        <div class="activity">
                            公告：猪脚大甩卖 
                        </div>
                        <div class="collection" onclick="SetCollection();">
                            <i class="fa fa-star"></i>
                            收藏
                        </div>
                    </div>
                </div>
            </div>
            <div class="notice">
                <i>注</i>
                <span class="con">用餐高峰期请提前下单!</span>
            </div>
        </div>
        <ul class="nav">
            <router-link to="/detail" active-class="active" tag="li">
                <a href="#" class="active">商品</a>
            </router-link>
            <router-link to="/detail" active-class="active" tag="li">
                <a href="#">商家</a>
            </router-link>
            <router-link to="/comment" active-class="active" tag="li">
                <a href="#">评价</a>
            </router-link>
            <!-- <li class="goods">
                <a href="#" class="active">商品</a>
            </li>
            <li class="current">
                <a href="/detail">商家</a>
            </li>
            <li class="comment">
                <a href="/comment">评价</a>
            </li> -->
        </ul>
        <div class="main">
            <div class="left-tab">
                <ul class="tab" role="tablist" v-for="(item,index) in left_tab" :key="index">
                    <li @click="changeTab(index)"
                        :class="activeClass==index ? 'active' : ''"
                    ><a href="javascript:0">{{item.name}}</a></li>
                </ul>
            </div>
            <div class="food-content" id="scrollBox" >
                <div id="menu1" class="tab-content">
                    <div class="classify-name">菜单1</div>
                    <ul class="menu">
                        <li>
                            <div class="left-img"><img src="http://images.dtroad.cn/Uploads/2018-06-13/5b2075727da01.jpeg" alt=""></div>
                            <div class="right-wrap">
                                <div class="store_name">店铺名称007</div>
                                <div class="food-desc">美味优惠价</div>
                                <div class="saled"><span>已售</span><span>73838</span></div>
                                <div class="price">
                                    <div class="unit-price">￥590.00</div>
                                    <div class="operation">
                                        <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                                        <span class="count display">40</span>
                                        <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="left-img"><img src="http://images.dtroad.cn/Uploads/2018-06-13/5b2075727da01.jpeg" alt=""></div>
                            <div class="right-wrap">
                                <div class="store_name">店铺名称007</div>
                                <div class="saled"><span>已售</span><span>73838</span></div>
                                <div class="price">
                                    <div class="unit-price">
                                        <div class="now-price">￥520.00/</div>
                                        <div class="before-price">￥590.00/</div>
                                    </div>
                                    <div class="operation">
                                        <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                                        <span class="count display">202</span>
                                        <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="menu2" class="tab-content">
                    <div class="classify-name">菜单222</div>
                    <ul class="menu">
                        <li>
                            <div class="left-img"><img src="http://images.dtroad.cn/Uploads/2018-06-13/5b2075727da01.jpeg" alt=""></div>
                            <div class="right-wrap">
                                <div class="store_name">店铺名称007</div>
                                <div class="saled"><span>已售</span><span>73838</span></div>
                                <div class="price">
                                    <div class="unit-price">
                                        <div class="now-price">￥520.00/</div>
                                        <div class="before-price">￥590.00/</div>
                                    </div>
                                    <div class="operation">
                                        <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                                        <span class="count display">20</span>
                                        <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="left-img"><img src="http://images.dtroad.cn/Uploads/2018-06-13/5b2075727da01.jpeg" alt=""></div>
                            <div class="right-wrap">
                                <div class="store_name">店铺名称007</div>
                                <div class="saled"><span>已售</span><span>73838</span></div>
                                <div class="price">
                                    <div class="unit-price">
                                        <div class="now-price">￥520.00/</div>
                                        <div class="before-price">￥590.00/</div>
                                    </div>
                                    <div class="operation">
                                        <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                                        <span class="count display">0</span>
                                        <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="menu3" class="tab-content">
                    <div class="classify-name">菜单3</div>
                    <ul class="menu">
                        <li>
                            <div class="left-img"><img src="http://images.dtroad.cn/Uploads/2018-06-13/5b2075727da01.jpeg" alt=""></div>
                            <div class="right-wrap">
                                <div class="store_name">店铺名称007</div>
                                <div class="food-desc">美味666价</div>
                                <div class="saled"><span>已售</span><span>666</span></div>
                                <div class="price">
                                    <div class="unit-price">￥464.00</div>
                                    <div class="operation">
                                        <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                                        <span class="count display">0</span>
                                        <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="left-img"><img src="http://images.dtroad.cn/Uploads/2018-06-13/5b2075727da01.jpeg" alt=""></div>
                            <div class="right-wrap">
                                <div class="store_name">店铺名称007</div>
                                <div class="saled"><span>已售</span><span>73838</span></div>
                                <div class="price">
                                    <div class="unit-price">
                                        <div class="now-price">￥520.00/</div>
                                        <div class="before-price">￥590.00/</div>
                                    </div>
                                    <div class="operation">
                                        <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                                        <span class="count display">0</span>
                                        <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav-tabs">
            <div class="cart-icon" @click="showCartList">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <div class="cart-num">14</div>
            </div>
            <span class="delivery-pay-total">
                <span>共</span>
                <strong>￥11444.1</strong>
            </span>
            <a href="#" class="delivery-btn-submit" id="btnselect">
               确认下单
            </a>
        </div>
        <div class="maskShowCart" v-show="maskShow" @click="showCartList"></div>
        <div class="cart" v-show="maskShow">
            <div class="cart-list">
                <div class="cart-icon">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <div class="cart-num">14</div>
                </div>
                <div class="cart-header">
                    <span class="cartname">购物车</span>
                    <span class="clear"><i class="fa fa-trash" aria-hidden="true"></i>清算</span>
                </div>
                <ul class="cart-list-item">
                    <li class="list-item">
                        <div class="food-item">
                            <div class="food-name">蜜汁盖浇饭+鸡蛋—地Joe激动iodo</div>
                            <div class="food-specs">加辣，糖水</div>
                        </div>
                        <div class="unit-price">￥34.00</div>
                        <div class="cart-operation">
                            <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                            <span class="count display">90</span>
                            <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="food-item">
                            <div class="food-name">蜜汁盖浇饭+鸡蛋—地Joe激动iodo</div>
                            <div class="food-specs">加辣，糖水</div>
                        </div>
                        <div class="unit-price">￥34.00</div>
                        <div class="cart-operation">
                            <i class="fa fa-minus-circle ope display remove" aria-hidden="true"></i>
                            <span class="count display">90</span>
                            <i class="fa fa-plus-circle ope add" aria-hidden="true"></i>
                        </div>
                    </li>
                </ul>
                <div class="cart-footer">
                    <span class="delivery-pay-total">
                        <span>共</span>
                        <strong>￥11444.1</strong>
                    </span>
                    <a href="#" class="delivery-btn-submit" id="btnselect">
                    我选好了
                    </a>
                </div>
            </div>
        </div>
        <div class="shop-notice" v-show="showNotice">
            <div class="main">
                <h2>隆江猪脚饭</h2>
                <div class="notice-name">商家公告</div>
                <div class="notice-main">
                    <div class="notice-content">猪脚大甩卖</div>
                    <div class="time">送餐时间：9:00-10:00</div>
                </div>
                <div class="close"  @click="setShowNotice"><a href="javascript:void(0);">关闭</a></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'takeout',
    data(){
        return{
            activeClass:0,
            maskShow:false,
            showNotice:false,
            left_tab:[
                {name:"菜单1",path:"#menu1"},{name:"菜单2",path:"#menu2"},
                {name:"菜单3",path:"#menu3"},{name:"菜单4",path:"#menu4"},
                {name:"菜单5",path:"#menu5"},{name:"菜单6",path:"#menu6"},
            ]
        }
    },
    component:{

    },
    methods:{ 
        changeTab(index){
            this.activeClass=index;
        },
        showCartList(){
            this.maskShow = !this.maskShow
        },
        setShowNotice(){
            this.showNotice = !this.showNotice
        }

    },
    mounted:function(){

    }

}
</script>
<style lang="less" scoped>
@import '../../style/main.less';
#take-out{
    position: relative;
    overflow: hidden;
    background:#fff;
    box-sizing: border-box;
    .header{
        width:100%;
        position:fixed;
        top:0;
        left:0;
        right:0;
        display: flex;
        height:auto;
        flex-flow: column wrap;
        z-index: 992;
        background-color: #fd3412;
        .header-nav{ 
            width:100%;
            .h(44);
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color:#fff;.nav-left-item{
                display: inline-block;
                width:15%;
                .h(44);
                .lh(44);
                .mg-left(15);
                i{
                    font-size:.6rem;
                    font-weight: 400;
                }
            }
            .user{
                float:right;
                .fs(24);
                color:#fff;
                .w(44);
                .h(44);
                .lh(44);
                text-align:center;
            }
        } 
        .shop-main{
            .top(44);
            color:#fff;
            width:100%;
            .h(70);
            .pd(0,12,0,12);
            display: flex;
            flex-flow: row nowrap;
            img{
                 display: inline-block;
                .w(50);
                .h(50);
                .mg-top(5);
                border-radius:50%;
                border:.01rem solid #fff;
            }
            .shop-content{
                flex:1;
                display: flex;
                flex-flow: column nowrap;
                .mg-left(12);
                h2{
                    .h(30);
                    .lh(30);
                    .fs(16);
                    flex:1;
                }
                .shop-activities{
                    .fs(14);
                    flex:1;
                    display: flex;
                    flex-flow:row nowrap;
                    .activity{
                        flex:1;
                        .fs(12);
                        .h(26);
                        .lh(26);
                        overflow: hidden;
                    }
                    .collection{
                        .pd(0,12,0,12);
                        background:rgba(0,0,0,.3);
                        .border-radius(25%);
                        text-align: center;
                        .h(26);
                        .lh(26);
                    }
                }
            }
        }

        .notice{
            width:95%;
            .h(30);
            .lh(30);
            .fs(12);
            color:#fff;
            border-top:2px dashed #fff;
            margin:0 auto;
            box-sizing:border-box;
            i{
                display: inline-block;
                .fs(12);
                .w(16);
                .h(16);
                .lh(16);
                background:#70bc46;
                text-align:center;
            }
            span{
                .mg-left(12);
                .fs(13);
            }
        }
    }
    .nav{
        position: fixed;
        .top(144);
        .left(0);
        .h(36);
        width:100%;
        z-index:997;
        display: flex;
        justify-content: space-around;
        border-bottom:1px solid #bfbfbf;
        background:#fff;
        
        li{
            flex:1;
            .fs(16);
            .lh(36);
            color:#555;
            background:#fff;
            text-align: center;
            a{
                display: inline-block;
                color:#555;
                .w(40);
                .h(36);
                .lh(36);
                text-align: center;
            }
            .active{
                color:#2f2f2f;
                box-sizing: border-box;
                border-bottom:2px solid #fd3412;
            }
        }
    }
    .main{
        position: fixed;
        width:100%;
        height: auto;
        .top(180);
        .left(0);
        .left-tab{
            position:fixed;
            .top(180);
            .left(0);
            width:25%;
            li{
                width:100%;
                .h(60);
                .lh(60);
                .fs(16);
                color:#666;
                text-align:center;
                border-bottom: 1px solid #dadada;
                a{
                    color:#777;
                }
            }
            .active{
                background:#fff;
                border-left:2px solid #fd3412; 
            }
        }
        .food-content{
            position: absolute;
            .top(0);
            .right(0);
            width:75%;
            .h(440);
            overflow:auto;
            background:#fff;
            .tab-content{
                .pd-top(10);
                .classify-name{
                    width:95%;
                    .h(30);
                    .lh(30);
                    .pd-left(10);
                    margin:0 auto;
                    .fs(14);
                    font-weight: 700;
                    background: #f7f7f7;
                    color: #656565;
                }
                .menu{
                    li{
                        display: flex;
                        .mg(10,10,0,10);
                        flex-flow:row nowrap;
                        border-bottom: 1px solid #f7f7f7;
                        .left-img{
                            flex:1;
                            .mg-right(10);
                            .w(60);
                            .h(60);
                            img{
                                .w(60);
                                .h(60);
                                display: inline-block;
                                margin:0 auto;
                            }
                        }
                        .right-wrap{
                            flex:3;
                            .fs(14);
                            display: flex;
                            flex-flow:column wrap;
                            .store_name{
                                .fs(16);
                                color:#333;
                                font-weight: 800;
                                .lh(22);
                            }
                            .food-desc,.saled{
                                .lh(14);
                                .fs(12);
                                color:#777;
                            }
                            .price{
                                display: flex;
                                flex-flow:row nowrap;
                                .unit-price{
                                    color:#fd3412;
                                    width:40%;
                                    .fs(12);
                                    .lh(16);
                                }
                                .before-price{
                                    .lh(16);
                                    text-decoration: line-through;
                                }
                                .operation{
                                    width:60%;
                                    text-align:right;
                                    i{
                                        .fs(25);
                                    }
                                    .fa-plus-circle{
                                        color:rgb(52, 115, 250);
                                    }
                                    .fa-minus-circle{
                                        color:rgb(202, 202, 202);
                                    }
                                    .count{
                                        .mg(0,10,0,10);
                                    }
                                }
                            }
                        }

                    }
                }
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
        background: #3f4249;
        z-index: 999;
        .cart-icon{
            position:absolute;
            .bottom(20);
            .left(20);
            i{
                background:rgb(52, 115, 250);
                display: inline-block;
                .w(50);
                .h(50);
                .lh(50);
                text-align: center;
                border-radius:50%;
                color:#fff;
                .fs(30);
            }
            .cart-num{
                .w(16);
                .h(16);
                .lh(16);
                color:#fff;
                background:#fd3412;
                border-radius:50%;
                position: absolute;
                .right(0);
                .top(-5);
                .fs(10);
                text-align:center;
            }
        }
        .delivery-pay-total{
            position:absolute;
            .top(0);
            .right(110);
            color: #fff;
            .fs(20);
            text-align:center;
            display: inline-block;
            .h(50);
            .lh(50);
            span{
                display: inline-block;
                .h(50);
                .lh(50);
            }
            strong{
                .pd(0,10,0,10);
            }
        }
        .delivery-btn-submit{
            position:fixed;
            .bottom(0);
            .right(0);
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
    .maskShowCart{
        width:375px;
        height: 667px;
        z-index:999;
        background:rgba(0, 0, 0, 0.5);
        position:fixed;
        .top(0);
        .right(0);
        .left(0);
        .bottom(0);
    }
    .cart{
        .w(375);
        .h(350);
        z-index:999;
        position:fixed;
        .bottom(0);
        .right(0);
        .left(0);
        .cart-list{
            .w(375);
            .h(350);
            position: absolute;
            .bottom(0);
            .left(0);
            .right(0);
            background:#fff;
            .cart-icon{
                position: absolute;;
                .top(-50);
                .left(15);
                i{
                    background:rgb(52, 115, 250);
                    display: inline-block;
                    .w(50);
                    .h(50);
                    .lh(50);
                    text-align: center;
                    border-radius:50%;
                    color:#fff;
                    .fs(30);
                }
                .cart-num{
                    .w(16);
                    .h(16);
                    .lh(16);
                    color:#fff;
                    background:#fd3412;
                    border-radius:50%;
                    position: absolute;
                    .right(0);
                    .top(-5);
                    .fs(10);
                    text-align:center;
                }
            }
            .cart-header{
                position: absolute;
                .top(0);
                .left(0);
                .w(375);
                .h(40);
                .lh(40);
                .fs(16);
                color:#999;
                background:#ededed;
                .cartname{
                    .mg-left(15);
                }
                .clear{
                    float:right;
                    .mg-right(15);
                    i{
                        .fs(18);
                        .mg-right(5);
                    }
                }
            }
            .cart-list-item{
                position:absolute;
                .top(44);
                .left(0);
                width:100%;
                height:100%;
                overflow: auto;
                .pd-bottom(100);
                .fs(14);
                .list-item{
                    border-bottom:0.01rem solid #ededed;
                    display: flex;
                    .h(45);
                    .pd(0,15,0,15);
                    .mg(10,0,10,0);
                    .food-item{
                        display: block;
                        width:50%;
                        .fs(14);
                        color:#555;
                        .food-name{
                            .lh(25);
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .food-specs{
                            .fs(13);
                            .lh(20);
                            overflow: hidden;
                            color:#666;
                        }

                    }
                    .unit-price{
                        width: 20%;
                        text-align: center;
                        color:#fd3412;
                        .h(35);
                        .lh(35);
                    }
                    .cart-operation{
                        width:30%;
                        .h(35);
                        .lh(35);
                        text-align: right;
                        i{
                            .fs(25);
                            vertical-align: middle;
                        }
                        .fa-plus-circle{
                            color:rgb(52, 115, 250);
                        }
                        .fa-minus-circle{
                            color:rgb(202, 202, 202);
                        }
                        .count{
                            .mg(0,10,0,10);
                            .pd-top(5);
                            color:#666;
                            
                            vertical-align: middle;
                        }
                    }
                }
                .list-item:last-child{
                    border-bottom:none;
                }
            }
            .cart-footer{
                position:fixed;
                .bottom(0);
                .right(0);
                .w(375);
                .h(50);
                background:#fff;
                border-top:1px solid #ddd;
                .delivery-pay-total{
                    position:absolute;
                    .top(0);
                    .left(20);
                    .fs(18);
                    text-align:left;
                    display: inline-block;
                    .h(50);
                    color:#333;
                    span{
                        .lh(50);
                    }
                    strong{
                        .pd(0,10,0,10);
                    }
                }
                .delivery-btn-submit{
                    position:fixed;
                    .bottom(0);
                    .right(0);
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
    }
    .shop-notice{ 
        width:100%;
        height:100%;
        position: fixed;
        .top(0);
        .right(0);
        color:#fff;
        z-index:999;
        background: #262626;
        .main{
            width:100%;
            height:100%;
            .mg(10,20,0,20);
            h2{
                 width:100%;
                 .h(50);
                .fs(20);
                position: fixed;
                .top(50);
                .right(0);
                text-align:center;
                border-bottom:1px solid #fff;
            }
            .notice-name{
                .fs(14);
                border:1px solid #fff;
                .h(22);
                background: #262626 ;
                .w(70);
                .lh(22);
                .border-radius(5);
                text-align:center;
                position:fixed;
                .top(89);
                .left(150);
            }
            .notice-main{
                .fs(14);
            }
        }
        .close{
            position:fixed;
            .left(0);
            .bottom(10);
            .w(375);
            .h(50);
            text-align:center;
            a{
                display: inline-block;
                .w(70);
                .h(30);
                .lh(30);
                color:#fff;
                border:1px solid #fff;
                .fs(14);
                text-align:center;
                .border-radius(10);
            }
        }
    }
}
</style>


