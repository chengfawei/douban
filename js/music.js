window.onload = function () {
    /*轮播图*/
    var list = document.getElementById('list-img');
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var ads = document.getElementById("ads");
    var timer;
    var buttons = document.getElementById("buttons").getElementsByTagName("li");
    var index = 1;

    function animate(offSet) {
        var newLeft = parseInt(list.style.left) + offSet;
        list.style.left = newLeft + 'px';
        /*判断偏移量回到第一张*/
        if (newLeft < -3540) {
            list.style.left = -590 + 'px';
        }
        if (newLeft > -590) {
            list.style.left = -3540 + 'px';
        }
    }

    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 2000)
    }

    function stop() {
        clearInterval(timer);
    }

    /*设置小圆点*/
    function buttonsShow() {
        //将之前的小圆点的样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'active') {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = 'active';
    }

    prev.onclick = function () {
        index = index - 1;
        if (index < 1) {
            index = 6;
        }
        buttonsShow();
        animate(590);
    };
    next.onclick = function () {
        index = index + 1;
        if (index > 6) {
            index = 1;
        }
        animate(-590);
        buttonsShow();
    };


    //小圆点点击
    for (var i = 0; i < buttons.length; i++) {
        (function (i) {
            buttons[i].onclick = function () {
                var myIndex = parseInt(this.getAttribute("index"));
                var offset = 590 * (index - myIndex);
                animate(offset);
                index = myIndex;
                buttonsShow();
            }
        })(i)
    }
    /*设置小圆点*/
    ads.onmouseover = stop;
    ads.onmouseout = play;
    play();
    /*轮播图*/

    var mus = document.getElementById('musical');
    var fash = document.getElementById('fash1');
    var quik = document.getElementById('quik1');
    var tab = mus.getElementsByTagName('div');


    fash.onclick = function () {
        quik.className = '';
        this.className = 'show1';
        tab[0].className = 'show2';
        tab[1].className = '';
    };
    quik.onclick = function () {
        fash.className = '';
        this.className = 'show1';
        tab[0].className = '';
        tab[1].className = 'show2';
    };

    /*推荐*/
    var but1 = document.getElementById('but1');
    var but2 = document.getElementById('but2');
    var sen2 = document.getElementById('sen2');
    var sen3 = document.getElementById('sen3');

    but1.onclick = function () {
        this.style.background = '#80cfbb';
        but2.style.background = '#23ab88';
        sen2.className = 'show';
        sen3.className = '';
    };
    but2.onclick = function () {
        this.style.background = '#80cfbb';
        but1.style.background = '#23ab88';
        sen2.className = '';
        sen3.className = 'show';
    };


    /*推荐*/

    //hot列表
    var li = document.getElementById('hot').getElementsByTagName('a');
    var lis = document.getElementById('hot-list').getElementsByTagName('ul');

    for (var i = 0; i < lis.length; i++) {
        li[i].index = i;
        li[i].onclick = function () {
            for (var n = 0; n < lis.length; n++) {
                li[n].className = '';
                lis[n].className = '';
            }
            this.className = 'sec';
            console.log(this.index);
            lis[this.index].className = 'sec';
        }
    }

    //hot列表

};


