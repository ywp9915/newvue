
<template>
    <div id="edit-address">
        <div class="header-nav">
            <div class="cancel" v-on:click="$router.go(-1)">
                取消
            </div>
            <div class="header-title">编辑地址</div>
            <div class="save">保存</div>
        </div>
        <div class="main">
            <div class="address-editor">
                <div class="address-editor-ribbon"></div>
                <!-- <input type="hidden" name="lat" id="lat" value="23.1200491">
                <input type="hidden" name="lng" id="lng" value="113.30764968"> -->
                <ul class="full-width-form">
                    <li class="item-content item1">
                        <div class="item-inner">
                            <div class="item-title label">收餐地址:</div>
                            <div class="input-address" >
                                <input type="text" name="mapaddress" value="广州市越秀区  -19390就覅发">
                            </div>
                            <div class="item-icon" onclick="$('#tagmap').slideToggle(500);">
                                <img src="../../images/inn_gps_icon.png">
                            </div>
                        </div>
                    </li>
                    <li class="item-content item2">
                        <div class="item-inner">
                            <div class="item-title label">提示:移动地图中心让红色的点定位在您想要的地址上即可</div>
                            <div class="item-input">
                                <!-- 地图 -->
                            </div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">门牌号:</div>
                            <div class="item-input">
                                <input type="text" placeholder="楼层/门牌号等信息" id="doorplate" name="doorplate" value="">
                            </div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">联系人:</div>
                            <div class="item-input">
                                <input type="text" placeholder="您的姓名" id="realname" name="realname" value="">
                            </div>
                        </div>
                    </li>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">联系电话:</div>
                            <div class="item-input">
                                <input type="tel" maxlength="13" placeholder="配送员联系您的方式" value="" id="mobile" name="mobile">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="operation">
                <div class="operation-item del-address">
                    <span>删除该地址</span>
                </div>
                <div class="operation-item default-address">
                    <span>设为默认地址</span>
                </div>
            </div>
        </div>  
    </div>    
</template>
<script>
import FooterNav from "../../components/FooterNav.vue";
import api from "../../api/api.js";
export default {
    name:"editaddress",
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
#edit-address{
    width:100%;
    // height:100%;
    position: relative;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    .header-nav{
        .h(46);
        z-index: 1;
        background:#fff;
        border-bottom: .02rem solid #eee;
        overflow: hidden;
        .cancel{
            color: #f34336;
            .fs(16);
            .h(46);
            .lh(46);
            text-align: center;
            .w(46);
            float: left;
        }
        .header-title{
            float: left;
            width:72%;
            .h(46);
            .lh(46);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            overflow: hidden;
            .fs(17);
            color:#3d4145;
        }
        .save{
            float: left;
            .w(46);
            color: #f34336;
            .fs(16);
            .h(46);
            .lh(46);
            .mg-left(13);
        }
    }
    .main{
        width:100%;
        overflow:auto;
        position:absolute;
        .top(44);
        .left(0);
        .right(0);
        .fs(14);
        color:#333;
        .mg-top(10);
        .address-editor{
            width:100%;
            height:100%;
            background:#fff;
            .address-editor-ribbon{
                .h(8);
                background:#fff url(../../images/line.gif) repeat-x 0 0;
            }
            .full-width-form{
                .item-content{
                    .item-inner{
                        display: flex;
                        border-bottom:1px solid rgb(245, 245, 245);
                        .item-title{
                            width:30%;
                            .h(30);
                            .lh(30);
                            .mg(4,0,4,10);
                        }
                        .item-input{
                            .h(30);
                            .mg(4,0,4,10);
                            .lh(30);
                        }
                    }
                }
                .item1{
                    .item-inner{
                        .input-address{
                            .mg-top(5);
                            flex:1;
                            overflow: hidden;
                            input{
                                width:100%;
                                display: inline-block;
                                .h(30);
                                .lh(30); 
                            }
                            input:focus{
                                border:1px solid rgb(250, 201, 42);
                            }
                        }
                        .item-icon{
                            img{
                                display: inline-block;
                                width:10%;
                                .w(24);
                                .h(24);
                                .mg(5,5,0,10);
                            }
                        }
                    }
                }
                .item2{
                    .item-inner{
                        .item-title{
                            width:25%;
                            white-space: normal;
                            .lh(21);;
                            text-align: left;
                            height: auto;
                            overflow:hidden;
                            color:#f60;
                            text-overflow:ellipsis;
                            .pd(40,10,10,10);;
                        }
                        .item-input{
                            .h(200);
                            flex:1;
                            .mg(10,10,10,10);
                            border:1px solid #ddd;
                        }
                    }
                }
            }
        }   
        .operation{
            width:100%;
            background:inherit;
            .operation-item{
                background:#fff;
                .mg(15,0,15,0);
                span{
                    display: inline-block;
                    width:100%;
                    .fs(16);
                    color:#f34336;
                    text-align:center;
                    .h(44);
                    .lh(44);
                    
                }
            }
        }
    }
}

</style>