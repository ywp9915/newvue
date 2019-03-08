
<template>
    <div id="address">
        <div class="header-nav">
            <div class="nav-left-item" v-on:click="$router.go(-1)">
                <img src="../../images/ic_back.png" alt="">
            </div>
            <div class="header-title">我的收获地址</div>
            <router-link :to="{ path:'/user/address/create'}" tag="div"><div class="creat">新增</div></router-link>
        </div>
        <div class="main">
            <ul>
                <li class="item-content item-link" v-for="address in lis" :key="address.id">
                    <div class="address-list-info" >
                        <p class="user-address">{{address.address}} {{address.doorplate}} {{showIsDefault(address.isdefault)}}</p>
                        <p class="user-info">{{address.realname}} {{address.mobile}}</p>
                    </div>
                    <div class="item-input" >
                        <router-link :to="{ name:'user_edit_address', params:{address_id:address.id}}" tag="div">
                            <img src="../../images/edit.png" >
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>    
</template>
<script>
export default {
    data:()=>{
        return{
            page:1,//分页数,大于0就表示没有加载完
            lis:[],
        }
    },
    component:{

    },
    methods:{
        showIsDefault:function(isdefault){
            console.log(isdefault);
            return isdefault == 1 ?'[默认]':'';
        },
        loadList : function(){
            if (this.page > 0) {
                let load_page = this.page;
                this.page = 0;
                this.$api.callapi("useraddress.getUserAddress", {page:load_page}).then(({ data = [] }) => {
                    let arr = [];
                    this.lis = arr.concat(this.lis, data.message.list);
                    this.page = data.message.pindex;
                });
            }
        },
    },
    mounted:function(){
        this.loadList();
    }
}
</script>
<style  lang="less" scoped>
@import '../../style/main.less';
#address{
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
        .nav-left-item{
            .w(46);
            .h(46);
            float: left;
            img{
                .h(22);
                .w(22);
                .mg-left(10);
                .mg-bottom(2);
            }

        }
        .header-title{
            /*flex:1;*/
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
        .creat{
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
        overflow: auto;
        height: auto;
        ul{
            background:#fff;
            .mg-top(10);
            height: auto;
            overflow: hidden;
            li{
                justify-content:space-between; 
                .pd(10,12,10,12);
                border-bottom: .02rem solid #eee;
                overflow: hidden;
                .address-list-info{
                    width: 80%;
                    float: left;
                    .user-address{
                        color:#333;
                        .fs(14);
                        .lh(20);
                        overflow: hidden;
                    }
                    .user-info{
                        color:#777;
                        .fs(14);
                        .lh(20);
                    }
                }
                .item-input{
                    .w(18);
                    .h(18);
                    .lh(18);
                    float: right;
                    img{
                        .mg-top(10);
                        .w(18);
                        .h(18);
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}

</style>






