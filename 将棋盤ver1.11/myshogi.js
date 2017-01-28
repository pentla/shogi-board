(function(){
    var koma = [];
      var list = document.getElementById('list');
      var child = list.firstChild;
      var nord = 0;
      while(child){
        if(child.nodeType === 1){
          koma[nord] = child;
          nord++;
        }
        child = child.nextSibling;
      }

    var komadai1 = document.getElementById('komadai1');
    var komadai2 = document.getElementById('komadai2');
    var ban = document.getElementById('ban');
    var board = [];//駒の表示を管理してる。
    for(var a = 1; a <= 9 ;a++){
      board[a] = [];
    for(var b = 1; b <= 9 ;b++){
      board[a][b] = 0; //駒が入ってない状態。
    }
    }
    var selected = false;//駒の移動に必要。
    var motigoma = false;
    var sente = true;

    function showBoard(){
      var c;
      var frag = document.createDocumentFragment();
      while(ban.firstChild){
        ban.removeChild(ban.firstChild);
      }
      for( var y = 1; y <= 9 ; y++){
      for( var x = 1; x <= 9 ; x++){
        c = koma[board[x][y]].cloneNode(true);
        c.style.right = ((x-1) * 46 + 25)+ "px";
        c.style.top =  ((y-1) * 53 + 25)+ "px";
        if(selected && _x === x && _y === y && !motigoma){
          c.style.background = 'red';
        }
        frag.appendChild(c);
        moveKoma( x, y ,c);
      }
      }
      ban.appendChild(frag);
  };//showboard
    var _x , _y , record;
    var send;
    var removed;
    function moveKoma( x, y, c){
        c.addEventListener('click' , function(){
        if(selected === false && board[x][y] !== 0){
          console.log(sente);//あとで消す
         if(sente){//先手なら後手の駒を、後手なら先手の駒を触れない。
            if(board[x][y] > 14 ) {return;}
          } else{
            if(board[x][y] < 14 ) return;
          }
          _x = x;
          _y = y;
          record = board[x][y];//クリックした場所、駒の内容を記録。
          selected = true;//選択状態にする。
          showBoard();
        }else if(selected){
          // if(board[x][y] === board[_x][_y]) return;
          if(board[x][y] >= 1) {
            send = board[x][y];
            getKoma(send);//取られた駒は駒台へ。
          }
          if(motigoma){
            motigoma = false;
            if(sente){
              komadai2.removeChild(removed);
              sentecheck --;
            }else{
              komadai1.removeChild(removed);//持ち駒を打ったならその駒を消す。
              gotecheck --;
            }
          }//if(motigoma)
          board[x][y] = record;//記録した内容を移動。
          board[_x][_y] = 0;//移動した後の場所を０に。
          selected = false;//選択状態を解除。
          changeTeban();
          console.log(sente);//あとで消す
          showBoard();
        }//if(selected)
      });//c.eventlistener
    };
//リファクタリング　オブジェクト指向
    var sentecheck = 0;
    var gotecheck = 0;//駒台に置く場所の変数。
      function getKoma(a){//とった駒を駒台にのせる。
      var d , e;
      if(sente){
        e = a - 14;//敵の駒を自分の駒に。
        d = koma[e].cloneNode(true);
        d.style.border = 'none';
        d.style.left = (sentecheck * 46) + 'px';
        komadai2.appendChild(d);
        sentecheck++//先手なら駒台１へ。
        d.addEventListener('click', function(){
            if(!sente || motigoma) return;
            selected = true;
            record = e;
            d.style.background = 'red';
            motigoma = true;//持ち駒を使用しています、という変数。
            removed = d;//
        });
      }else{
        e = a + 14;
        d = koma[e].cloneNode(true);//駒を後手のものに。a+14にすれば駒台の駒が入れ替わる。
        d.style.border = 'none';
        d.style.left = (gotecheck * 46) + 'px';
        komadai1.appendChild(d);
        gotecheck++;
        d.addEventListener('click', function(){
            if(sente || motigoma) return;
            selected = true;
            record = e;
            d.style.background = 'red';
            motigoma = true;//持ち駒を使用しています、という変数。
            removed = d;
            console.log(removed);
        });
      }
      console.log(d);
    };
    function changeTeban(){
      if(sente){
        sente = false;
      }else{
        sente = true;
      }//手番の入れ替え。
    }
    function lineKoma(){
      //初期配置のための処理。
      // -14すれば味方の駒になる。
      for(var i = 1;i <= 9; i++){
        board[i][7] = 1;//歩を７筋に並べました。
        board[i][3] = 15;
      }
      board[1][9] = 3;
      board[9][9] = 3;//香車
      board[2][9] = 5;
      board[8][9] = 5;//桂馬
      board[3][9] = 7;
      board[7][9] = 7;//銀
      board[6][9] = 9;
      board[4][9] = 9;//金
      board[2][8] = 10;//飛車
      board[8][8] = 12;//角
      board[5][9] = 14;//玉

      board[1][1] = 17;
      board[9][1] = 17;//敵の香車
      board[2][1] = 19;
      board[8][1] = 19;//敵の桂馬
      board[3][1] = 21;
      board[7][1] = 21;//敵の銀
      board[6][1] = 23;
      board[4][1] = 23;//敵の金
      board[8][2] = 24;//敵の飛車
      board[2][2] = 26;//敵の角
      board[5][1] = 28;//敵の玉
    };
    btn.addEventListener('click' , function(){
      reset();
      lineKoma();
      showBoard();
      resetKomadai();
    });

    function reset(){
      for(var d = 1;d<=9;d++){
      for(var e = 1;e<=9;e++){
        board[d][e] = 0;
      }
      }
    };
    function resetKomadai(){
      while(komadai1.firstChild){
        komadai1.removeChild(komadai1.firstChild);
      }
      while(komadai2.firstChild){
        komadai2.removeChild(komadai2.firstChild);
      }
      sentecheck = 0;
      gotecheck = 0;
    }
    lineKoma();
    showBoard();
})();
