  var piece; //駒の画像

  var selectFlg; //駒が選択されたかどうか
  var firstClickDan , firstClickSuji;//駒を選択する時にクリックされた段、数字
  var selectedKoma; //選択された駒の種類。

  var board = []; //将棋盤

  //駒の表記
  var out_of_board = 128; // ?
  var empty = 0; // ?

  //駒を定義していく。
  var fu = 1;
  var kyo = 2;
  var kei = 3;
  var gin = 4;
  var kin = 5;
  var kaku = 6;
  var hi = 7;
  var ou = 8;

  // 成り駒
  var to = promoted + fu;
  var nkyo = promoted + kyo;
  var nkei = promoted + kei;
  var ngin = promoted + gin;
  var uma = promoted + kaku;
  var ryu = promoted + hi;

  //敵の駒 には全て先頭にEをつけておく。
  var Efu = 1;
  var Ekyo = 2;
  var Ekei = 3;
  var Egin = 4;
  var Ekin = 5;
  var Ekaku = 6;
  var Ehi = 7;
  var Eou = 8;

  // 敵の成り駒
  var Eto = promoted + fu;
  var Enkyo = promoted + kyo;
  var Enkei = promoted + kei;
  var Engin = promoted + gin;
  var Euma = promoted + kaku;
  var Eryu = promoted + hi;

  var showBoard = function(){
    var b = document.getElementById('board');
    //boardのidを取得。  var board = []; //将棋盤
    var dan = 1;
    var suji = 1;
    for (dan = 1;dan <=  9;dan++){
      for(suji = 1;suji <= 9;suji++){
      //9×9マス分何かを繰り返してる。
      var c = piece[board[dan][suji]].cloneNode(true);
      //この文章が謎。cloneNodeと[board[dan][suji]]?
    }
  }
