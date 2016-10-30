var load_tpl = '<div class="col s12 m12">\
    <div class="card">\
        <ul class="collection">\
            <li class="collection-item avatar">\
                <img id="headimg" src="/addons/picturewall/template/mobile/imgs/headImg1.jpg" alt="头像" class="headImg circle responsive-img materialboxed"/>\
                <span class="title"></span>\
                <span class="time"></span>\
                <span  class="u-thumbBtn" flag="1" tabindex="0"><i class="mdi-action-favorite-outline"><span>0</span></i></span>\
            </li>\
        </ul>\
        <div class="card-image">\
            <span class="imgNum"style=""></span>\
        </div>\
        <div class="card-content">\
            <p></p>\
        </div>\
        <div class="criIcon">\
            <span class="criNum">评论数(100)</span>\
            <i class="mdi-communication-textsms critical"></i>\
        </div>\
        <div class="criArea">\
        <span>显示全部评论</span>\
        <div class="criItem">姓名:jlskjfal;jgslkgjs看过dkfjal;dkfjal;sdkfjeoinflsfjelirjjfdslakfja;lekjfieojrewasdfasfadfasdfasdfasdfasdfa</div>\
        <div class="criItem">姓名:jlskjfal;jgslkgjs看过dkfjal;dkfjal;sdkfjeoinflsfjelirjjfdslakfja;lekjfieojrewasdfasfadfasdfasdfasdfasdfa</div>\
        </div>\
    </div>\
</div>\
<div class="slide-box">\
<span class="close-btn"><i class="mdi-navigation-close"></i></span>\
<div class="img-description">\
</div>\
<div class="num-box">\
    <span class="num"></span>/<span class="sum"></span>\
</div>\
</div>';
var type;


//    加载图标
function loading() {
    var windowHeight=window.innerHeight;
    var windowWidth=window.innerWidth;
//        console.log('height: '+windowHeight+' width: '+windowWidth);
    $('body').prepend('\
            <div class="preloader-wrapper big active mask" style="position: fixed;top:' + (windowHeight / 2) + "px" + ' ;left:' + (windowWidth / 2 - 30) + "px" + ' ;z-index: 999">\
            <div class="spinner-layer spinner-blue-only">\
            <div class="circle-clipper left">\
            <div class="circle">\
            </div>\
            </div>\
            <div class="gap-patch"><div class="circle"></div>\
            </div>\
            <div class="circle-clipper right">\
            <div class="circle"></div>\
            </div>\
            </div>\
            </div>');
    $('.mask').fadeOut(1500);
}
//    热门和最新按钮切换
    function btnChange(){
        $('#hot-btn').click(function() {
            if ($('#hot-btn').hasClass('s-blue-font')) {
                change1();
                max=0;//无数大
                loadingHot();
            }

        });
        $('#latest-btn').click(function () {
            if ($('#latest-btn').hasClass('s-blue-font')) {
                change2()
                max=0;//无数大
                loadingLatest();
            }

        });

    }


    function change1(){
        $('#hot-btn').removeClass('s-blue-font');
        $('#hot-btn').addClass('light-blue');
        $('#latest-btn').removeClass('light-blue');
        $('#latest-btn').addClass('s-blue-font');
    }

    function change2(){
        $('#latest-btn').removeClass('s-blue-font');
        $('#latest-btn').addClass('light-blue');
        $('#hot-btn').removeClass('light-blue');
        $('#hot-btn').addClass('s-blue-font');
    }

