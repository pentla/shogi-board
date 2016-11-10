$(function(){
  "use strict";
    var nasi = document.getElementById('mass');
    var fu = document.getElementById('fu');
    var to = document.getElementById('to');
    var kyo = document.getElementById('kyo');
    var nkyo = document.getElementById('nkyo');
    var kei = document.getElementById('kei');
    var nkei = document.getElementById('nkei');
    var gin = document.getElementById('gin');
    var ngin = document.getElementById('ngin');
    var kin = document.getElementById('kin');
    var kaku = document.getElementById('kaku');
    var uma = document.getElementById('uma');
    var hi = document.getElementById('hi');
    var ryu = document.getElementById('ryu');
    var gyoku = document.getElementById('gyoku');
    //次は的になります。
    var tfu = document.getElementById('tfu');
    var tto = document.getElementById('tto');
    var tkyo = document.getElementById('tkyo');
    var tnkyo = document.getElementById('tnkyo');
    var tkei = document.getElementById('tkei');
    var tnkei = document.getElementById('tnkei');
    var tgin = document.getElementById('tgin');
    var tngin = document.getElementById('tngin');
    var tkin = document.getElementById('tkin');
    var tkaku = document.getElementById('tkaku');
    var tuma = document.getElementById('tuma');
    var thi = document.getElementById('thi');
    var tryu = document.getElementById('tryu');
    var tgyoku = document.getElementById('tgyoku');
    //配列にしたほうがいいのかな？駒画像をhtmlから回収するための大量のvar。

    var promoted = 6;//駒がなる時は、+6すれば良い。(金、玉は成れない。)

    var ban = document.getElementById('board');
    var piece = [];//位置を管理してる。
    var board = [];//駒の表示を管理してる。

    btn.addEventListener('click' , function(){
      reset();
      showBoard();
    });//最後にshowBoard()を呼び出せばどこからでも盤の状態を動かせる。

    // j = board[x][y];最初に選んだ駒。
    // h = board[_x][_y];移動したい場所にある駒
    // board[x][y] = h;
    // board[_x][_y] = 0; 駒を移動させて、移動した駒の場所には空欄を入れる。
    //そのあと、hに駒が入っていれば、駒台に移動させる。
    //if(h >0){//駒大に移動させる処理。}



    var showBoard = function(){
      for(var y = 1; y <= 9 ; y++){
      for(var x = 1; x <= 9 ; x++){

        var c = piece[board[x][y]].cloneNode(true);
        c.style.right = ((x-1) * 46 + 25)+ "px";
        c.style.top =  ((y-1) * 53 + 25)+ "px";//縦45px 横50px
        //cを大量に生成して、一つずつずらして表示していく。
        ban.appendChild(c);
        //最後に、banのなかにcを入れていく。
        if(board[x][y] == 0){
          //functionで囲わないと、onclickが作動する時にはもうcのループが終わっているらしい。
          (function(){
            var _x = x , _y = y;
            c.onclick = function(){
              board[_x][_y] = 1;
              showBoard();
            };//なぜなのかわからないのに動いているっw functionが常時起動しているのかな？
        })();
        }
      }
      }
      // $(c).click(function(){
      //   $(this).css('background' , '.red');
      //   showBoard();
      // });
  };

    var shokihaiti = function(){//初期配置のための処理。
      for(var i = 1;i <= 9; i++){
        board[i][7] = 1;//歩を７筋に並べました。
      }
      board[1][9] = 2;
      board[9][9] = 2;//香車
      board[2][9] = 3;
      board[8][9] = 3;//桂馬
      board[3][9] = 4;
      board[7][9] = 4;//銀
      board[2][8] = 5;//角
      board[8][8] = 6;//飛車
      board[6][9] = 13;//金
      board[4][9] = 13;
      board[5][9] = 14;//玉

      for(var t =1;t <= 9; t++){
        board[t][3] = 15;//敵の歩を３筋に並べました。
      }
      board[1][1] = 16;//敵の香車
      board[9][1] = 16;
      board[2][1] = 17;//敵の桂馬
      board[8][1] = 17;
      board[3][1] = 18;//敵の銀
      board[7][1] = 18;
      board[2][2] = 19;//敵の角
      board[8][2] = 20;//敵の飛車
      board[6][1] = 27;//敵の金
      board[4][1] = 27;
      board[5][1] = 28;//敵の玉
    };
    function reset(){ //置かれている駒を全て払うための処理。
      for(var d = 1;d<=9;d++){
      for(var e = 1;e<=9;e++){
        board[d][e] = 0;
      }
      }
    };

    onload = function(){
      piece =[nasi,fu,kyo,kei,gin,kaku,hi,to,nkyo,nkei,ngin,ryu,uma,kin,gyoku
              ,    tfu,tkyo,tkei,tgin,tkaku,thi,tto,tnkyo,tnkei,tngin,tryu,tuma,tkin,tgyoku];
              //tfu = 15 tgyoku = 28 +6すれば成れる。(金、玉以外は)
      for(var a = 1; a <= 9 ;a++){
        board[a] = [];
      for(var b = 1; b <= 9 ;b++){
        board[a][b] = 0; //0,つまりnasiを代入していく。
      }
      }

      board[5][5] = 2;//最初がx、次がy
      reset();//駒を一旦全てなくす。
      shokihaiti();
      showBoard();
    };


});
