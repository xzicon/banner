       
function Carousel(){
  var cfg={
    container:'#box',
    timer:1000,
    imgSrc:['img/b1.png','img/b2.png','img/b3.png','img/b4.png','img/b5.png']
  },
  $slider=$('<div class="slider" id="slider"></div>'),
  $left=$('<span id="left"><</span>'),
  $right=$('<span id="right">></span>'),
  $navs=$('<ul class="nav" id="navs"></ul>'),
  index=1,
  timer,
  $navbar;

  this.init=function(conf){
    $.extend(cfg,conf);
    $(cfg.container).append($slider);
    $(cfg.container).append($left);
    $(cfg.container).append($right);
    $(cfg.container).append($navs);
    
    var $slide=$('<div class="slide"><img src="'+cfg.imgSrc[cfg.imgSrc.length-1]+'" alt=""></div>')
    $slider.append($slide);
    for(var i=0;i<cfg.imgSrc.length;i++){
      var $slide=$('<div class="slide"><img src="'+cfg.imgSrc[i]+'" alt=""></div>');
      var $li=$('<li>'+(i+1)+'</li>');
      $slider.append($slide);
      $navs.append($li);
    }
    $slide=$('<div class="slide"><img src="'+cfg.imgSrc[0]+'" alt=""></div>');
    $slider.append($slide);
    $navbar=$navs.children();
    navchange();
    //定时器自动轮播
    timer=setInterval(next,cfg.timer);
    //向后
    function next(){
      index++;
      if(index===(cfg.imgSrc.length+1)){
        $slider.css("left","-1200px");
        index=1;
      }else{
        $slider.stop().animate({left:index*-1200},300);
      }
      navchange();

    }
    //向前
    function prev(){
      index--;
      if(index===0){
        $slider.css("left",cfg.imgSrc.length*-1200+'px');
        index=cfg.imgSrc.length;
      }else{
        $slider.stop().animate({left:index*-1200},300);
      }
      navchange();
    }
    //滑入
    $(cfg.container).mouseover(function(){
      $left.css("opacity",0.5);
      $right.css("opacity",0.5);
      clearInterval(timer);
    })
    //划出
    $(cfg.container).mouseout(function(){
      $left.css("opacity",0);
      $right.css("opacity",0);
      timer=setInterval(next,cfg.timer);
    })
    //点击向前滑
    $left.click(prev);
    //点击向后滑
    $right.click(next);
    //控制下方标识随轮播改变
    function navchange(){
    
      $navbar.siblings().removeClass('active');  
      $navbar.eq(index-1).addClass('active');
    }
    //点击下标跳页
    $navbar.each(function(i){
      $($navbar[i]).click(function(){
        index=$(this).index()+1;
        $slider.stop().animate({left:index*-1200},300);
        navchange()
      })
    })
  }
}
