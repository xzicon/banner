var $banner = (function () {
    
    var index = 1;
    var $div = $(''
    + '<div class="slider" id="slider">'
    + '<div class="slide"><img src="img/b5.png" alt=""></div>'
    + '<div class="slide"><img src="img/b1.png" alt=""></div>'
    + '<div class="slide"><img src="img/b2.png" alt=""></div>'
    + '<div class="slide"><img src="img/b3.png" alt=""></div>'
    + '<div class="slide"><img src="img/b4.png" alt=""></div>'
    + '<div class="slide"><img src="img/b5.png" alt=""></div>'
    + '<div class="slide"><img src="img/b1.png" alt=""></div>'
    + '</div>'
    + '<span id="left"><</span>'
    + '<span id="right">></span>'
    + '<ul class="nav" id="navs">'
    + '<li class="active">1</li>'
    + '<li>2</li>'
    + '<li>3</li>'
    + '<li>4</li>'
    + '<li>5</li>'
    + '</ul>'
    )
function show(){
    var num = 1,
        isloading = false;
    var timer = setInterval(next, 3000);
    var $box = $('#box');
    $box.append($ban);
    var $slider = $('#slider');
    var $left = $('#left');
    var $right = $('#right');
    var $navs = $('#navs').children();

    $box.mouseover(function(){
      left.style.opacity = 0.5;
      right.style.opacity = 0.5;
      clearInterval(timer)
    })
        $box.mouseenter(function () {
            left.style.opacity = 0.7;
            right.style.opacity = 0.7;
            clearInterval(onload)
        })
        $box.mouseleave(function () {
            left.style.opacity = 0;
            right.style.opacity = 0;
            onload = setInterval(next, 2500)

        })
        function lunbo(time,index, callback) {
            clearInterval(timer);
            timer = setInterval(function () {
                var isStop = true;
                var width = parseInt(getStyle(slider, 'left'));
                var speed = (-1200 * index - width) / 20;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                var now = width -10;
                if (-1200 * index !== now+10) {
                    isStop = false;
                }
                slider.style.left = width + speed + 'px';
                if (isStop) {
                    clearInterval(timer)
                    callback && callback();
                }
            }, time)
        }
        onload = setInterval(next, 2500)
        function next(){
            if(isloading){
              return;
            }
            isloading = true;
            num++;
            navs();
            animate(slider, {left: -1200*num}, function(){
              if(num == 6){
                slider.style.left = '-1200px';
                num = 1;
              }
              isloading = false;
            });
          }
        function prev(){
            index--;
            navChange();
            lunbo(10,index, function () {
                if (index == 0) {
                    slider.style.left = '-6000px';
                    index = 5;
                }
            })
        }
        function navChange() {
            for (var i = 0; i < oNavlist.length; i++) {
                oNavlist[i].className = '';
            };
            if (index == 6) {
                oNavlist[0].className = 'active';
            } else if (index == 0) {
                oNavlist[4].className = 'active';
            } else {
                oNavlist[index - 1].className = 'active';
            }
        }
        left.onclick =prev;
        right.onclick = next;
        for(var i = 0;i<oNavlist.length;i++){
            oNavlist[i].idx = i;
            oNavlist[i].onclick = function(){
                index = this.idx + 1;
                lunbo(10,index)
                navChange();
            }
        }
    }
    return { show: show };
}());