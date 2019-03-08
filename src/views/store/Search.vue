<template>
    <div id="search">
        <Header>
        </Header>
        <div class="title">商家列表</div>
        <div class="condition">
            <ul class="classify">
                <li @click="handleTab(1)">
                    <div class="item1">餐饮</div>
                    <i class="fa fa-chevron-down"></i>
                </li>
                <li @click="handleTab(2)" class="border">
                    <div class="item2">全城</div>
                    <i class="fa fa-chevron-down"></i>
                </li>
                <li @click="handleTab(3)">
                    <div class="item3">距离优先</div>
                    <i class="fa fa-chevron-down"></i>
                </li>
            </ul>
            <!-- <div class="mask"></div> -->
            <ul v-show="handleTab==1" class="con-item active">
                <li>
                    <span>门店类型</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>
                    <span>发</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>
                    <span>餐饮</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
            </ul>
            <ul v-show="handleTab==2" class="con-item">
                <li>
                    <span>全城</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>
                    <span>天河区</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>
                    <span>越秀区</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
            </ul>
            <ul v-show="handleTab==3" class="con-item">
                <li>
                    <span>综合排序</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>
                    <span>营业中</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li>
                    <span>餐饮</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
            </ul>
            <section class="store-list">
                <div class="left-wrap">
                    <img >
                </div>
                <div class="right-wrap">
                    <section class="line1">
                        <h3 class="shopname premium"></h3>
                        <div class="support-wrap">
                            <div class="activity-wrap nowrap">
                                <i class="activity-icon icononly"> 店 </i>
                            </div>
                            <div class="tag label-red ng-scope"></div>
                            <div class="activity-wrap nowrap">
                                <i class="activity-icon icononly"> 外 </i>
                            </div>
                        </div>
                    </section>
                    <section class="line2">
                        <div class="rate-wrap">
                            <span class="star">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </span>
                            <span class="saled"></span>
                        </div>
                        <div class="delivery-wrap">
                            <span class="icon-delivery" >准时达</span>
                            <span class="icon-delivery" >商家联盟</span>
                        </div>
                    </section>
                    <section class="line3">
                        <div class="moneylimit">
                            <span>免配送费</span>
                        </div>
                        <div class="timedistance-wrap">
                            <span class="distance-wrap">10.2km</span>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <Footer-Nav>
        </Footer-Nav>
    </div>
</template>
<script>
import FooterNav from "../../components/FooterNav.vue";
import Header from "../../components/Header.vue";
import api from "../../api/api.js";
export default {
    name:"search",
    components:{
        Header,
        FooterNav,
    },
    data:()=>{
        return {
            show: false,
            isShow:0,
        };
    },
    methods: {
        handleTab(v){
            this.isShow=v;
            this.show=!this.show;
        },
    },
    mounted: function() {
        
    },

}
</script>
<style  lang="less" scoped>
@import '../../style/main.less';
#search{
    position:relative;
    width:100%;
    .title{
        .w(375);
        .h(44);
        .lh(44);
        color:#fff;
        .fs(17);
        text-align:center;
        position:fixed;
        .top(0);
        .left(0);
        z-index:994;
        font-weight: 600;
    }

    .condition{
        position: absolute;
        .top(44);
        .left(0);
        .right(0);
        width:100%;
        z-index: -1;
        overflow:auto;
        .classify{
            display: flex;
            justify-content: space-around;
            background:#fff;
            border-bottom:1px solid #eee;
            .fs(14);
            width:100%;
            .h(40);
            .lh(40);
            li{
                flex:1;
                .lh(40);
                .mg(0,10,0,10);
                text-align: center;
                div{
                    display: inline-block;
                }
                .active{
                    color:#333;
                    font-weight:800;
                }
                i{
                    .mg-left(20);
                    color:#777;
                }
            }
        }
        .mask{
            position:fixed;
            .top(84);
            .left(0);
            .right(0);
            .bottom(50);
            background:rgba(0,0,0,.5);
            z-index:9;
            // display: none;
        }
        .con-item{
            position:absolute;
            .top(84);
            .left(0);
            .right(0);
            width:100%;
            z-index:10;
            li{
                display: block;
                width:100%;
                .h(40);
                .lh(40);
                display: flex;
                background:#fff;
                border:.01rem solid #e2e2e2;
                span{
                    flex:1;
                    .fs(14);
                    color:#666;
                    .mg-left(15);
                }
                i{
                    flex:1;
                    .h(35);
                    .lh(35);
                    text-align: right;
                    .fs(20);
                    .pd-right(15);
                }
            }
        }
        .store-list{
            position:absolute;
            .top(44);
            .left(0);
            .right(0);
            overflow:auto;
            display: flex;
            flex-flow: row nowrap;
            .pd(10,0,50,0);
            z-index:7;
            background:#fff;
            border-bottom:1px solid #f7f7f7;
            .left-wrap{
                flex:1;
                img{
                    display:inline-block;
                    .w(64);
                    .h(64);
                    .mg-left(10);
                    .mg-right(10);
                    .border-radius(4);
                }
            }
            .right-wrap{
                flex:7;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .mg(0,10,0,10);
                .line1{
                    flex:1;
                    width:100%;
                    .fs(14);
                    display: flex;
                    flex-flow: row nowrap;
                    .shopname{
                        flex:2;
                        align-self: center;
                        margin: 0;
                        padding: 0;
                        .max-w(188px);
                        color: #333;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-weight: 700;
                        .fs(14);
                        .h(16);
                    }
                    .support-wrap{
                        flex:1;
                        display: flex;
                        color: rgb(153, 153, 153);
                        border-color: rgb(221, 221, 221);
                        justify-content: flex-end;
                        text-align:right;
                        .activity-wrap{
                            .mg-left(3);
                            .fs(10);
                            i{
                                color: rgb(153, 153, 153);
                                border:1px solid rgb(221, 221, 221);
                            }
                        }
                        .label{
                            .mg-left(3);
                            .fs(10);
                            border:1px solid #eee;
                        }
                    }
                }
                .line2{
                    flex:1;
                    .h(40);
                    color:#777;
                    .fs(10);
                    display: flex;
                    .rate-wrap{
                        flex:1;
                        align-self: center;
                        .star{
                            i{
                                .fs(8);
                                color:#f49d1a;
                                .mg-left(3);
                            }
                        }
                        .saled{
                            color:#555;
                            .fs(12);
                            .mg-left(8);
                        }
                    }
                    .delivery-wrap{
                        align-self: center;
                        border:1px solid #3190e8;
                        .border-radius(2);
                        .h(15);
                        span{
                            color:#3190e8;
                            .fs(10);
                        }
                    }
                    
                }
                .line3{
                    flex:1;
                    .fs(10);
                    display: flex;

                    *{
                        float: left;
                        .fs(12);
                        color:#666;
                    }
                    .moneylimit{
                        flex:1;

                    }
                    .timedistance-wrap{
                        align-self: flex-start;
                        span{
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
}
</style>
