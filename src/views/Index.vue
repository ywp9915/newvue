<template>
    <div id="index">
        <Header>
        </Header>
        <div class="index-list">
            <!-- 首页列表 -->
            <ul class="swiper-nav">
                <li v-for="(item,index) in nav_lis" :key="index">
                    <router-link :to="{ path: '/store/search', params: { typeid: item.id }}" class="lis">
                        <div class="nav-lis">
                            <img :src="item.thumb" alt="">
                        </div>
                        <span class="name">{{item.name}}</span>
                    </router-link>
                </li>         
            </ul>
            <div class="nearby">
                <i class="fa fa-university" aria-hidden="true"></i>
                <span>附近商家</span>
            </div>
            <template v-if="mers.length">
                <section class="store-list" v-for="mer in mers" :key="mer.id">
                    <div class="left-wrap">
                        <img :src="mer.logo" >
                    </div>
                    <div class="right-wrap">
                        <section class="line1">
                            <h3 class="shopname premium">{{ mer.title }}</h3>
                            <div class="support-wrap">
                                <div class="activity-wrap nowrap" v-if="mer.is_meal">
                                    <i class="activity-icon icononly"> 店 </i>
                                </div>
                                <div class="tag label-red ng-scope" v-if="mer.is_meal && mer.is_delivery"></div>
                                <div class="activity-wrap nowrap" v-if="mer.is_delivery">
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
                                <span class="saled" v-if="mer.sales>0">已售{{ mer.sales }}份</span>
                            </div>
                            <div class="delivery-wrap">
                                <span class="icon-delivery" v-if="mer.is_delivery">准时达</span>
                                <span class="icon-delivery" v-else>商家联盟</span>
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
            </template>
            <template v-else-if="mers_inited">
                <section class="no-data">
                    sorry! 没有数据
                </section>
            </template>
            <template v-else>
                <section class="no-data">
                    数据加载中。。。
                </section>
            </template>
            <div class="top-btn">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>

            <div class="common">
                <router-link :to="{ name:'switch', params: {uniacid:8} }" tag="div"><span>公众号8</span></router-link>
                <router-link :to="{ name:'switch', params: {uniacid:11} }" tag="div"><span>公众号11</span></router-link>
            </div>
        </div>

        <footer-nav class="footer-nav"></footer-nav>
        <baidu-map @ready="handler"></baidu-map>
    </div>
</template>

<script>
    import FooterNav from "../components/FooterNav.vue";
    import Header from "../components/Header.vue";

    export default {
        name: "index",
        data:()=>{
            return {
                mers_inited:false,
                mers:[],
                nav_lis:[],
            };
        },
        beforeRouteEnter(to, from, next) {
            next();
        },
        beforeRouteUpdate (to, from, next) {
            console.log('beforeRouteUpdate', to, from, next);
        },
        methods:{
            handler ({BMap, map}) {
                console.log('handler');
                let _this = this;   // 设置一个临时变量指向vue实例，因为在百度地图回调里使用this，指向的不是vue实例；
                if (!_this.$store.state.init_geolocation) {
                    var geolocation = new BMap.Geolocation();
                    geolocation.getCurrentPosition(function(r){
                        if(this.getStatus() == BMAP_STATUS_SUCCESS){
                            console.log(r.point, this.getStatus());
                            _this.$store.commit('update_point', r.point);
                            _this.$api.callapi("index.getNearbyBus", r.point).then(({ data = [] }) => {
                                _this.mers = data.message.list;
                                _this.mers_inited = true;
                            });
                        }
                        else {
                            console.log('failed'+this.getStatus());
                        }
                    },{"enableHighAccuracy": true});
                }

                console.log(_this.$store.state.point);
            }
        },
        mounted: function() {
            console.log('mounted');
            this.$api.callapi("index.getStoreType", []).then(({ data = [] }) => {
                this.nav_lis = data.message;
            });
            if (this.$store.state.init_geolocation) {
                this.$api.callapi("index.getNearbyBus", this.$store.state.point).then(({ data = [] }) => {
                    this.mers = data.message.list;
                    this.mers_inited = true;
                });
            }
        },
        components: {
            FooterNav,
            Header
        }
    };
</script>
<style lang="less" scoped>
@import '../style/main.less';
#index{
    position: relative;
    width: 100%;
    overflow: hidden;
    Header{
        position: fixed;
        width:100%;
        .h(44);
        .top(0);
        .right(0);
        .left(0);
    }
    .index-list{
        background:#fff;
        overflow: auto;
        .mg-top(44);
        width:100%;
        .swiper-nav{
            width:100%;
            .h(100);
            border-bottom:0.01rem solid #ccc;
            display: flex;
            flex-flow:row nowrap;
            justify-content: flex-start;
            li{
                height:70%;
                .mg(15,15,0,15);
                .lis{
                    display: flex;
                    flex-flow:column wrap;
                    justify-content: flex-start;
                    .nav-lis{
                        img{
                            display: inline-block;
                            .w(50);
                            .h(50);
                        }
                    }
                    .name{
                        .fs(12);
                        color:#555;
                        text-align: center;
                    }
                }
            }
        }
        .nearby{
            width:100%;
            .h(50);
            vertical-align: middle;
            border-bottom:1px solid #f7f7f7;
            vertical-align: middle;
            i{
                display: inline-block;
                .fs(14);
                .mg-left(15);
                color: #7a7a7a;
                vertical-align: middle;
            } 
            span{
                display: inline-block;
                .fs(14);
                .mg-left(6);
                color: #6a6a6a;
                vertical-align: middle;
                font-weight: 500;
             }
        }
        .store-list{
            display: flex;
            flex-flow: row nowrap;
            .mg(10,0,10,0);
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
                        color:#fd3412;
                        border:1px solid #fd3412;
                        .border-radius(2);
                        .h(15);
                        span{
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
        .no-data{
            .h(100);
            .fs(20);
            text-align: center;
            .lh(100);
        }
        .top-btn{
            position: fixed;
            .bottom(55);
            .right(10);
            i{
                .fs(30);
                color:rgb(182, 174, 174);
                display: inline-block;
                .w(50);
                .h(50);
                .lh(50);
                text-align:center;
            }
        }
        .common{
            .h(50);
            width:100%;
            // .mg-top(15);
            display:flex;
            // border-top:1px solid #eee;
            justify-content: space-around;
            div{
                width:50%;
                .lh(50);
                .h(50);
                text-align:center; 
                span{
                    display: block;
                    .h(50);
                    color:#333;
                    .fs(14);
                    .lh(50);
                    text-align:center;
                }
            }
        }
    } 
    .footer-nav{
        position:fixed;
        left:0;
        bottom: 0;
        right:0;
        .h(50);
        font-size: 24px;
        text-align: center;
        background:#fff;
        z-index:9999;
    }
}
</style>

