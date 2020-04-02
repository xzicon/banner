function Banner(){
    var x1={
      container:'#box',
      timer:1000,
      imgSrc:[
          'img/b1.png',
          'img/b2.png',
          'img/b3.png',
          'img/b4.png',
          'img/b5.png']
    },
    $s1=$('<div class="slider" id="slider"></div>'),
    $left=$('<span id="left"><</span>'),
    $right=$('<span id="right">></span>'),
    $N=$('<ul class="nav" id="navs"></ul>'),
    index=1,
    timer,
    $navbar;
  
    this.init=function(conf){
      $.extend(x1,conf);
      $(x1.container).append($s1);
      $(x1.container).append($left);
      $(x1.container).append($right);
      $(x1.container).append($N);
      var $s2=$('<div class="slide"><img src="'+x1.imgSrc[x1.imgSrc.length-1]+'" alt=""></div>')
      $s1.append($s2);
      for(var i=0;i<x1.imgSrc.length;i++){
        var $s2=$('<div class="slide"><img src="'+x1.imgSrc[i]+'" alt=""></div>');
        var $li=$('<li>'+(i+1)+'</li>');
        $s1.append($s2);
        $N.append($li);
      }
      $s2=$('<div class="slide"><img src="'+x1.imgSrc[0]+'" alt=""></div>');
      $s1.append($s2);
      $navbar=$N.children();
      navchange();
      timer=setInterval(fn1,x1.timer);
      function fn1(){
        index++;
        if(index===(x1.imgSrc.length+1)){
          $s1.css("left","-1200px");
          index=1;
        }else{
          $s1.stop().animate({left:index*-1200},300);
        }
        navchange();
  
      }
      function last(){
        index--;
        if(index===0){
          $s1.css("left",x1.imgSrc.length*-1200+'px');
          index=x1.imgSrc.length;
        }else{
          $s1.stop().animate({left:index*-1200},300);
        }
        navchange();
      }
      $(x1.container).mouseover(function(){
        $left.css("opacity",0.5);
        $right.css("opacity",0.5);
        clearInterval(timer);
      })
      $(x1.container).mouseout(function(){
        $left.css("opacity",0);
        $right.css("opacity",0);
        timer=setInterval(fn1,x1.timer);
      })
      $left.click(last);$right.click(fn1);
      function navchange(){
        $navbar.siblings().removeClass('active');  
        $navbar.eq(index-1).addClass('active');
      }
      $navbar.each(function(i){
        $($navbar[i]).click(function(){
          index=$(this).index()+1;
          $s1.stop().animate({left:index*-1200},300);
          navchange()
        })
      })
    }
  }