//    点击后滑动查看所有图片
function clickImg(){

    $('body').on('click','img.first',function(e){


        // alert('你好啊')
        var $this = $(this);
        var _result = '';

        // var _index = $this.index();
        // 拼接swipeSlide字符串
        _result += '<div class="slide"><ul>';
        $this.parents('.card-image').find('img').each(function(i){
            var _src = $(this).attr('src');
//                _result += '<li><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + _src.substring(0,_src.lastIndexOf('_')) + '_640x640.jpg"></li>';
            _result+='<li><img src="'+_src+'"/></li>';
        });
        _result += '</ul></div>';
        $(this).parents('.m12').siblings('.slide-box').show().prepend(_result);
        //$(this).parents('.u-showDiv').siblings('.slide-box');
        console.log('xianb')
        var that = this;
        // swipeSlide
        $(this).parents('.m12').siblings('.slide-box').children('.slide').swipeSlide({
            // index : _index,
            continuousScroll : true,
            autoSwipe : false,
            lazyLoad : true,
            firstCallback : function(i,sum){

                console.log(i)
                $(that).parents('.m12').siblings('.slide-box').children('.num-box').find('.num').text(i+1);
                $(that).parents('.m12').siblings('.slide-box').children('.num-box').find('.sum').text(sum);
            },
            callback : function(i,sum){
                $(that).parents('.m12').siblings('.slide-box').children('.num-box').find('.num').text(i+1);
            }
        });

        //
        // $('body').on('click','.close-btn',function(e){
        //
        //     // e.preventDefault();
        //     $(this).siblings('.slide').remove();
        //     $(this).parent().hide();
        //
        // });

        $(this).parents('.m12').siblings('.slide-box').on('click',function(e){
            e.preventDefault();
            $(this).hide();
            $(this).children('.slide').remove();
        });
    });



    // 关闭按钮
    /*$('.close-btn').on('click',function(){

        $('.slide').remove();
        $('.slide-box').hide();
    });*/



}

function getLike(){
        var $likeNum=$('.u-thumbBtn');
//        alert($likeNum.length);
        $likeNum.each(function(){
            if($(this).attr('flag')=='1'){
                $(this).children().first().css('color','red');
            }
            else{
               $(this).children().first().css('color','#daaa1b');
            }
        });
    }



function changeLike() {
    var timer = null;
    $('body').on('click', 'span.u-thumbBtn', function (e) {
        /*e.stopPropagation();
        e.preventDefault();*/

        // return false;
        if (timer!= null) {
            console.log('if(timer!=null) :'+timer);
            return false;
        }


//            console.log('timer==null :'+timer);
//                已经点赞
        if ($(this).attr('flag') == 2) {//状态是没点赞的
//                console.log('this1:'+$(this).attr('flag'));

            var _this=$(this);
            timer = setTimeout(function () {
                timer=null;
                var obj = _this;


//                取消赞
                $.ajax({
                    url: 'http://wq.yangge.ac.cn/app/index.php?i=2&c=entry&do=dianzan&m=picturewall',
                    dataType: 'json',
                    type: 'post',
                    data: {
                        "flag": "1",
                        "id": _this.attr('id'),
                        "openid":window.openid
                    },
                    success: function (data) {
                        console.log(data)
                        if(data['code']==200){
                            //    变为红色
                            _this.children().first().css('color','red');
                            //    console.log('this2:'+_this.attr('flag'));
                            _this.append('<div id="zhan" style="font-size:16px"><b>+1</b></div>');
                            //    console.log($(this));
                            $('#zhan').css({
                                'position': 'absolute',
                                'z-index': '1000',
                                'color': '#ffab40'
                            }).animate({top: -40}, 'slow', function () {
                                $('#zhan').fadeIn('fast').remove();
                                var Num = parseInt(obj.find('span').text());
                                Num++;
                                obj.find('span').text(Num);
                            });
                            _this.attr('flag', '1');
                            console.log('点赞成功');
                        }else{
                            alert('点赞失败');
                        }
                    },
                    error:function(e,f,j){
                        console.log(e,f,j);
                        tmier = null;
                    }
                });
//                    timer=null;
                // return false;
            }, 300);
        }
//                未点赞
        else if ($(this).attr('flag') == 1) {

            timer=null;
            var _this=$(this);
            timer = setTimeout(function () {


//                点赞,传输flag与id
                        $.ajax({
                            url: 'http://wq.yangge.ac.cn/app/index.php?i=2&c=entry&do=dianzan&m=picturewall',
                            dataType: 'json',
                            type: 'post',
                            data: {
                                "flag": "2",
                                "id": _this.attr('id'),
                                "openid":window.openid
                            },
                            success: function (data) {
                                console.log(data)
                                if(data['code']==200){
                                    _this.children().first().css('color','#daaa1b');
                                    var obj = _this;
                                    _this.prepend('<div id="zhan" style="font-size:16px"><b>-1</b></div>');
                                    $('#zhan').css({
                                        'position': 'absolute',
                                        'z-index': '1000',
                                        'color': '#ffab40'
                                    }).animate({top: 30}, 'slow', function () {
                                        $('#zhan').fadeIn('fast').remove();
                                        var Num = parseInt(obj.find('span').text());
                                        Num--;
                                        obj.find('span').text(Num);
                                    });
                                    _this.attr('flag', '2');
                                    console.log('点赞成功');
                                }else{
                                    alert('点赞失败');
                                }
                                timer=null;
                            },
                            error:function(e,f,j){
                                console.log(e,f,j);
                                timer = null;
                            }
                        });

                        // return false;
                    }, 300);
        }
    });
};


