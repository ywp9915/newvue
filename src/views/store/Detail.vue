<template>
    <div id="detail">
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
            <li class="current">
                <a href="" class="active">商家</a>
            </li>
            <router-link to="/comment" tag="li" class="comment">
                <a href="">评价</a>
            </router-link>
        </ul>
        <div class="scroll">
            <div class="banner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="http://images.dtroad.cn/Uploads/2017-12-11/5a2de2f3778a1.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="http://images.dtroad.cn/Uploads/2018-03-08/5aa0edbbde4a0.jpeg" alt=""></mt-swipe-item>        
                </mt-swipe>
            </div>
            <div class="store-info">
                <div class="shop-detail-header">
                    <i class="fa fa-chevron-left"></i>
                    <div>店铺信息</div>
                </div>
                <div class="shop-detail">
                    <ul class="shop-nav">
                        <li class="nav-item">
                            <img src="../../images/icon_yd.png" alt="">
                            <div class="name">预定</div>
                        </li>
                        <li class="nav-item">
                            <img src="../../images/icon_td.png" alt="">
                            <div class="name">店内</div>
                        </li>
                        <li class="nav-item">
                            <img src="../../images/icon_wm.png" alt="">
                            <div class="name">外卖</div>
                        </li>
                        <li class="nav-item">
                            <img src="../../images/icon_pd.png" alt="">
                            <div class="name">排队</div>
                        </li>
                    </ul>
                    <ul class="shop-concat">
                        <li class="concat">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <span class="concat-item ">电话：</span>
                            <span class="concat-item">1</span>
                            <span class="concat-item bgc">
                                <a href="#">拨打</a>
                            </span>
                        </li>
                        <li class="concat">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span class="concat-item">商家地址:</span>
                            <span class="concat-item">1</span>
                            <span class="concat-item bgc">
                                <a href="#">导航</a>
                            </span>
                        </li>
                    </ul>
                    <div class="shop-service">
                        <div class="service-item service-time">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <span class="concat-item ">营业时间：</span>
                            <span class="concat-item time">09:00~10:00</span>
                        </div>
                        <div class="service-item delivery">
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span class="concat-item">配送服务：</span>
                            <span class="concat-item bgc"><a href="#">专业</a></span>
                            <span class="concat-item other">提供高品质送餐服务</span>
                            <p class="tag">
                                <span class="delivery-tag1">送货快</span>
                                <span class="delivery-tag2">准时到</span>
                            </p>
                        </div>
                    </div>
                    <div class="look"><div>查看店铺</div></div>
                </div>
            </div>  
        </div>
        <div class="tel">
            <i class="fa fa-weixin" aria-hidden="true"></i>
            <span>客服</span>
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
    name:"detail",
    data(){
        return{
            showNotice:false,
        }
    },
    component:{

    },
    methods:{
        
        setShowNotice(){
            this.showNotice = !this.showNotice
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../style/main.less';

#detail{
    position: relative;
    width:100%;
    // height:100%;
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
        background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
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
        background:#fff;
        li{
            float:left;
            width:50%;
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
                border-bottom:2px solid #fd3412;
            }
        }
    }
    .scroll{
        overflow: auto;
        z-index:1;
        .banner{
            .h(250);
            width:100%;
            position:absolute;
            .top(181);
            .left(0);
            .right(0);
            img{
                width:100%;
                .h(250);
                display: inline-block;
            }
        }
        .store-info{
            width:100%;
            position: absolute;;
            .top(431);
            .left(0);
            .right(0);
            .mg(0,0,100,0);
            background:#eee;
            .shop-detail-header{
                .w(375);
                .h(36);
                .lh(36);
                display: none;
                color:#555;
                i{
                    display: inline-block;
                    .w(36);
                    .h(36);
                    .lh(36);
                    text-align: center;
                    .fs(14);
                }
                div{
                    .mg-left(10);
                    display: inline-block;
                    .h(36);
                    .lh(36);
                    .fs(14);
                }
            }
            .shop-detail{
                .mg-top(12);
                width:100%;
                .shop-nav{
                    .h(90);
                    background:#fff;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    .nav-item{
                        .mg(10,0,30,0);
                        img{
                            display:inline-block;
                            .w(45);
                            .h(45);
                            .lh(45);
                        }
                        .name{
                            .fs(14);
                            .w(40);
                            .h(16);
                            .lh(16);
                            text-align: center;
                            color: #0a8ddf;
                        }
                    }
                }
                .shop-concat{
                    .fs(14);
                    color:#555;
                    background:#fff;
                    .mg-top(15);
                    .concat{
                        .h(55);
                        .lh(55);
                        .fs(14);
                        color:#2f2f2f;
                        border-bottom:1px solid #eee;
                        .pd-left(15);
                        i{
                            color:rgb(150, 150, 150);
                            .fs(20);
                        }
                        .concat-item{
                            .pd-left(15);
                        }
                        .bgc{
                            display: inline-block;
                            .h(18);
                            .lh(18);
                            a{
                                text-align:center;
                                display:inline-block;
                                .w(30);
                                .mg-left(10);
                                color:#fff;
                                .fs(11);
                                .w(40);
                                .border-radius(3);
                                background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
                            }
                        }
                    }
                }
                .shop-service{
                    .fs(14);
                    color:#555;
                    background:#fff;
                    .mg-top(15);
                    .service-item {
                        .h(55);
                        .lh(55);
                        .fs(14);
                        color:#2f2f2f;
                        border-bottom:1px solid #eee;
                        .pd-left(15);
                        i{
                            color:rgb(150, 150, 150);
                            .fs(20);
                        }
                        .concat-item{
                            .pd-left(15);
                        }
                        
                    }
                    .delivery{
                        height:auto;
                        .bgc{
                            display: inline-block;
                            .h(18);
                            .lh(18);
                            a{
                                text-align:center;
                                display:inline-block;
                                .w(30);
                                color:#fff;
                                .fs(11);
                                .border-radius(3);
                                background: #fd3412;
                            }
                        }
                        .other{
                            color:#777;
                            .fs(14);
                        }
                        .tag{
                            span{
                                .h(22);
                                .lh(22);
                                border: 1px solid #fd3412;
                                .border-radius(4);
                                color: #fd3412;
                                display: inline-block;
                                .fs(11);
                                .mg(0,0,30,10);
                                .pd(0,4,0,4);
                                text-align: center;
                                vertical-align: middle;
                            }
                            .delivery-tag1{
                                .mg-left(130);
                            }
                        }
                    }
                }
                .look{
                    background:#fff;
                    width:100%;
                    .h(44);
                    .mg(15,0,0,0);
                    box-sizing: border-box;
                    div{
                        display: inline-block;
                        .h(44);
                        .lh(44);
                        .mg-left(12);
                        .w(70);
                        .fs(14);
                        text-align:center;
                        color:#428bca;
                    }
                }
            }
        }
        
    }
    .tel{
        .w(40);
        .h(40);
        position:fixed;
        .left(0);
        .bottom(60);
        z-index:1000;
        background:rgba(26, 174, 62, 0.8);
        i{
            display: block;
            .fs(14);
            .lh(20);
            color:#fff;
            text-align: center;
        }
        span{
            display: block;
            .fs(13);
            color:#fff;
            text-align: center;
        }
    }
    .shop-notice{
        width:100%;
        height:100%;
        position: fixed;
        .top(0);
        .right(0);
        color:#fff;
        z-index:1999;
        background: #262626;
        .main{
            .mg(10,20,0,20);
            h2{
                .fs(20);
                .h(100);
                .lh(100);
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
                .top(100);
                .left(150);
            }
            .notice-main{
                .fs(14);
                .mg-top(40);

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