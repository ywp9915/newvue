<template>
    <div id="user">
        <div class="header">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="header-title">用户中心</div>
            <div class="top-user-avatar">
                <div class="avatar-section">
                    <div class="avatar">
                        <img
                                class="ng-scope"
                                :src="user.headimgurl"
                        />
                    </div>
                    <div class="user-name">{{ user.nickname }}</div>
                    <div class="favorite-nav-item">
                        <span class="my-favorite-button">
                          <router-link :to="{path:'/user/collection'}">
                            <a class="ng-binding">
                              <i class="fa fa-star"></i> 我的收藏 ({{ user.count }})
                            </a>
                          </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <ul class="promotion-nav">
                <li v-for="(items,index) in list" :key="index">
                    <router-link :to="items.link" class="arrow-right">
                        <div class="pro-nav-left">
                        <i
                                :class="items.icon"
                                :style="[getStyleClass(index) , errorClass]"
                                aria-hidden="true"
                        ></i>
                            <span>{{items.name}}</span>
                        </div>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <FooterNav></FooterNav>
    </div>
</template>

<script>
    import FooterNav from "../../components/FooterNav.vue";

    export default {
        components: {
            FooterNav
        },
        data() {
            return {
                user:{
                    count:0,
                    headimgurl:'',
                    nickname:'',
                },
                list: [
                    {link: "/user/order", name: "订单中心", icon: "fa fa-money"},
                    {link: "/user/address", name: "收货地址", icon: "fa fa-map-marker"},
                    {link: "/user/refund", name: "退款记录", icon: "fa fa-qrcode"}
                ],
                activeClass: {
                    background: "orange"
                },
                errorClass: {
                    background: "#fd3412"
                }
            };
        },
        computed: {},
        methods: {
            getStyleClass: function (index) {
                return index % 2 === 1 ? this.activeClass : '';
            }
        },
        mounted: function() {
            this.$api.callapi("usercenter.getUserInfo", []).then(({ data = [] }) => {
                this.user = data.message;
            });

            console.log(window.location.href);
        },
    };
</script>

<style lang="less" scoped>
@import '../../style/main.less';
#user{
    width:100%;
    height: 100%;
    position: relative;
    .header{
        position:fixed;
        top:0;
        left:0;
        right:0;
        width:100%;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color:#fff;
        z-index:999;
        background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
       .nav-left-item{
            width: 25%;
            float: left;
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
            display: inline-block;
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
        .top-user-avatar{
            width:100%;
            .h(70);
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            color:#fff;
            .avatar-section{
                display: flex;
                .h(70);
                .avatar{
                    .w(50);
                    .h(70);
                    .lh(70);
                    .mg(0,0,0,20);
                    img{
                        display: block;
                        .w(50);
                        .h(50);
                        border-radius: 50%;
                    }
                }
                .user-name{
                    .fs(16);
                    font-weight:700;
                    .lh(70);
                    width:50%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .mg-left(10);
                }
                .favorite-nav-item{

                    .lh(70);
                    .mg-right(10);
                    .my-favorite-button{
                        .fs(14);
                        color:#fff;
                        .border-radius(5);
                        .pd(4,4,4,4);
                        border:1px solid #fff;
                        a{
                            list-style:none;
                            color:#fff !important;
                        }
                    }
                }
            }
        }
    }
    .main{
        position: absolute;
        .top(114);
        .left(0);
        .right(0);
        height:auto;
        .mg-bottom(100);
        .promotion-nav{
            .mg-top(20);
            width:100%;
            overflow: auto;
            background: #fff;
            display: flex;
            flex-flow: column nowrap;
            li{
                flex:1;
                .h(44);
                .fs(14);
                color:#555;
                border-bottom:1px solid #eee;
                a{
                    display: flex;
                    flex-flow: row nowrap;
                    .mg(0,12,0,12);
                    .lh(44);
                    div{
                        flex:1;
                        i{
                            display: inline-block;
                            .w(24);
                            .lh(24);
                            .fs(16);
                            color:#fff;
                            text-align: center;
                            // background:orange!important;
                            .border-radius(12);
                            // background-color: #fd3412!important;
                        }
                        span{
                            .mg-left(10);
                            color:#555;
                        }
                    }
                    i{
                        flex:1;
                        .lh(44);
                        .fs(16);
                        text-align: right;
                        
                    }
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