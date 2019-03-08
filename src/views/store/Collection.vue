<template>
    <div id="collection">
        <div class="header-nav">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="header-title">门店收藏</div>
        </div>
        <div class="main">
            <div class="morelist branch-item ">
                <div class="branch-image">
                    <img src="http://images.dtroad.cn/Uploads/2017-12-11/5a2de2c34ab15.jpeg">
                </div>
                <div class="delivery-info">
                    <div class="line1">
                        <div class="name ng-binding">
                            隆江猪脚饭
                        </div>
                        <div class="tag label-red ng-scope">营业中</div>
                        <div class="tag label-org ng-scope">店</div>
                        <div class="tag label-blue ng-scope">外</div>
                        <div class="distance right ng-binding" id="shopspostion">10.21km</div>
                    </div>
                    <div class="line2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="line3">
                        <div class="fee ng-binding">
                            <span class="ng-binding ng-scope">配送费￥0.00</span>
                            <span class="spliter"></span>
                        </div>
                        <div class="address ng-binding">122222222222222</div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import FooterNav from "../../components/FooterNav.vue";
import api from "../../api/api.js";
export default {
    name:"collection",
    data(){
        return{

        }
    },
    component:{

    },
}
</script>
<style  lang="less" scoped>
@import '../../style/main.less';
#collection{
    position: relative;
    overflow: hidden;
    .header-nav{
        position:fixed;
        top:0;
        left:0;
        right:0;
        width:100%;
        .h(44); 
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color:#fff;
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
    }
    .main {
        .mg-top(44);
        background-color: #fff;
        z-index: 2;
        .morelist{
            .pd(10,8,6,10);
            border-bottom: 1px dotted #eee;
            overflow: hidden;
            .branch-image{
                .w(70);
                .h(36);
                float: left;
                img{
                    display:inline-block;
                    .w(64);
                    .h(64);
                    .border-radius(4);
                }
            }
            .delivery-info{
                float: left;
                .w(276);
                .pd-left(8);
                color: #333;
                .line1{
                    .h(24);
                    .fs(16);
                    .lh(24);
                    .pd-bottom(4);
                    overflow: hidden;
                    .name{
                        float: left;
                        text-overflow: ellipsis;
                        .mg-right(4);
                    }
                    .tag{
                        float: left;
                        color: #fff;
                        .fs(12);
                        .h(16);
                        .lh(16);
                        .mg(4,2,1,2);
                        .pd(0,2,0,2);
                        .border-radius(1);
                        text-overflow: ellipsis;
                    }
                    .label-red{
                        background-color: #fd3412;
                    }
                    .label-org{
                        background-color: #ef4437;
                    }
                    .label-blue{
                        background-color: #34afbe;
                    }
                    .distance{
                        float: right;
                        vertical-align: middle;
                    }
                }
                .line2{
                    .h(14);
                    .lh(14);
                    overflow: hidden;
                    i{
                        color:#E4393C;
                        letter-spacing: 3px;
                        .fs(12);
                        float: left;
                    }
                }
                .line3{
                    .lh(18);
                    .fs(12);
                    word-wrap : break-word;
                }
                .line4{
                    .lh(18);
                    .fs(12);
                    word-wrap : break-word;
                }
            }
        }
    }
}

</style>


