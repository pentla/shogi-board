(function(){
    //関数 function  アンダースコア記法
    //変数 var       camelCase記法
    //クラス         最初の文字は大文字
    //定数           全て大文字。(未だ使ってないけど、駒の名前を定義するつもり)

    //減らしたい変数
    //sente , board81[x][y] , motigoma

    //マスを数値化する。
    //0 何もないマス。 1 ~ 14 先手の駒。  15 ~ 28 後手の駒。
    var KomaName = function(){
      this.EMPTY =          0;
      this.senteMin =       1;
      this.senteMax =      14;
      this.goteMin  =      15;
      this.goteMax  =      28;
      this.promote  =       1;   //歩、香、桂、銀、角、飛車 + 1 === 成り駒。

      this.FU    =          1;
      this.TO    =          2;
      this.KYO   =          3;
      this.NKYO  =          4;
      this.KEI   =          5;
      this.NKEI  =          6;
      this.GIN   =          7;
      this.NGIN  =          8;
      this.KIN   =          9;
      this.HI    =         10;
      this.RYU   =         11;
      this.KAKU  =         12;
      this.UMA   =         13;
      this.GYOKU =         14;
      this.FU_   =         15;
      this.TO_   =         16;
      this.KYO_  =         17;
      this.NKYO_ =         18;
      this.KEI_  =         19;
      this.NKEI_ =         20;
      this.GIN_  =         21;
      this.NGIN_ =         22;
      this.KIN_  =         23;
      this.HI_   =         24;
      this.RYU_  =         25;
      this.KAKU_ =         26;
      this.UMA_  =         27;
      this.GYOKU_=         28;
    }
    var koma = new KomaName();

    var komaType= [];
    put_KomaPicture_into_komaType(komaType);

    //komaTypeに駒の情報を入れる
    function put_KomaPicture_into_komaType(komaType){
      let komaList = document.getElementById('komaList');
      let child = komaList.firstChild;
      let i = 0;
      while(child){
        if(child.nodeType === 1){
          komaType[i] = child;
          i++;
        }
        child = child.nextSibling;
      }
    }

    /**
    * 9 × 9マスの盤。
    * board81のマスに数値を入れる
    * -> それぞれのマスにkomaTypeの画像を用意する
    * -> 全て揃ったらbanに情報を入れる。 -> 盤の完成
    */
    var board81= [];
    function to_empty_board81(board81){
      for(let x = 1; x <= 9 ;x++){
        board81[x] = [];
      for(let y = 1; y <= 9 ;y++){
        board81[x][y] = koma.EMPTY;
      }
      }
    };
    to_empty_board81(board81);

    var ban = document.getElementById('ban');
    var goteKomadai = document.getElementById('goteKomadai');
    var senteKomadai = document.getElementById('senteKomadai');

    var selected = false;//駒を掴んでいるか
    var motigoma = false;//持ち駒を掴んでいるか
    var sente = true;

    //banに入っている全ての要素を消す。
    function to_empty_ban(){
      while(ban.firstChild){
        ban.removeChild(ban.firstChild);
      }
    }

    //cに駒の画像を入れ、htmlに表示。
    function write_board(){
      let tmpDocumentFragment = document.createDocumentFragment();
      to_empty_ban();
      for( let y = 1; y <= 9 ; y++){
      for( let x = 1; x <= 9 ; x++){
        //board81で決めた場所に駒の画像を入れて、位置を調整
        let c;
        c = komaType[board81[x][y]].cloneNode(true);
        c.style.right = ((x-1) * 36 )+ 'px';
        c.style.top =  ((y-1) * 39 )+ 'px';
        select_or_move_koma(x,y,c);
        tmpDocumentFragment.appendChild(c);
      }
      }
      ban.appendChild(tmpDocumentFragment);
    };
    write_board(line_koma(koma,board81));
    //todo:cの代わりにboard81[x][y]を使ってコード短くできないか？

    var RecordKoma = function(place_x ,place_y ,record_komaType, removeInfo){
      this.x = place_x;
      this.y = place_y;
      this.type = record_komaType;
      this.removeInfo = removeInfo;
      // this.removed = removed;//持ち駒を使った時にその駒を消す。
    }
    function select_or_move_koma(x, y, c){
      c.addEventListener('click' , function(){
        let selectingKomaType = board81[x][y];

        if(!selected){
          //駒が選択されていないなら
         //空白のマスは動かせない。相手の駒も動かせない。
         if(selectingKomaType === koma.EMPTY) return;
         if(sente){
            if(selectingKomaType >= koma.goteMin)
            return;
          }else{
            if(selectingKomaType <= koma.senteMax)
            return;
          }
          //選択した駒を記録して、色を赤にする。
          c.style.background = 'red';
          console.log("red");
          recorded = new RecordKoma(x, y, selectingKomaType,undefined);
          //グローバル変数で定義しているのでバグでるかも
          selected = true;

        }else if(!motigoma){
            //駒を移動させるなら

            //同じ場所をクリックするなら行動キャンセル。
            if(selectingKomaType === board81[recorded.x][recorded.y]){
              selected = false;
              c.style.background = "none";
              return;
            }
            //ルールに沿っていないなら進めません。
            if(!shogi_rule(koma,board81,x,y)){
              console.log("cant go there");
              return;
            }
            //移動場所に駒がいたら駒台へ。
            //todo:相手の駒に限定させないとバグの元になる。
            if(selectingKomaType !== koma.EMPTY) {
              put_to_komadai(selectingKomaType);
            }
            //先ほど記録した駒を移動
            //ここのboard81[x][y]は変数の使用禁止
            board81[x][y] = recorded.type;
            board81[recorded.x][recorded.y] = koma.EMPTY;
            selected = false;
            sente = !sente;
            write_board();
        }else if(motigoma){
            //持ち駒を掴んでいるなら

            //駒がある場所に打つことはできない。
            if(selectingKomaType !== koma.EMPTY)return;
            //持ち駒を打って、駒台から持ち駒を消す。
            selectingKomaType = recordedMotigoma.type;
            if(sente){
              senteKomadai.removeChild(recordedMotigoma.removeInfo);
              senteMotigoma --;
              }else{
              goteKomadai.removeChild(recordedMotigoma.removeInfo);
              goteMotigoma --;
            }
            //打ったのでmotigoma , selectedはリセット。
            motigoma = false;
            selected = false;
            sente = !sente;
            write_board();
            //打った持ち駒を盤に表示させるためもう一度表示。
        }
      });
    }
    //todo:ifの階層を１段階減らしたい。

    //持ち駒の数
    var senteMotigoma = 0;
    var goteMotigoma = 0;

    //駒の所有者を変えて駒台に追加する。引数は捕られた駒。
    function put_to_komadai(caughtKoma){
      let betrayKoma;
      if(sente){
        betrayKoma = caughtKoma - 14;
        //先手の同じ種類の駒になる。
        komadai_appendChild(senteKomadai,betrayKoma,senteMotigoma);
        senteMotigoma++;
      }else{
        betrayKoma = caughtKoma + 14;
        //後手の同じ種類の駒になる。
        komadai_appendChild(goteKomadai,betrayKoma,goteMotigoma);
        goteMotigoma++;
      }
    };

    function komadai_appendChild(who_komadai ,betrayKoma ,who_motigoma){
      let thenTeban = sente;
      //駒台に駒を追加する。
      let c;
      c = komaType[betrayKoma].cloneNode(true);
      c.style.border = 'none';
      //駒台には3*3個乗るように
      if(who_motigoma < 3){
        c.style.left = (who_motigoma * 36)       + 'px';
      }
      else if(who_motigoma < 6){
        c.style.left = ((who_motigoma - 3) * 36) + 'px';
        c.style.top =  '39px';
      }
      else {
        c.style.left = ((who_motigoma - 6) * 36) + 'px';
        c.style.top =  '78px';
      }
      //駒台の駒をクリックすれば選択状態(selected)になる。
      c.addEventListener('click' , function(){
        if(thenTeban !== sente)return;
        c.style.background = 'red';
        recordedMotigoma = new RecordKoma(undefined,undefined,betrayKoma,c);
        //引数にundefinedを送っているので、バグの原因になる？
        selected = true;
        motigoma = true;
      });
      who_komadai.appendChild(c);
    }

    function reset_komadai(){
      while(goteKomadai.firstChild){
        goteKomadai.removeChild(goteKomadai.firstChild);
      }
      while(senteKomadai.firstChild){
        senteKomadai.removeChild(senteKomadai.firstChild);
      }
      senteMotigoma = 0;
      goteMotigoma = 0;
    }

    //盤、駒台のリセットボタン
    resetBtn = document.getElementById('btn');
    resetBtn.addEventListener('click' , function(){
      to_empty_board81(board81);
      write_board(line_koma(koma,board81));
      reset_komadai();
      sente = true;
      selected = false;
      motigoma = false;
    });

})();