//    返回顶部
function backTop(){
//        按钮出现消失
    $(window).scroll(function(){
//            alert('1');
        if ($(window).scrollTop()>300){
            $("#back-to-top").fadeIn(200);
        }
        else {
            $("#back-to-top").fadeOut(200);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").on('click',function(){
        // alert(4)
        $('body,html').stop().animate({scrollTop:0},1000);
        return false;
    });
}
//    滚动监听
function scrollLoading(){
    // type=type;
    $(window).on('scroll',function(){
//            var displayBlockHeight=$('.u-showDiv').length*$('.u-showDiv').height();
//            console.log('length:'+$('.u-showDiv').length+' height:'+$('.u-showDiv').height()+' displayHeight:'+displayBlockHeight);
//            console.log('window.scrollTop:'+$(window).scrollTop());
//            console.log('windowHeight:'+$(window).height());
//            console.log('documentHeight:'+$(document).height());
        // console.log($('.u-loadingDiv').length);
        if ($(window).scrollTop() >= $(document).height() - $(window).height()&&$('.u-loadingDiv').length==0) {
            // alert('我最帅')
            $('body').append('\
                    <div class="row u-loadingDiv">\
                    <div class="col s12" style="position: relative;padding-left: 25%">\
                    <div class="preloader-wrapper big active" style="width: 20px;height: 20px">\
                    <div class="spinner-layer spinner-blue-only">\
                    <div class="circle-clipper left">\
                    <div class="circle"></div>\
                    </div>\
                    <div class="gap-patch">\
                    <div class="circle"></div>\
                    </div>\
                    <div class="circle-clipper right">\
                    <div class="circle"></div>\
                    </div>\
                    </div>\
                    </div>\
                    <span style="display: inline-block;color: rgba(0,0,0,0.5);vertical-align:top;font-size: 16px">拼了命加载中...</span>\
                    </div>\
                    </div>\
                    ');

                    setTimeout(function(){
                        createModel();
                    },1200)
        }
        $('.u-loadingDiv').fadeOut(2000,function(){
            $('.u-loadingDiv').remove();
        });
        // createModel(type);
//            console.log('2:scroll');
    });
}
//    生成展示块
var page=1; //加载页数
var imageSum=1;//总图集数量
var imageFlag=true;
var max=0;
function createModel()
{
    // console.log(type)
    if(imageFlag){
        imageFlag = false;
    // for(var i = 0;i<5;i++)
    // {
        var b=window.page;
        console.log(b)
        //alert(b);
        // if(b+1<=window.imageSum) {
            var Url = "http://wq.yangge.ac.cn/app/index.php?i=2&c=entry&do=show&m=picturewall" + "&type=" + type + "&page=" + b + "&page_num=" + "5"+"&max="+max;
            $.ajax(
                    {
                        url: Url,
                        type: 'get',
                        dataType: 'json',
                        //     $arr[]= array(
                        //     'time' => $time,//时间 o
                        //     'count' => $count,//点赞数 o
                        //     'id' => $id,//图集的id o
                        //     'my_nickname' => $my_nickname,//微信名称 o
                        //     'my_headimg_url' => $my_headimg_url,//微信头像地址 o
                        //     'description' => $describe,//描述 o
                        //     'image'=>$res,//数组形式的图片信息 里面每条元素代表一张图片 o
                        //     'image_num'=>$picture_count,//图片数量 o
                        //     'is_like'=>$is_like,//这个用户是否点赞 o!!!!!!!!!!
                        // );
                        success: function (data) {
                            console.log(data)
                            if(!data.data){
                                return false
                            }
                            max=data.data[(data.data.length-1)].id;
                    // var i=0;
                    for(var i=0;i<data.data.length;i++){
                            // i=m;/
                            console.log('i');
                            $('#' + data.data[i].id + '.row.u-showDiv').remove();
                            // (function t(i){

                            // var a = $("<div class='row u-showDiv'></div>").load("/addons/picturewall/template/mobile/load.html",function(){
                                // console.log(i)
                                $("body").append("<div class='row u-showDiv' id='"+data.data[i].id+"'>"+load_tpl+"</div>");
                                var flag = data.data[i]['is_like'];
                                // a.attr('id', );
                                $('#' + data.data[i].id + ' #headimg').attr('src', data.data[i].my_headimg_url);
                                $('#' + data.data[i].id + ' .title').text(data.data[i].my_nickname);//
                                $('#' + data.data[i].id + ' .time').text(data.data[i].time);
                                $('#' + data.data[i].id + ' .imgNum').text( data.data[i].image_num);
                                $('#' + data.data[i].id + ' .card-content p').text(data.data[i].description);
                                $('#' + data.data[i].id + ' .u-thumbBtn span').text(data.data[i]['count']);
                                $('#' + data.data[i].id + ' .u-thumbBtn').attr('id',data.data[i].id);
                                $('#' + data.data[i].id + ' .u-thumbBtn').attr('flag',data.data[i].is_like);
                                $('#' + data.data[i].id + ' .img-description').text(data.data[i].description);
                                // $('#' + data.data[0].id + ' .u-thumbBtn').attr('flag',data.data[0].is_like);
                                // alert(data.data[0].count);
                                window.flag = data.data[i].is_like;
                                $('#' + data.data[i].id + ' .card-image img').remove();

                                /*$('#' + data.data[i].id + ' .card-image').append('<img src="' + data.data[i].image[0]['path'] + '" alt="毕业照" class="responsive-img first"/>');*/
                                getLike();
                                for (var j = 0; j < data.data[i].image_num; j++) {
                                    $('#' + data.data[i].id + ' .card-image').append('<img src="' + data.data[i].image[j]['path'] + '" alt="毕业照" class="responsive-img hide"/>');
                                    if(j==0){
                                         $('#' + data.data[i].id + ' .card-image img').removeClass('hide').addClass('first')
                                    }
                                }

                            if(i==data.data.length-1){
                                imageFlag = true;
                                // type=null;
                            }
                            // });
                        // })(i);
                    }
                        },
                        error: function (a, b, c) {
                            console.log(a + ' ' + b + ' ' + c);
                        }
                    });
        // }
        // else
        // {
            // imageFlag=false;
            // break;
        // }
    // }
    window.page++;
    }
}
//    加载最热
function loadingHot(){

    $('.u-showDiv').remove();
    /*$('.card-image img.first').each(function(){
        $(this).off('click')
    })*/
type='hot';
    $('*').off();
     page=1; //加载页数
     imageSum=1;//总图集数量
     imageFlag=true;
    preLoading();
    loading();
    clickImg();
    // imgNum();
    btnChange();
    changeLike();
    backTop();
    scrollLoading();

}
//
// function remove_repeat(obj1,ary){
//
// }

//    加载最新
function loadingLatest(){
    $(".u-showDiv").remove();
    /*$('.card-image img.first').each(function(){
        $(this).off()
    })*/
type='latest';
$('*').off();
    page=1; //加载页数
    imageSum=1;//总图集数量
    imageFlag=true;
    preLoading();
    loading();
    clickImg();
    // imgNum();
    btnChange();
    changeLike();
    backTop();
    scrollLoading();
}
//预先加载
function preLoading() {
    $(".u-showDiv").each(function(){
        $(this).remove()
    });

$.ajax({
    url:"http://wq.yangge.ac.cn/app/index.php?i=2&c=entry&do=show&m=picturewall&type=hot&page=0&page_num=1",
    type:'get',
    dataType:'json',
    async:false,//同步加载
    success:function(data)
    {
        window.imageSum=data.sum['count(*)'];
    }
});

        var Url="http://wq.yangge.ac.cn/app/index.php?i=2&c=entry&do=show&m=picturewall"+"&type="+type+"&page=0&page_num="+"5"+"&max="+max;
        $.ajax(
                {
                    url:Url,
                    type:'get',
                    dataType:'json',

                    success:function(data)
                    {
                        console.log(data);
                        max=data.data[data.data.length-1].id;
                        for(var i = 0;i<data.data.length;i++){

                            $('#' + data.data[i].id + '.row.u-showDiv').remove();


                            $("body").append("<div class='row u-showDiv' id='"+data.data[i].id+"'>"+load_tpl+"</div>");

                            // console.log(data.data[0]);
                            var flag=data.data[i].is_like;
                            // a.attr('id',data.data[i].id);
                            $('#'+data.data[i].id+' #headimg').attr('src',data.data[i].my_headimg_url);
                            $('#'+data.data[i].id+' .title').text(data.data[i].my_nickname);//
                            $('#'+data.data[i].id+' .time').text(data.data[i].time);
                            $('#'+data.data[i].id+' .imgNum').text(data.data[i].image_num);
                            $('#'+data.data[i].id+' .card-content p').text(data.data[i].description);
                            $('#'+data.data[i].id+' .u-thumbBtn span').text(data.data[i].count);
                            $('#' + data.data[i].id + ' .u-thumbBtn').attr('id',data.data[i].id);
                            $('#' + data.data[i].id + ' .u-thumbBtn').attr('flag',data.data[i].is_like);
                            $('#' + data.data[i].id + ' .img-description').text(data.data[i].description);
                            // alert(data.data[0].count);
                            window.flag=data.data[i].is_like;
                            getLike();
                            $('#' + data.data[i].id + ' .card-image img').remove();
                            // $('#'+data.data[i].id).find(' .card-image').append('<img src="'+data.data[0].image[0]['path']+ '"alt="毕业照" class="responsive-img first"/>');
                            // console.log(data.data[i].image[0]['path'])
                            for(var j= 0;j<data.data[i].image_num;j++)
                            {
                                    $('#' + data.data[i].id + ' .card-image').append('<img src="' + data.data[i].image[j]['path'] + '" alt="毕业照" class="responsive-img hide"/>');
                                    if(j==0){
                                         $('#' + data.data[i].id + ' .card-image img').removeClass('hide').addClass('first')
                                    }
                            }
                            // str2=str2+data.data[i].id+":"+data.data[i].count+"--";
                        // });
                        // })(i)

                        }
                        // alert(str2);
//                     alert(data);
                    },
                    error:function(a,b,c){
                        console.log(a+' '+b+' '+c);
                    }
                });
                // if(i+1>=imageSum) break;
    // }

}


$(document).ready(function(){

    type='latest';

/*$('html').on('touchstart',function(e){
    if(e.target.tagName=='BODY'){
        e.preventDefault();
    }
})*/

   /*loadingHot();*/
preLoading();
    loading();
    clickImg();
    getLike();
    btnChange();
    changeLike();
    backTop();
    scrollLoading();

});

/*$(function(){
     $('.u-showDiv').remove();
    preLoading('hot');
    loading();
    clickImg();
    getLike();
    btnChange();
    changeLike();
    backTop();
    scrollLoading('hot');

})*/