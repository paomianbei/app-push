/**
 * Created by zhanghuizhen on 2017/6/8.
 */
window.onload=function(){
    new Vue({
        data: {
            title:'智能画像系统',
            active: false,
            activeIndex: '3',
            activeIndex2:['1'],
            show:false,
            sidebar:true,
            font:false,
            iframe:'management.html',
            person:{
                department:'研究院',
                job:'工程师',
                name:'张三丰',
                imgSrc:'images/main/persional.png'
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                var _this=this;
                if(document.body.clientWidth<1300){
                    _this.font=true;
                }else {
                    _this.font=false;
                }
                window.onresize=function(){
                    if(document.body.clientWidth<1300){
                        _this.font=true;
                    }else {
                        _this.font=false;
                    }

                }
                //if(document.body.clientWidth<1280){
                //    _this.show=true;
                //    _this.title='画像';
                //    _this.sidebar=false;
                //}else {
                //    _this.show=false;
                //    _this.title='智能画像系统';
                //    _this.sidebar=true;
                //}
                //window.onresize=function(){
                //    if(document.body.clientWidth<1280){
                //        _this.show=true;
                //        _this.title='画像';
                //        _this.sidebar=false;
                //    }else {
                //        _this.show=false;
                //        _this.title='智能画像系统';
                //        _this.sidebar=true;
                //    }
                //
                //}

            });

        },
        methods: {
            more:function(){
                this.show=!this.show;
                if(this.show==false){
                    this.title='智能画像系统';
                    this.sidebar=true;
                }else {
                    this.title='画像';
                    this.sidebar=false;
                }

            },
            handleSelect:function(key, keyPath,e) {
                console.log(e);
            },
            handleOpen:function(key) {
                var openList=document.getElementById('open');
                var children=openList.children;
                //当前菜单选中背景变成蓝色
                for(var i=0;i<children.length;i++){
                    children[i].className="el-submenu"
                }
                children[key-1].className="el-submenu is-opened";
                //营销效果监测icon更改
                if(key==2){
                    children[key - 1].children[0].children[1].style.transform="rotateZ(0)";
                    console.log(children[key - 1].children[0].children[1]);
                }
            },
        }

    }).$mount('#app')
}