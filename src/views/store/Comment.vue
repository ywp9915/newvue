<template>
    <div id="comment">
        <div class="header-nav">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="header-title">店铺评论</div>
            <div class="user">
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
        <div class="main">
            <div class="no-comment">该门店目前还没有评论</div>
            <div class="comment-item" v-for="(items,index) in list" :key="index">
                <div class="comment-info">
                    <div class="nickname">{{items.nickname}}</div>
                    <div class="comment-level">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="time">{{items.dateline}}</div>
                <div class="content">{{items.content}}</div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import api from "../../api/api.js";
export default {

    name: "Comment",
    data:()=>{
        return{
            list:[],
        };
    },
    components:{
        Header,
    },
    mounted:function(){
        api.callapi("stores.evaluationList", [])
        .then(({ data = [] }) => {
            this.list = data.message;
        })
    }
}
</script>

<style lang="less" scoped>
@import '../../style/main.less';
#comment{
    position: relative;
    overflow: hidden;
    .header-nav{
        .h(44);
        z-index: 1;
        overflow: hidden;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        background: linear-gradient(to right,#fec35d, #ff704e, #fd4324) !important;
        .nav-left-item{
            width: 25%;
            float: left;
            .h(44);
            .lh(44);
            i{
                display: block;
                .mg-left(10);
                .fs(28);
                .lh(44);
                color:#fff;
            }
        }
        .header-title{
            width:50%;
            .h(44);
            .lh(44);
            color:#fff;
            float: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            overflow: hidden;
            .fs(17);
            font-weight: 700;
        }
        .user{
            width: 20%;
            float: right;
            .h(44);
            .lh(44);
            i{
                display: block;
                .fs(28);
                .lh(44);
                .mg-left(38);
                color:#fff;
            }
        }
    } 
    .main{
        position: fixed;
        .top(44);
        .left(0);
        .right(0);
        .mg(0,0,12,0);
        .pd(15,15,15,15);
        /*width:100%;*/
        /*height:100%;*/
        overflow:auto;
        background:#fff;
        .no-comment{
            .fs(14);
            color:#555;
            .h(40);
            .lh(40);
            border-bottom:1px solid #eee;
            

        }
        .comment-item{
            display:flex;
            flex-flow: column nowrap;
            .fs(14);
            .pd(5,0,5,0);
            border-bottom:1px solid #eee;
            .comment-info{
                flex:1;
                .nickname{
                    flex:2;
                    .fs(14);
                    
                    color:#333;
                    float: left;
                }
                .comment-level{
                    
                    .mg-left(15);
                    float: left;
                    text-align:left;
                    i{
                        .fs(14);
                        color: #E4393C!important;
                    }
                }
            }
            .time{
                flex:1;
                .fs(12);
                .mg(5,0,5,0);
                color:#777;
            }
            .content{
                flex:1;
                .fs(14);
                color:#555;
            }
        }
    }
}
</style>


